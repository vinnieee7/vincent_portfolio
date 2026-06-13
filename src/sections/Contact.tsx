import { motion } from "framer-motion";
import { Github, Mail, ArrowUpRight } from "lucide-react";
import { contact } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="surface-card rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]" />
        <p className="section-kicker relative mb-6">04 — Contact</p>
        <h2 className="relative font-display text-6xl md:text-8xl text-foreground leading-none tracking-[-0.03em]">
          Let's Connect
        </h2>
        <p className="relative mt-8 text-muted-foreground text-lg max-w-xl mx-auto">
          I'm always interested in cybersecurity, software development, and exciting opportunities.
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-3 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[0_0_28px_color-mix(in_oklab,var(--primary)_20%,transparent)] transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Mail size={18} /> {contact.email}
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl border border-border bg-secondary px-6 py-3 text-foreground transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Github size={18} /> @vinnieee7
            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </motion.div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm font-mono">
        <p>© {new Date().getFullYear()} A S Vincent. All rights reserved.</p>
        <p>Designed & built with care.</p>
      </div>
    </section>
  );
}