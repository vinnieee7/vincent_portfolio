import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <p className="section-kicker">03 — Toolkit</p>
        <h2 className="section-title">Skills & Stack</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="surface-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
              <h3 className="text-foreground font-semibold tracking-wide">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <motion.span
                  whileHover={{ y: -2, scale: 1.04 }}
                  key={s}
                  className="font-mono cursor-default rounded-full border border-border bg-secondary px-3.5 py-1.5 text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}