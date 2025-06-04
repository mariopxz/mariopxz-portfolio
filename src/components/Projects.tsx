import { useState } from "react";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { projectsInfo } from "../lib/projectsInfo";

const Projects = () => {
  const projectsCount = projectsInfo.length;
  const [projectOpenStates, setProjectOpenStates] = useState(
    projectsInfo.map(() => false)
  );

  return (
    <section id="projects" className="flex flex-col px-4">
      <div className="flex gap-2 screen-line-after">
        <h2 className="text-3xl font-medium flex items-center">Projects</h2>
        <span className="text-muted-foreground text-xl font-medium">
          ({projectsCount})
        </span>
      </div>

      {projectsInfo.map((project, index) => {
        const isOpen = projectOpenStates[index];
        const toggleOpen = () => {
          const updated = [...projectOpenStates];
          updated[index] = !updated[index];
          setProjectOpenStates(updated);
        };

        return (
          <div className="flex py-4 font-mono gap-4 text-balance text-foreground text-sm leading-6">
            <>
              <img src={project.logo.light} alt={project.title} className="w-6 h-6 block dark:hidden" />
              <img src={project.logo.dark} alt={project.title} className="w-6 h-6 hidden dark:block" />
            </>
            <div
              onClick={toggleOpen}
              key={index}
              className="flex flex-col gap-2"
            >
              
              <div className="flex flex-col items-start gap-2 relative">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold hover:cursor-pointer hover:underline decoration-blue-500 underline-offset-4">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    className="hover:cursor-pointer"
                  >
                    { project.link ? (
                      <ExternalLink className="size-4 text-muted-foreground" />
                    ) : (
                      <span className="text-muted-foreground">Soon</span>
                    )}
                  </a>
                </div>

                <p className="text-sm text-muted-foreground">
                  {project.startDate} - {project.endDate}
                </p>
                
                <button className="text-sm hover:underline absolute right-0">
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-lg border bg-zinc-50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground dark:bg-zinc-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Projects;
