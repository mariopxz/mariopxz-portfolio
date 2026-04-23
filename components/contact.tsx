"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, Mail, Github, Linkedin, Copy, Check } from "lucide-react"
import { useState } from "react"

const socialLinks = [
  {
    name: "GitHub",
    handle: "@mariopxz",
    href: "https://github.com/mariopxz",
    icon: Github,
  },
  {
    name: "LinkedIn",
    handle: "/in/mariopxz",
    href: "https://www.linkedin.com/in/mariopxz/",
    icon: Linkedin,
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [copied, setCopied] = useState(false)

  const email = "ml.delarosa@outlook.es"

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contacto" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest">
            03 / Contacto
          </span>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            Hagamos algo{" "}
            <span className="relative inline-block">
              increible
              <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.path
                  d="M0 6 Q50 12 100 6 T200 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-primary"
                />
              </motion.svg>
            </span>{" "}
            juntos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Siempre estoy abierto a nuevas oportunidades y colaboraciones 
            interesantes. Si tienes un proyecto en mente, no dudes en contactarme.
          </p>
        </motion.div>

        {/* Email card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-colors">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-mono font-medium">{email}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-foreground transition-colors text-sm font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-primary" />
                      Copiado
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copiar
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
                >
                  Enviar email
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <link.icon className="h-5 w-5" />
              <span className="font-medium">{link.name}</span>
              <span className="text-muted-foreground group-hover:text-background/70 text-sm">
                {link.handle}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
