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
          backgroundColor: "#090809",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "12px solid #160B10",
        }}
      >
        {/* Brand header */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              border: "1px solid rgba(245, 240, 238, 0.3)",
              color: "#F5F0EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: 700,
              marginRight: "16px",
            }}
          >
            re:
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#F5F0EE",
              }}
            >
              Reinvent Watch And Build
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "#C24A70",
                textTransform: "uppercase",
                letterSpacing: "3px",
              }}
            >
              Amravati, Maharashtra
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
              fontWeight: 300,
              color: "#F5F0EE",
              lineHeight: 1.05,
              marginBottom: "20px",
              letterSpacing: "-2px",
            }}
          >
            <span>Watch. Build.</span>
            <span style={{ color: "#C24A70", fontWeight: 400 }}>Reinvent.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              color: "#C2B6BA",
              maxWidth: "850px",
              lineHeight: 1.4,
              fontWeight: 300,
            }}
          >
            
          </div>
        </div>

        {/* Footer info strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(245, 240, 238, 0.15)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "16px", color: "#C2B6BA", marginRight: "32px" }}>
              · Amravati
            </span>
            <span style={{ fontSize: "16px", color: "#F5F0EE" }}>
              100% Free Entry
            </span>
          </div>
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(245, 240, 238, 0.4)",
              color: "#F5F0EE",
              padding: "10px 24px",
              borderRadius: "6px",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            Register ↗
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
