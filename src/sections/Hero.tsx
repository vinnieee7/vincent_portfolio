import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TYPED = "Good morning. Your encrypted session is ready. Initializing secure shell...";

function Typewriter() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setI((v) => (v >= TYPED.length ? 0 : v + 1));
    }, 70);
    return () => clearInterval(id);
  }, []);
  return (
    <span>
      {TYPED.slice(0, i)}
      <span className="inline-block w-[6px] h-[12px] bg-white/80 ml-[2px] align-middle animate-pulse" />
    </span>
  );
}

export function Hero() {
  // vertical-axis tilt driven by pointer Y; horizontal stays fixed
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerY = useMotionValue(0);
  const springY = useSpring(pointerY, { stiffness: 80, damping: 18, mass: 0.6 });
  // base tilt to the left on Y axis (~ -14deg), then add pointer-driven X-axis tilt
  const rotateX = useTransform(springY, [-1, 1], [18, -18]);

  useEffect(() => {
    const handle = (e: PointerEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cy = r.top + r.height / 2;
      const norm = Math.max(-1, Math.min(1, (e.clientY - cy) / (r.height / 2)));
      pointerY.set(norm);
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, [pointerY]);

  return (
    <section
      id="hero"
      className="relative min-h-screen px-6 md:px-16 pt-32 pb-20 overflow-hidden"
    >
      {/* Wave overlay on the paper background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-x-0 top-0 w-[200%] h-full opacity-[0.18]"
          viewBox="0 0 2400 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.32" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            fill="url(#waveGrad)"
            initial={{ x: 0 }}
            animate={{ x: [-1200, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            d="M0,400 C300,300 600,500 900,400 C1200,300 1500,500 1800,400 C2100,300 2400,500 2700,400 L2700,800 L0,800 Z"
          />
          <motion.path
            fill="url(#waveGrad)"
            initial={{ x: 0 }}
            animate={{ x: [0, -1200] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            opacity={0.6}
            d="M0,460 C300,360 600,560 900,460 C1200,360 1500,560 1800,460 C2100,360 2400,560 2700,460 L2700,800 L0,800 Z"
          />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          <h1
            className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[1.02] tracking-[-0.03em] text-foreground"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              Introducing
            </motion.span>
            <AnimatedName text="A S Vincent." />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="mt-8 max-w-md text-[17px] leading-[1.65] text-muted-foreground"
          >
            Not a figment of your imagination. Vincent designs secure systems,
            audits networks, and ships software that thinks ahead. The future of
            personal computing is here. And it boots from your terminal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 font-semibold tracking-wide text-primary-foreground shadow-[0_0_30px_color-mix(in_oklab,var(--primary)_22%,transparent)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              View Work
            </a>
            <span className="font-mono text-[15px] text-muted-foreground">$ /portfolio</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 grid grid-cols-2 max-w-md gap-y-6 gap-x-10 font-mono text-[13px]"
          >
            <Spec label="FOCUS" value="Cybersecurity" />
            <Spec label="STACK" value="Python · Linux" />
            <Spec label="ROLE" value="Student / Dev" />
            <Spec label="STATUS" value="Open to roles" />
          </motion.div>
        </div>

        {/* RIGHT — vintage Mac */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[480px] aspect-[5/6]"
          style={{ perspective: 1200 }}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              rotateX,
              rotateY: -14,
              rotateZ: -3,
            }}
          >
            {/* Mac body */}
            <div
              className="absolute inset-0 rounded-[14px]"
              style={{
                background: "linear-gradient(180deg, #252a31 0%, #12151a 100%)",
                boxShadow:
                  "0 36px 90px -25px rgba(0,0,0,0.8), 0 0 60px rgba(74,222,128,0.08), inset 0 -8px 0 rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.08)",
              }}
            />
            {/* Screen bezel */}
            <div className="absolute top-[8%] left-[10%] right-[10%] h-[48%] rounded-[10px] bg-[#1a1a1a] p-3 shadow-inner">
              <div className="h-full w-full rounded-[6px] bg-[#0f0f10] relative overflow-hidden font-mono text-[10px] text-[#d8d2c0]">
                {/* sidebar */}
                <div className="absolute left-0 top-0 bottom-0 w-[26%] border-r border-white/10 p-2 space-y-1.5">
                  {[
                    { c: "#4a9eff", t: "System" },
                    { c: "#e08a3c", t: "Disk A" },
                    { c: "#666", t: "Trash" },
                    { c: "#666", t: "Write" },
                    { c: "#666", t: "Think" },
                  ].map((it) => (
                    <div key={it.t} className="flex items-center gap-1.5">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: it.c }}
                      />
                      <span>{it.t}</span>
                    </div>
                  ))}
                  <div className="absolute top-2 right-2 text-[9px] opacity-70">
                    SecOS 1.0
                  </div>
                </div>
                {/* terminal */}
                <div className="absolute left-[28%] right-2 top-2 bottom-2">
                  <div className="border border-white/15 rounded-sm px-1.5 py-0.5 flex justify-between mb-1.5">
                    <span>shell.sec</span>
                    <span>[x]</span>
                  </div>
                  <div className="px-1 leading-[1.5]">
                    <Typewriter />
                  </div>
                </div>
              </div>
            </div>
            {/* Vent slit */}
            <div className="absolute top-[62%] left-[55%] w-[28%] h-[3%] rounded-full bg-foreground/30" />
            {/* Speaker dots */}
            <div className="absolute top-[62%] right-[10%] grid grid-cols-3 gap-[3px]">
              {Array.from({ length: 9 }).map((_, k) => (
                <span key={k} className="h-[5px] w-[5px] rounded-full bg-foreground/25" />
              ))}
            </div>
            {/* Keyboard */}
            <div
              className="absolute left-[6%] right-[6%] bottom-[3%] h-[24%] rounded-[10px] p-2.5"
              style={{
                background: "linear-gradient(180deg,#252a31,#171a1f)",
                boxShadow: "inset 0 2px 0 rgba(255,255,255,0.08), 0 8px 20px -8px rgba(0,0,0,0.8)",
              }}
            >
              <div className="grid grid-cols-12 gap-1 h-full">
                {Array.from({ length: 36 }).map((_, k) => (
                  <div
                    key={k}
                    className="rounded-[3px] bg-foreground/10"
                    style={{ boxShadow: "0 1px 0 rgba(0,0,0,0.15)" }}
                  />
                ))}
              </div>
            </div>

            {/* Stickers */}
            <motion.div
              animate={{ rotate: [-8, -4, -8] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-[58%] left-[14%] h-10 w-10 rounded-full"
              style={{ background: "#c25a3a", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}
            />
            <motion.div
              animate={{ rotate: [10, 4, 10] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-[57%] left-[22%] h-11 w-11 rounded-[6px] bg-white flex items-center justify-center text-[#2a4d8c] text-xl shadow-md"
            >
              ★
            </motion.div>
            <motion.div
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 7, repeat: Infinity }}
              className="absolute top-[68%] left-[40%] px-2 py-1 rounded-[2px] text-[9px] font-bold tracking-widest text-white"
              style={{ background: "var(--accent-red)" }}
            >
              SECURE BY DESIGN
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-bold tracking-[0.15em] text-foreground">{label}</p>
      <p className="mt-1 text-muted-foreground">{value}</p>
    </div>
  );
}

function AnimatedName({ text }: { text: string }) {
  const letters = Array.from(text);
  return (
    <span
      className="italic font-medium relative inline-block overflow-hidden align-baseline"
      style={{ perspective: 600 }}
      aria-label={text}
    >
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", rotateX: -70, opacity: 0 }}
          animate={{ y: "0%", rotateX: 0, opacity: 1 }}
          transition={{
            delay: 0.5 + i * 0.05,
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
          style={{
            transformOrigin: "50% 100%",
            whiteSpace: "pre",
            backgroundImage:
              "linear-gradient(90deg, #f5f7fa 0%, #f5f7fa 40%, #4ade80 50%, #f5f7fa 60%, #f5f7fa 100%)",
            backgroundSize: "300% 100%",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            animation: `nameShine 6s linear ${1.2 + i * 0.05}s infinite`,
          }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
      <motion.span
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.4 + letters.length * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 -bottom-1 h-[3px] w-full origin-left bg-primary shadow-[0_0_14px_var(--primary)]"
      />
    </span>
  );
}