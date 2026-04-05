import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(135deg, #101010 0%, #131313 55%, #1d2d1f 100%)",
          color: "#e5e2e1",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              border: "2px solid #00ff41",
              padding: "10px 16px",
              fontSize: 24,
              letterSpacing: "0.2em",
            }}
          >
            SHIVANGMOKARIYA.DEV
          </div>
          <div style={{ fontSize: 24, color: "#00ff41" }}>NODE • FULL-STACK • AI</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.02 }}>
            Shivang Mokariya
          </div>
          <div style={{ fontSize: 34, color: "#b9ccb2", maxWidth: 950 }}>
            Node.js Developer, Full-Stack Developer, and AI & Automation Engineer
            building backend APIs, modern web apps, and workflow automation.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 20,
            fontSize: 28,
            color: "#00ff41",
          }}
        >
          <div>NestJS</div>
          <div>Express.js</div>
          <div>TypeScript</div>
          <div>MongoDB</div>
          <div>AWS</div>
        </div>
      </div>
    ),
    size,
  );
}
