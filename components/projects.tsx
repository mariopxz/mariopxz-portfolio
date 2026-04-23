"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: "01",
    title: "Passy",
    description:
      "Generador de contrasenas seguras con una interfaz limpia y moderna. Permite personalizar la longitud y complejidad de las contrasenas generadas.",
    tags: ["React", "TailwindCSS", "TypeScript"],
    github: "https://github.com/mariopxz/passy",
    demo: "https://passy-one.vercel.app/",
    featured: true,
  },
  {
    id: "02",
    title: "Proximamente",
    description: "Nuevo proyecto en desarrollo. Mantente atento para mas actualizaciones.",
    tags: [],
    github: null,
    demo: null,
    featured: false,
  },
  {
    id: "03",
    title: "Proximamente",
    description: "Mas proyectos creativos en camino. La innovacion nunca para.",
    tags: [],
    github: null,
    demo: null,
    featured: false,
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="proyectos" className="py-32 bg-muted/30 relative" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)] bg-[size:40px_40px]" />
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
            02 / Proyectos
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-balance">
            Trabajo{" "}
            <span className="text-muted-foreground">seleccionado</span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
            >
              <div
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  project.featured
                    ? "bg-card border border-border hover:border-primary/50"
                    : "bg-card/50 border border-border/50"
                }`}
              >
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Project number */}
                    <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-muted/50 lg:w-32 shrink-0">
                      {project.id}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <h3
                          className={`text-2xl sm:text-3xl font-bold ${
                            !project.featured && "text-muted-foreground"
                          }`}
                        >
                          {project.title}
                        </h3>

                        {/* Actions */}
                        {project.featured && (
                          <div className="flex gap-2">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all text-sm font-medium"
                              >
                                <Github className="h-4 w-4" />
                                Codigo
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-sm font-medium"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Demo
                              </a>
                            )}
                          </div>
                        )}
                      </div>

                      <p
                        className={`text-lg mb-4 text-pretty ${
                          project.featured
                            ? "text-muted-foreground"
                            : "text-muted-foreground/60"
                        }`}
                      >
                        {project.description}
                      </p>

                      {/* Tags */}
                      {project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-sm font-mono rounded-full bg-primary/10 text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>                    
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/mariopxz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Ver todos los proyectos en GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
