import { ImageResponse } from "next/og";

export const alt = "Reinvent Watch And Build — Amravati";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a0d12",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "12px solid #1a222d",
        }}
      >
        {/* Brand header */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#ff9900",
              color: "#000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 900,
              marginRight: "16px",
            }}
          >
            WB
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "#f5f7fa",
              }}
            >
              re:Invent Watch &amp; Build
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "#ff9900",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              Amravati Edition
            </span>
          </div>
        </div>

        {/* Main message */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: "20px",
            }}
          >
            <span>Watch. Learn.</span>
            <span style={{ color: "#ff9900" }}>Build. Connect.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#9aa7b8",
              maxWidth: "850px",
              lineHeight: 1.4,
            }}
          >
            Explore cloud technology, meet student builders, and connect in Amravati.
          </div>
        </div>

        {/* Footer info strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #242e3d",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "18px", color: "#f5f7fa", marginRight: "32px" }}>
              📍 Amravati, Maharashtra
            </span>
            <span style={{ fontSize: "18px", color: "#f5f7fa" }}>
              🎟️ 100% Free Entry (₹0)
            </span>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#ff9900",
              color: "#000",
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            Register on Luma
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
