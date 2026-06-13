import { useId, type CSSProperties, type ReactNode } from "react";

type GlassSurfaceProps = {
  children: ReactNode;
  className?: string;
  borderRadius?: number;
  style?: CSSProperties;
};

export function GlassSurface({
  children,
  className = "",
  borderRadius = 24,
  style,
}: GlassSurfaceProps) {
  const filterId = `glass-surface-${useId().replace(/:/g, "")}`;

  return (
    <div
      className={`glass-surface ${className}`}
      style={{ borderRadius, ...style }}
    >
      <svg className="glass-surface__filter" aria-hidden="true">
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.5" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="18"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
      <div className="glass-surface__shine" style={{ filter: `url(#${filterId})` }} />
      <div className="glass-surface__content">{children}</div>
    </div>
  );
}