import { ImageResponse } from "next/og";
import { profile } from "./content";

// The preview card shown when the site's link is shared (LinkedIn, Slack,
// WhatsApp, X...). Rendered once at build time.
export const alt = `${profile.name}, ${profile.role}: ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Fetches a Google Font as TTF (the format the image renderer needs). */
async function googleFont(family: string, weight: number) {
  const css = await (
    await fetch(`https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}`)
  ).text();
  const url = css.match(/src: url\((.+?\.ttf)\)/)?.[1];
  if (!url) throw new Error(`No TTF found for ${family} ${weight}`);
  return (await fetch(url)).arrayBuffer();
}

export default async function OpengraphImage() {
  const [serif, sans] = await Promise.all([googleFont("Newsreader", 400), googleFont("Inter", 400)]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          background: "#FAFAF7",
          color: "#16161A",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#5C5C66" }}>
          {profile.role} · {profile.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Newsreader", fontSize: 104, lineHeight: 1, letterSpacing: "-0.02em" }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 28, fontSize: 38, color: "#5C5C66" }}>{profile.headline}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 28 }}>
          <div style={{ color: "#1F4FD8" }}>adjetei-martey.vercel.app</div>
          <div style={{ display: "flex", gap: 14, color: "#5C5C66" }}>
            <span>LLM apps</span>
            <span>·</span>
            <span>RAG</span>
            <span>·</span>
            <span>Agents</span>
            <span>·</span>
            <span>ML</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Newsreader", data: serif, weight: 400, style: "normal" },
        { name: "Inter", data: sans, weight: 400, style: "normal" },
      ],
    }
  );
}
