// Original decorative illustrations, drawn as inline SVG so they pick up the
// theme colours (and dark mode) from globals.css. All are aria-hidden.

const v = (name: string) => `var(--art-${name})`;

function Sparkle({ x, y, s = 1, className = "" }: { x: number; y: number; s?: number; className?: string }) {
  return (
    <path
      className={className}
      transform={`translate(${x} ${y}) scale(${s})`}
      d="M0 -12 C1.5 -3 3 -1.5 12 0 C3 1.5 1.5 3 0 12 C-1.5 3 -3 1.5 -12 0 C-3 -1.5 -1.5 -3 0 -12 Z"
      fill="var(--foreground)"
    />
  );
}

// Home hero: a sun setting behind an arch and rolling hills.
export function HeroArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 420 420" className={className} aria-hidden>
      <defs>
        <linearGradient id="sun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={v("sun")} />
          <stop offset="1" stopColor={v("rose")} />
        </linearGradient>
        <clipPath id="frame">
          <rect x="10" y="10" width="400" height="400" rx="200" />
        </clipPath>
      </defs>

      <g clipPath="url(#frame)">
        <rect x="0" y="0" width="420" height="420" fill={v("sand")} />
        <circle className="drift-slow" cx="250" cy="175" r="105" fill="url(#sun)" />
        {/* sun lines */}
        <g stroke={v("sand")} strokeWidth="6" opacity="0.7">
          <line x1="140" y1="215" x2="360" y2="215" />
          <line x1="150" y1="238" x2="350" y2="238" />
          <line x1="165" y1="259" x2="335" y2="259" />
        </g>
        {/* hills */}
        <path d="M0 300 C70 250 140 255 210 290 C280 325 340 300 420 260 V420 H0 Z" fill={v("sage")} />
        <path d="M0 345 C90 315 170 330 250 355 C320 377 370 360 420 340 V420 H0 Z" fill={v("clay")} />
        {/* arch */}
        <path d="M60 420 V250 a62 62 0 0 1 124 0 V420 Z" fill={v("plum")} />
        <path d="M86 420 V256 a36 36 0 0 1 72 0 V420 Z" fill={v("rose")} opacity="0.9" />
        <circle className="drift" cx="122" cy="300" r="14" fill={v("sun")} />
      </g>

      <Sparkle className="twinkle" x={355} y={70} s={1.4} />
      <Sparkle className="twinkle" x={60} y={120} s={0.9} />
      <circle cx="380" cy="150" r="5" fill={v("clay")} />
      <circle cx="40" cy="200" r="4" fill={v("sage")} />
    </svg>
  );
}

// Small motifs for the home page doors and page headers.
export function WorkMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <rect x="18" y="38" width="60" height="60" rx="16" fill={v("sage")} />
      <rect className="drift" x="42" y="18" width="60" height="60" rx="16" fill={v("sun")} opacity="0.92" />
      <circle cx="72" cy="48" r="10" fill={v("clay")} />
    </svg>
  );
}

export function ServicesMotif({ className = "" }: { className?: string }) {
  const rays = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <g stroke={v("sun")} strokeWidth="6" strokeLinecap="round">
        {rays.map((a) => (
          <line key={a} x1="60" y1="14" x2="60" y2="24" transform={`rotate(${a} 60 60)`} />
        ))}
      </g>
      <circle className="drift" cx="60" cy="60" r="27" fill={v("rose")} />
      <path d="M45 62 a15 15 0 0 0 30 0" fill="none" stroke={v("plum")} strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function AboutMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path d="M26 108 V58 a34 34 0 0 1 68 0 V108 Z" fill={v("plum")} />
      <circle className="drift" cx="60" cy="58" r="16" fill={v("sun")} />
      <path d="M10 108 C35 92 85 92 110 108 Z" fill={v("sage")} />
    </svg>
  );
}

// A soft wavy divider in the art tones.
export function Wave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 24" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d="M0 12 C50 0 100 24 150 12 S250 0 300 12 S400 24 450 12 S550 0 600 12"
        fill="none"
        stroke={v("rose")}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
