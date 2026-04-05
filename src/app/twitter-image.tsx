import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#131313",
          color: "#e5e2e1",
          border: "16px solid #00ff41",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1 }}>
          Shivang Mokariya
        </div>
        <div style={{ marginTop: 28, fontSize: 34, color: "#00ff41" }}>
          Node.js Developer • Full-Stack Developer • AI & Automation Engineer
        </div>
        <div style={{ marginTop: 30, fontSize: 28, color: "#b9ccb2" }}>
          Portfolio, project work, technical skills, and contact details
        </div>
      </div>
    ),
    size,
  );
}
