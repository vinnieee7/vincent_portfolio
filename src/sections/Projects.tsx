import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-16 flex items-end justify-between gap-6 flex-wrap">
        <div>
          <p className="section-kicker">02 — Work</p>
          <h2 className="section-title">Selected Projects</h2>
        </div>
        <p className="text-muted-foreground max-w-sm">
          A collection of cybersecurity and software engineering projects exploring secure systems and networks.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.github}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -4, scale: 1.015 }}
            className="surface-card group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_24px_70px_-30px_color-mix(in_oklab,var(--primary)_30%,transparent)]"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_60%)]" />
            <div className="relative flex items-start justify-between mb-8">
              <span className="font-mono text-xs text-muted-foreground tracking-widest">{p.year}</span>
              <span className="h-10 w-10 rounded-full border border-border bg-secondary flex items-center justify-center text-muted-foreground group-hover:border-primary/50 group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45 transition-all">
                <ArrowUpRight size={16} />
              </span>
            </div>
            <h3 className="relative text-xl md:text-2xl font-semibold text-foreground mb-4 leading-snug">
              {p.title}
            </h3>
            <p className="relative text-muted-foreground leading-relaxed mb-6">{p.description}</p>
            <div className="relative flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1 rounded-full bg-secondary border border-border text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}