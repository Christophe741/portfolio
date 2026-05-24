import { CSSProperties, ReactNode } from "react";

interface HudPanelProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  id?: string;
}

export default function HudPanel({
  children,
  style,
  className = "",
  id,
}: HudPanelProps) {
  return (
    <div id={id} className={`hud ${className}`} style={style}>
      <span className="br1" />
      <span className="br2" />
      {children}
    </div>
  );
}

interface HudHeaderProps {
  id: string;
  title: string;
  stat: string;
}

export function HudHeader({ id, title, stat }: HudHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap: "10px",
        marginBottom: "14px",
        color: "var(--ink-mute)",
        fontSize: "11px",
        letterSpacing: ".14em",
        textTransform: "uppercase",
      }}
    >
      <span style={{ color: "var(--teal)" }}>{id}</span>
      <span
        style={{
          color: "var(--ink)",
          fontSize: "11px",
          letterSpacing: ".14em",
        }}
      >
        {title}
      </span>
      <span
        style={{
          flex: 1,
          height: "1px",
          background: "linear-gradient(90deg,var(--line),transparent)",
          alignSelf: "center",
        }}
      />
      <span style={{ color: "var(--green)", fontSize: "10.5px" }}>{stat}</span>
    </div>
  );
}
