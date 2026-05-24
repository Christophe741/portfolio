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
