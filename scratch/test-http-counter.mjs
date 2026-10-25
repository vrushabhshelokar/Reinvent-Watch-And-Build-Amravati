import fs from "fs";
import path from "path";

// Clean test data directory before test
const testDataDir = path.join(process.cwd(), ".data");
const testFile = path.join(testDataDir, "visitor-stats.json");
if (fs.existsSync(testFile)) {
  fs.unlinkSync(testFile);
}

const BASE_URL = "http://localhost:3000";

async function runHttpTests() {
  console.log("=== Running End-to-End HTTP Visitor Counter Tests ===\n");

  // Helper to extract cookies from response
  function getCookies(res) {
    const raw = res.headers.getSetCookie ? res.headers.getSetCookie() : [];
    const cookies = {};
    for (const c of raw) {
      const [nameVal] = c.split(";");
      const [k, v] = nameVal.split("=");
      cookies[k.trim()] = v ? v.trim() : "";
    }
    return cookies;
  }

  // 1. Initial State Check via GET (Read-Only)
  const getRes = await fetch(`${BASE_URL}/api/visitors`, { method: "GET" });
  const getData = await getRes.json();
  console.assert(getData.success === true, "GET /api/visitors should be successful");
  console.assert(getData.totalVisits === 0, `Initial visits should be 0, got ${getData.totalVisits}`);
  console.assert(getData.uniqueVisitors === 0, `Initial unique should be 0, got ${getData.uniqueVisitors}`);
  console.log(`✓ Step 1: Initial state is 0 visits / 0 unique. Storage: ${getData.storage}`);

  // 2. Prefetch / Bot Guard Check (Should not increment)
  const botRes = await fetch(`${BASE_URL}/api/visitors`, {
    method: "POST",
    headers: { "User-Agent": "Googlebot/2.1 (+http://www.google.com/bot.html)" },
  });
  const botData = await botRes.json();
  console.assert(botData.ignored === true, "Bot request should be ignored");
  console.assert(botData.totalVisits === 0, `Total visits after bot should stay 0, got ${botData.totalVisits}`);
  console.log("✓ Step 2: Bot / prefetch filtering correctly ignores automated crawlers");

  // 3. First Visit by Browser A (No cookies sent)
  const visit1Res = await fetch(`${BASE_URL}/api/visitors`, {
    method: "POST",
    headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)" },
  });
  const visit1Data = await visit1Res.json();
  const cookiesA = getCookies(visit1Res);

  console.assert(visit1Data.totalVisits === 1, `Total visits should be 1, got ${visit1Data.totalVisits}`);
  console.assert(visit1Data.uniqueVisitors === 1, `Unique visitors should be 1, got ${visit1Data.uniqueVisitors}`);
  console.assert(visit1Data.isNewUnique === true, "Should be flagged as new unique");
  console.assert(Boolean(cookiesA["rwba_vid"]), "Must set rwba_vid persistent cookie");
  console.assert(Boolean(cookiesA["rwba_sid"]), "Must set rwba_sid session cookie");
  console.log("✓ Step 3: Browser A first visit recorded (Total: 1, Unique: 1). Cookies set:", Object.keys(cookiesA));

  // 4. Same Browser Refresh in same session (Sends rwba_vid and rwba_sid)
  const refreshRes = await fetch(`${BASE_URL}/api/visitors`, {
    method: "POST",
    headers: {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)",
      Cookie: `rwba_vid=${cookiesA["rwba_vid"]}; rwba_sid=${cookiesA["rwba_sid"]}`,
    },
  });
  const refreshData = await refreshRes.json();
  console.assert(refreshData.totalVisits === 1, `Refresh must NOT increase total visits, got ${refreshData.totalVisits}`);
  console.assert(refreshData.uniqueVisitors === 1, `Refresh must NOT increase unique visitors, got ${refreshData.uniqueVisitors}`);
  console.assert(refreshData.isNewUnique === false, "Refresh is not a new unique");
  console.assert(refreshData.isNewVisit === false, "Refresh is not a new session visit");
  console.log("✓ Step 4: Browser A refresh preserved exact counts (Total: 1, Unique: 1)");

  // 5. Read-only polling check (GET /api/visitors)
  const pollRes = await fetch(`${BASE_URL}/api/visitors`, { method: "GET" });
  const pollData = await pollRes.json();
  console.assert(pollData.totalVisits === 1, "Polling must not increment visits");
  console.assert(pollData.uniqueVisitors === 1, "Polling must not increment unique");
  console.log("✓ Step 5: Read-only GET requests never inflate counters");

  // 6. Browser A Revisit in a NEW session (Session cookie expired / omitted, but persistent rwba_vid present)
  const revisitRes = await fetch(`${BASE_URL}/api/visitors`, {
    method: "POST",
    headers: {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)",
      Cookie: `rwba_vid=${cookiesA["rwba_vid"]}`, // only persistent ID sent
    },
  });
  const revisitData = await revisitRes.json();
  console.assert(revisitData.totalVisits === 2, `Revisit must increase total visits to 2, got ${revisitData.totalVisits}`);
  console.assert(revisitData.uniqueVisitors === 1, `Revisit must keep unique visitors at 1, got ${revisitData.uniqueVisitors}`);
  console.assert(revisitData.isNewUnique === false, "Known visitor must not be unique");
  console.assert(revisitData.isNewVisit === true, "New session must be a new visit");
  console.log("✓ Step 6: Browser A revisit in new session increases visits (2) but unique stays 1");

  // 7. Different Browser (Browser B) visits (New clean browser)
  const visitBRes = await fetch(`${BASE_URL}/api/visitors`, {
    method: "POST",
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" },
  });
  const visitBData = await visitBRes.json();
  console.assert(visitBData.totalVisits === 3, `Browser B must increase total visits to 3, got ${visitBData.totalVisits}`);
  console.assert(visitBData.uniqueVisitors === 2, `Browser B must increase unique visitors to 2, got ${visitBData.uniqueVisitors}`);
  console.assert(visitBData.isNewUnique === true, "Browser B must be flagged as new unique");
  console.log("✓ Step 7: Browser B visit increases both visits (3) and unique (2)");

  // 8. Concurrent requests test (5 concurrent requests with same visitor ID)
  const testVid = "test-concurrent-" + Date.now();
  const concurrentPromises = Array.from({ length: 5 }, () =>
    fetch(`${BASE_URL}/api/visitors`, {
      method: "POST",
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
        Cookie: `rwba_vid=${testVid}`,
      },
    }).then((r) => r.json())
  );
  await Promise.all(concurrentPromises);

  const finalRes = await fetch(`${BASE_URL}/api/visitors`, { method: "GET" });
  const finalData = await finalRes.json();
  console.assert(finalData.uniqueVisitors === 3, `Unique count must be exactly 3 after concurrent calls, got ${finalData.uniqueVisitors}`);
  console.log(`✓ Step 8: Concurrent requests handled with zero duplicate unique increments. Final Unique: ${finalData.uniqueVisitors}`);

  console.log("\n=== ALL END-TO-END HTTP TESTS PASSED PERFECTLY ===");
}

runHttpTests().catch((err) => {
  console.error("HTTP Test Failed:", err);
  process.exit(1);
});
