import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
  Img,
  staticFile,
} from "remotion";

const PINK = "#d63384";
const CYAN = "#2dd4a8";
const DARK = "#1a1a2e";
const DARKER = "#12121f";

// Flowing parametric line
const FlowLine: React.FC<{
  delay: number;
  y: number;
  color: string;
  amplitude: number;
  speed: number;
  thickness: number;
}> = ({ delay, y, color, amplitude, speed, thickness }) => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();
  const t = (frame - delay) * speed;

  const points: string[] = [];
  for (let x = -50; x <= width + 50; x += 8) {
    const wave1 = Math.sin((x * 0.008) + t * 0.05) * amplitude;
    const wave2 = Math.sin((x * 0.015) + t * 0.03 + 1.5) * amplitude * 0.5;
    const wave3 = Math.sin((x * 0.003) + t * 0.02) * amplitude * 1.2;
    const py = y + wave1 + wave2 + wave3;
    points.push(`${x},${py}`);
  }

  const opacity = interpolate(frame, [delay, delay + 30], [0, 0.7], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <svg
      width={width}
      height={1080}
      style={{ position: "absolute", top: 0, left: 0, opacity }}
    >
      <polyline
        points={points.join(" ")}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        strokeLinecap="round"
      />
    </svg>
  );
};

// Floating particle
const Particle: React.FC<{
  startX: number;
  startY: number;
  delay: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
}> = ({ startX, startY, delay, size, color, speedX, speedY }) => {
  const frame = useCurrentFrame();
  const t = Math.max(0, frame - delay);
  const x = startX + Math.sin(t * 0.04) * speedX + t * 0.3;
  const y = startY + Math.cos(t * 0.03) * speedY - t * 1.2;
  const opacity = interpolate(t, [0, 20, 80, 120], [0, 0.8, 0.6, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: color,
        opacity,
        filter: `blur(${size > 4 ? 2 : 0}px)`,
        boxShadow: `0 0 ${size * 3}px ${color}`,
      }}
    />
  );
};

// Geometric frame element
const GeoFrame: React.FC<{ frame: number }> = ({ frame: currentFrame }) => {
  const { fps } = useVideoConfig();

  const scale = spring({
    frame: currentFrame - 30,
    fps,
    config: { damping: 20, stiffness: 100 },
  });

  const rotation = interpolate(currentFrame, [0, 300], [0, 360]);
  const opacity = interpolate(currentFrame, [30, 60, 250, 280], [0, 0.3, 0.3, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: 600,
        height: 600,
        marginLeft: -300,
        marginTop: -300,
        border: `2px solid ${CYAN}`,
        opacity,
        transform: `scale(${scale * 1.5}) rotate(${rotation}deg)`,
      }}
    />
  );
};

// Light sweep effect
const LightSweep: React.FC<{ delay: number; color: string }> = ({ delay, color }) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [delay, delay + 60], [-0.3, 1.3], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(frame, [delay, delay + 15, delay + 45, delay + 60], [0, 0.4, 0.4, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: `${progress * 100}%`,
        width: "20%",
        height: "100%",
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        opacity,
        filter: "blur(40px)",
      }}
    />
  );
};

export const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo animation
  const logoScale = spring({
    frame: frame - 45,
    fps,
    config: { damping: 15, stiffness: 80 },
  });
  const logoOpacity = interpolate(frame, [45, 75], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Background pulse
  const bgPulse = Math.sin(frame * 0.03) * 0.05 + 1;

  // Generate particles
  const particles = Array.from({ length: 40 }, (_, i) => ({
    startX: (i * 137.5) % 1920,
    startY: 800 + (i * 31) % 400,
    delay: (i * 7) % 250,
    size: 2 + (i % 5) * 1.5,
    color: i % 3 === 0 ? PINK : i % 3 === 1 ? CYAN : "#ffffff",
    speedX: 20 + (i % 8) * 15,
    speedY: 10 + (i % 6) * 8,
  }));

  // Flow lines config
  const flowLines = [
    { delay: 0, y: 200, color: PINK, amplitude: 40, speed: 1.2, thickness: 2 },
    { delay: 10, y: 350, color: CYAN, amplitude: 55, speed: 0.8, thickness: 1.5 },
    { delay: 5, y: 500, color: PINK, amplitude: 35, speed: 1.5, thickness: 3 },
    { delay: 15, y: 650, color: CYAN, amplitude: 50, speed: 1.0, thickness: 2 },
    { delay: 8, y: 800, color: `${PINK}88`, amplitude: 60, speed: 0.6, thickness: 1 },
    { delay: 20, y: 150, color: `${CYAN}88`, amplitude: 30, speed: 1.8, thickness: 1 },
    { delay: 12, y: 900, color: PINK, amplitude: 45, speed: 0.9, thickness: 2.5 },
    { delay: 3, y: 450, color: `${CYAN}66`, amplitude: 70, speed: 0.5, thickness: 1 },
  ];

  // Vertical light columns (like waterfall from the video)
  const columns = Array.from({ length: 12 }, (_, i) => {
    const x = 100 + i * 160;
    const columnDelay = i * 8;
    const columnProgress = interpolate(
      frame,
      [columnDelay, columnDelay + 40, columnDelay + 80, columnDelay + 120],
      [0, 1, 1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
    const columnHeight = interpolate(
      frame,
      [columnDelay, columnDelay + 60],
      [0, 1080],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    return (
      <div
        key={`col-${i}`}
        style={{
          position: "absolute",
          left: x,
          top: 0,
          width: 3,
          height: columnHeight,
          background: `linear-gradient(180deg, transparent, ${i % 2 === 0 ? PINK : CYAN}, transparent)`,
          opacity: columnProgress * 0.4,
          filter: "blur(4px)",
        }}
      />
    );
  });

  // Second wave of columns
  const columns2 = Array.from({ length: 8 }, (_, i) => {
    const x = 200 + i * 210;
    const columnDelay = 100 + i * 10;
    const columnProgress = interpolate(
      frame,
      [columnDelay, columnDelay + 30, columnDelay + 70, columnDelay + 100],
      [0, 1, 1, 0],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );

    return (
      <div
        key={`col2-${i}`}
        style={{
          position: "absolute",
          left: x,
          top: 0,
          width: 6,
          height: "100%",
          background: `linear-gradient(180deg, ${CYAN}00, ${PINK}, ${CYAN}00)`,
          opacity: columnProgress * 0.25,
          filter: "blur(8px)",
        }}
      />
    );
  });

  return (
    <AbsoluteFill>
      {/* Deep dark background with subtle pulse */}
      <AbsoluteFill
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${DARK}, ${DARKER})`,
          transform: `scale(${bgPulse})`,
        }}
      />

      {/* Geometric rotating frame */}
      <GeoFrame frame={frame} />

      {/* Flowing parametric lines */}
      {flowLines.map((line, i) => (
        <FlowLine key={i} {...line} />
      ))}

      {/* Vertical light columns (waterfall effect) */}
      {columns}
      {columns2}

      {/* Light sweeps */}
      <LightSweep delay={20} color={PINK} />
      <LightSweep delay={90} color={CYAN} />
      <LightSweep delay={160} color={PINK} />
      <LightSweep delay={220} color={CYAN} />

      {/* Particles rising */}
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Central glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 800,
          height: 800,
          marginLeft: -400,
          marginTop: -400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${PINK}22, transparent 70%)`,
          opacity: interpolate(Math.sin(frame * 0.04), [-1, 1], [0.3, 0.7]),
        }}
      />

      {/* Midwall Logo */}
      <Sequence from={45}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${logoScale})`,
            opacity: logoOpacity,
          }}
        >
          <Img
            src={staticFile("images/midwall-logo.png")}
            style={{
              height: 200,
              filter: `drop-shadow(0 0 30px ${PINK}88) drop-shadow(0 0 60px ${CYAN}44)`,
            }}
          />
        </div>
      </Sequence>

      {/* Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
