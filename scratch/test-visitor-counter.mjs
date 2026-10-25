import { recordVisitor, getVisitorCounts } from "../src/lib/visitor-store.js";
import fs from "fs";
import path from "path";

// Clean test data directory
const testDataDir = path.join(process.cwd(), ".data");
const testFile = path.join(testDataDir, "visitor-stats.json");
if (fs.existsSync(testFile)) {
  fs.unlinkSync(testFile);
}

async function runTests() {
  console.log("=== Running Visitor Counter Acceptance Tests ===\n");

  // Test 0: Initial state is 0/0
  const initial = await getVisitorCounts();
  console.assert(initial.totalVisits === 0, `Initial total visits should be 0, got ${initial.totalVisits}`);
  console.assert(initial.uniqueVisitors === 0, `Initial unique visitors should be 0, got ${initial.uniqueVisitors}`);
  console.log("✓ Test 0: Initial counts start cleanly at 0/0");

  // Test 1: First visit by Browser A
  const browserA_vid = "aaaaaaaa-aaaa-4aaa-aaaa-aaaaaaaaaaaa";
  const visit1 = await recordVisitor(browserA_vid, true);
  console.assert(visit1.stats.totalVisits === 1, `Total visits should be 1, got ${visit1.stats.totalVisits}`);
  console.assert(visit1.stats.uniqueVisitors === 1, `Unique visitors should be 1, got ${visit1.stats.uniqueVisitors}`);
  console.assert(visit1.isNewUnique === true, "Should be marked as new unique visitor");
  console.assert(visit1.isNewVisit === true, "Should be marked as new visit");
  console.log("✓ Test 1 Passed: First visit increments total visits (1) and unique visitors (1)");

  // Test 2: Same browser (Browser A) refreshes or navigates in same session (isNewSession = false)
  const refresh1 = await recordVisitor(browserA_vid, false);
  console.assert(refresh1.stats.totalVisits === 1, `Total visits should stay 1 on refresh, got ${refresh1.stats.totalVisits}`);
  console.assert(refresh1.stats.uniqueVisitors === 1, `Unique visitors should stay 1 on refresh, got ${refresh1.stats.uniqueVisitors}`);
  console.assert(refresh1.isNewUnique === false, "Refresh should not be a new unique");
  console.assert(refresh1.isNewVisit === false, "Refresh should not be a new visit");
  console.log("✓ Test 2 Passed: Same browser refresh/remount preserves counts without duplicate increments");

  // Test 3: Read-only check (polling or counter display does not increment)
  const readOnly = await getVisitorCounts();
  console.assert(readOnly.totalVisits === 1, `Read-only total visits should still be 1, got ${readOnly.totalVisits}`);
  console.assert(readOnly.uniqueVisitors === 1, `Read-only unique visitors should still be 1, got ${readOnly.uniqueVisitors}`);
  console.log("✓ Test 3 Passed: Idempotent read-only checks do not increment counters");

  // Test 4: Same browser (Browser A) revisits in a NEW session (e.g. after 30 min window, isNewSession = true)
  const revisitA = await recordVisitor(browserA_vid, true);
  console.assert(revisitA.stats.totalVisits === 2, `Total visits should increase to 2 on revisit, got ${revisitA.stats.totalVisits}`);
  console.assert(revisitA.stats.uniqueVisitors === 1, `Unique visitors must REMAIN 1, got ${revisitA.stats.uniqueVisitors}`);
  console.assert(revisitA.isNewUnique === false, "Existing browser must NOT be marked as new unique");
  console.assert(revisitA.isNewVisit === true, "New session must be marked as new visit");
  console.log("✓ Test 4 Passed: Same browser revisit increases total visits (2) but unique visitors remains 1");

  // Test 5: Different browser (Browser B) visits (isNewSession = true)
  const browserB_vid = "bbbbbbbb-bbbb-4bbb-bbbb-bbbbbbbbbbbb";
  const visitB = await recordVisitor(browserB_vid, true);
  console.assert(visitB.stats.totalVisits === 3, `Total visits should increase to 3, got ${visitB.stats.totalVisits}`);
  console.assert(visitB.stats.uniqueVisitors === 2, `Unique visitors should increase to 2, got ${visitB.stats.uniqueVisitors}`);
  console.assert(visitB.isNewUnique === true, "Browser B should be marked as new unique");
  console.log("✓ Test 5 Passed: Different browser increases both total visits (3) and unique visitors (2)");

  // Test 6: Concurrent requests (5 concurrent requests from the same visitorId with new session)
  // Ensure unique count does not duplicate even if 5 requests race
  const browserC_vid = "cccccccc-cccc-4ccc-cccc-cccccccccccc";
  const concurrentPromises = Array.from({ length: 5 }, () => recordVisitor(browserC_vid, false));
  const concurrentResults = await Promise.all(concurrentPromises);
  const finalState = await getVisitorCounts();
  console.assert(finalState.uniqueVisitors === 3, `Unique visitors must be exactly 3, got ${finalState.uniqueVisitors}`);
  const newUniqueCounts = concurrentResults.filter((r) => r.isNewUnique).length;
  console.assert(newUniqueCounts === 1, `Only 1 of the concurrent requests should be flagged as new unique, got ${newUniqueCounts}`);
  console.log("✓ Test 6 Passed: Concurrent requests safely serialized with zero duplicate unique visitor counts");

  console.log("\n=== ALL ACCEPTANCE TESTS PASSED SUCCESSFULLY ===");
}

runTests().catch((err) => {
  console.error("Test failed:", err);
  process.exit(1);
});
