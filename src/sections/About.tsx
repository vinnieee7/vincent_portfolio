import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4"
        >
          <p className="section-kicker">01 — Profile</p>
          <h2 className="section-title leading-[1.05]">
            About<br/>Me
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-8 space-y-6 text-muted-foreground text-lg leading-relaxed"
        >
          <p>
            I am <span className="text-foreground font-semibold">A S Vincent</span>, a cybersecurity enthusiast and software developer passionate about building secure, scalable, and impactful systems.
          </p>
          <p>
            My interests include cybersecurity, network security, software engineering, Linux, Python, and modern web technologies.
          </p>
          <p>
            I enjoy solving real-world problems through technology, contributing to projects, and continuously expanding my skills.
          </p>
        </motion.div>
      </div>
    </section>
  );
}