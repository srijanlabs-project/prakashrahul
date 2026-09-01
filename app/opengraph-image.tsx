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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.05 }}>
          Rahul Prakash
        </div>
        <div style={{ fontSize: 40, marginTop: 18, color: "#f2691c" }}>
          Product &amp; Platform Leader
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 16,
            color: "#a3a3a3",
            fontFamily: "Arial, sans-serif",
          }}
        >
          0→1 Product Building | Enterprise SaaS | AI &amp; Workflow Platforms
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
