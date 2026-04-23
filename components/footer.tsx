"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

const marqueeText = "FRONTEND DEVELOPER * REACT * TYPESCRIPT * NEXTJS * TAILWINDCSS * "

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-border">
      {/* Marquee */}
      <div className="overflow-hidden py-6 bg-muted/30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-6xl sm:text-8xl font-bold text-muted/30 mx-4"
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">
              M<span className="text-primary">.</span>
            </span>
            <span className="text-sm text-muted-foreground">
              {currentYear} Mario Lopez. Todos los derechos reservados.
            </span>
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all text-sm font-medium"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="h-4 w-4" />
            Volver arriba
          </motion.button>
        </div>
      </div>

      {/* Credit line */}
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <p className="text-center text-xs text-muted-foreground">
            Disenado y desarrollado con{" "}
            <span className="text-primary">pasion</span> por Mario Lopez
          </p>
        </div>
      </div>
    </footer>
  )
}
