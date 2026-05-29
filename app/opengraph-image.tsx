import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.og.alt;
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0369a1 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#7dd3fc",
            marginBottom: 16,
          }}
        >
          {siteConfig.og.brand}
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {siteConfig.og.title}
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 24,
            color: "#cbd5e1",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {siteConfig.og.subtitle}
        </div>
      </div>
    ),
    { ...size },
  );
}
