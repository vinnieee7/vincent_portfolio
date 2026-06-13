import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GlassSurface } from "@/components/GlassSurface";

const items = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-1/2 top-4 z-50 -translate-x-1/2 px-3 w-[min(960px,calc(100%-1rem))]"
    >
      <GlassSurface
        borderRadius={24}
        className={`transition-all duration-300 ${scrolled ? "scale-[0.98]" : ""}`}
      >
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "py-2 px-3" : "py-3 px-4"}`}>
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 rounded-lg pl-2 pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_var(--primary)]" />
          <span className="text-sm font-semibold tracking-wide text-foreground">vincent.</span>
        </button>
        <ul className="hidden md:flex items-center gap-1">
          {items.map((it) => (
            <li key={it.id}>
              <button
                onClick={() => scrollTo(it.id)}
                className={`relative px-4 py-2 text-sm rounded-full transition-colors ${
                  active === it.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === it.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-border bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{it.label}</span>
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:inline-flex items-center rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-[0_0_24px_color-mix(in_oklab,var(--primary)_25%,transparent)] transition-all hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Get in touch
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden rounded-lg p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
        </div>
      </GlassSurface>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 rounded-2xl border border-border bg-popover/95 p-2 shadow-2xl backdrop-blur-xl"
        >
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => scrollTo(it.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm ${
                active === it.id ? "bg-accent text-foreground" : "text-muted-foreground"
              }`}
            >
              {it.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-1 block w-full rounded-xl bg-primary px-4 py-3 text-left text-sm font-semibold text-primary-foreground"
          >
            Get In Touch
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}