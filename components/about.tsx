"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "React", level: 80 },
  { name: "JavaScript", level: 85 },
  { name: "TailwindCSS", level: 95 },
  { name: "PHP", level: 85 },
  { name: "Node.js", level: 60 },
  { name: "Git", level: 85 },
];

const stats = [
  { value: "2+", label: "Años de experiencia" },
  { value: "3+", label: "Proyectos completados" },
  { value: "100%", label: "Dedicación" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">
            01 / Sobre mí
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-balance">
            Construyendo el futuro,{" "}
            <span className="text-muted-foreground">
              una línea de código a la vez
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Bio Card - Large */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors group"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl shrink-0">
                M
              </div>
              <div>
                <h3 className="text-2xl font-bold">Mario López</h3>
                <p className="text-muted-foreground">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg text-pretty">
              Soy un desarrollador full stack apasionado por crear experiencias
              web excepcionales. Con más de dos años de experiencia, me
              especializo en React, JavaScript y tecnologías modernas.
              Actualmente aprendiendo Node.js para seguir formando mi carrera.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mt-4 text-pretty">
              Mi enfoque combina código limpio con diseño intuitivo para crear
              productos que los usuarios realmente disfrutan usar.
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-primary text-primary-foreground"
          >
            <div className="h-full flex flex-col justify-between gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl sm:text-5xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 p-8 rounded-3xl bg-card border border-border"
          >
            <h3 className="text-lg font-semibold mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-3xl bg-muted/50 border border-border flex items-center"
          >
            <blockquote className="text-lg italic text-muted-foreground text-pretty">
              &ldquo;El buen código es su propia mejor documentación.&rdquo;
              <footer className="text-sm font-medium text-foreground mt-4 not-italic">
                - Steve McConnell
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
