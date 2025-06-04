import React, { useState } from "react";
import { Code, GraduationCap, ChevronDown } from "lucide-react";
import { jobInfo } from "../lib/jobInfo";
import { educationInfo } from "../lib/educationInfo";

const Experience = () => {
  const [jobOpenStates, setJobOpenStates] = useState(jobInfo.map(() => false));
  const [educationOpenStates, setEducationOpenStates] = useState(
    educationInfo.map(() => false)
  );

  return (
    <section id="experience" className="flex flex-col px-4">
      <div className="screen-line-after">
        <h2 className="text-3xl font-medium flex items-center">Experiencia</h2>
      </div>

      {jobInfo.map((job, index) => {
        const isOpen = jobOpenStates[index];
        const toggleOpen = () => {
          const updated = [...jobOpenStates];
          updated[index] = !updated[index];
          setJobOpenStates(updated);
        };

        return (
          <div
            key={index}
            className="flex flex-col py-4 font-mono gap-4 text-balance text-foreground text-sm leading-6 relative screen-line-after"
          >
            <div className="flex items-center gap-4">
              <img src={job.logo} alt={job.company} className="w-6 h-6" />
              <h3 className="text-lg font-semibold">{job.company}</h3>
            </div>
            <button onClick={toggleOpen} className="flex items-start gap-4 appearance-none bg-transparent border-0 p-0 m-0 text-left w-full">
              <span className="text-muted-foreground flex size-6 p-1 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900">
                {job.icon === "Code" ? <Code /> : <GraduationCap />}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-md font-medium hover:cursor-pointer hover:underline decoration-blue-500 underline-offset-4">{job.title}</h4>
                  {job.actuallyWorking && (
                    <span className="ml-2 mt-1 size-2 rounded-full bg-green-500 relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-green-500 before:opacity-75 before:animate-ping"></span>
                  )}
                  <button
                    className="text-sm hover:underline absolute right-0"
                  >
                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  {job.modality} | {job.startDate} - {job.endDate}
                </p>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {job.description.length === 1 ? (
                    <p className="mt-2">{job.description[0]}</p>
                  ) : (
                    <ul className="list-disc pl-5 mt-2 marker:text-muted-foreground">
                      {job.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.technologies.map((tech, techIndex) => (
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
            </button>
          </div>
        );
      })}

      {/* Studies */}
      <div className="flex items-center gap-3 mt-4">
        <span className="flex size-6 shrink-0 items-center justify-center">
          <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
        </span>
        <h3 className="font-heading text-xl leading-snug font-medium">
          Educación
        </h3>
      </div>
      {educationInfo.map((education, index) => {
        const isOpen = educationOpenStates[index];
        const toggleOpen = () => {
          const updated = [...educationOpenStates];
          updated[index] = !updated[index];
          setEducationOpenStates(updated);
        };

        return (
          <React.Fragment key={index}>
            <div className="flex flex-col py-4 font-mono gap-4 text-balance text-foreground text-sm leading-6 relative">
              <button onClick={toggleOpen} className="flex items-start gap-4 appearance-none bg-transparent border-0 p-0 m-0 text-left w-full hover:cursor-pointer">
                <div className="relative flex flex-col items-center">
                  <span className="text-muted-foreground flex size-6 p-1 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900">
                    <GraduationCap />
                  </span>
                  {index < educationInfo.length - 1 && (
                    <div
                      className={`absolute top-full ${
                        isOpen ? "h-[calc(100%+9rem)]" : "h-[calc(100%+2rem)]"
                      } w-px bg-muted`}
                    />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-md font-medium hover:cursor-pointer hover:underline decoration-blue-500 underline-offset-4">{education.title}</h4>
                    {education.actuallyStudying && (
                      <span className="ml-2 mt-1 size-2 rounded-full bg-green-500 relative before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-green-500 before:opacity-75 before:animate-ping"></span>
                    )}
                    <button
                      className="text-sm hover:underline absolute right-0"
                    >
                      <ChevronDown
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    {education.center} | {education.startDate} -{" "}
                    {education.endDate}
                  </p>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="list-disc pl-5 mt-2 marker:text-muted-foreground">
                      {education.description.map((desc, descIndex) => (
                        <li key={descIndex}>{desc}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {education.technologies.map((tech, techIndex) => (
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
              </button>
            </div>
          </React.Fragment>
        );
      })}
    </section>
  );
};

export default Experience;
