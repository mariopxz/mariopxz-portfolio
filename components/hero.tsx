"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-bg"
    >
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-[15%] w-32 h-32 rounded-full border-2 border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-32 left-[10%] w-24 h-24 rounded-full bg-primary/10"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-[20%] w-2 h-2 rounded-full bg-primary"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[25%] w-3 h-3 rounded-full bg-foreground/20"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-primary/20 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="text-sm font-medium text-accent-foreground">
            Disponible para proyectos
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block text-muted-foreground text-2xl sm:text-3xl lg:text-4xl font-normal mb-4">
            Hola, soy
          </span>
          <span className="relative inline-block">
            Mario
            <motion.span
              className="absolute -right-4 -top-4 text-primary text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              *
            </motion.span>
          </span>{" "}
          <span className="text-primary">Lopez</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 text-balance"
        >
          Frontend Developer{" "}
          <span className="text-foreground font-medium">
            creando experiencias digitales
          </span>
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#proyectos"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-medium overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10">Ver proyectos</span>
            <motion.span
              className="absolute inset-0 bg-primary"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-foreground/20 rounded-full font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Contactar
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
