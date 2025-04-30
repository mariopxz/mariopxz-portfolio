import * as Tooltip from "@radix-ui/react-tooltip";

import TypeScript from "../assets/images/tech-stack-icons/typescript.svg";
import JavaScript from "../assets/images/tech-stack-icons/js.svg";
import PHP from "../assets/images/tech-stack-icons/php.svg";
import Nodejs from "../assets/images/tech-stack-icons/nodejs.svg";
import ReactLogo from "../assets/images/tech-stack-icons/react.svg";
import Motion from "../assets/images/tech-stack-icons/motion.svg";
import Redux from "../assets/images/tech-stack-icons/redux.svg";
import ReactRouter from "../assets/images/tech-stack-icons/react-router.svg";
import ReactNavigation from "../assets/images/tech-stack-icons/react-navigation.svg";
import Laravel from "../assets/images/tech-stack-icons/laravel.svg";
import Git from "../assets/images/tech-stack-icons/git.svg";
import Docker from "../assets/images/tech-stack-icons/docker.svg";
import MySQL from "../assets/images/tech-stack-icons/mysql.svg";
import MongoDB from "../assets/images/tech-stack-icons/mongodb.svg";
import Figma from "../assets/images/tech-stack-icons/figma.svg";
import Photoshop from "../assets/images/tech-stack-icons/ps.svg";
import NextLight from "../assets/images/tech-stack-icons/nextjs2-light.svg";
import NextDark from "../assets/images/tech-stack-icons/nextjs2-dark.svg";
import ShadcnLight from "../assets/images/tech-stack-icons/shadcn-ui-light.svg";
import ShadcnDark from "../assets/images/tech-stack-icons/shadcn-ui-dark.svg";
import RadixLight from "../assets/images/tech-stack-icons/radixui-light.svg";
import RadixDark from "../assets/images/tech-stack-icons/radixui-dark.svg";
import ChatGPTLight from "../assets/images/tech-stack-icons/chatgpt-light.svg";
import ChatGPTDark from "../assets/images/tech-stack-icons/chatgpt-dark.svg";

const techStack = [
  {
    label: "TypeScript",
    src: TypeScript,
    href: "https://www.typescriptlang.org/",
  },
  {
    label: "JavaScript",
    src: JavaScript,
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  { label: "PHP", src: PHP, href: "https://www.php.net/" },
  { label: "Node.js", src: Nodejs, href: "https://nodejs.org/" },
  { label: "React", src: ReactLogo, href: "https://react.dev/" },
  {
    label: "Next.js",
    srcLight: NextLight,
    srcDark: NextDark,
    href: "https://nextjs.org/",
  },
  { label: "Motion", src: Motion, href: "https://motion.dev/" },
  { label: "Redux", src: Redux, href: "https://redux.js.org/" },
  { label: "React Router", src: ReactRouter, href: "https://reactrouter.com/" },
  {
    label: "React Navigation",
    src: ReactNavigation,
    href: "https://reactnavigation.org/",
  },
  { label: "Laravel", src: Laravel, href: "https://laravel.com/" },
  { label: "Git", src: Git, href: "https://git-scm.com/" },
  { label: "Docker", src: Docker, href: "https://www.docker.com/" },
  { label: "MySQL", src: MySQL, href: "https://www.mysql.com/" },
  { label: "MongoDB", src: MongoDB, href: "https://www.mongodb.com/" },
  { label: "Figma", src: Figma, href: "https://www.figma.com/" },
  {
    label: "Photoshop",
    src: Photoshop,
    href: "https://www.adobe.com/vn_en/products/photoshop.html",
  },
  {
    label: "shadcn/ui",
    srcLight: ShadcnLight,
    srcDark: ShadcnDark,
    href: "https://ui.shadcn.com/",
  },
  {
    label: "Radix UI",
    srcLight: RadixLight,
    srcDark: RadixDark,
    href: "https://www.radix-ui.com/",
  },
  {
    label: "ChatGPT",
    srcLight: ChatGPTLight,
    srcDark: ChatGPTDark,
    href: "https://chatgpt.com/",
  },
];

const Stack = () => {
  return (
    <section className="flex flex-col">
      <div className="screen-line-after">
        <h2 className="text-3xl font-medium flex items-center px-4">Stack</h2>
      </div>
      <div className="flex flex-wrap gap-4 px-4 py-8 bg-white/75 dark:bg-zinc-950/75 bg-[radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:[--pattern-foreground:var(--color-white)]/5 screen-line-after">
        {techStack.map(({ href, label, src, srcLight, srcDark }) => (
          <Tooltip.Provider key={label} delayDuration={0}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {src ? (
                    <img src={src} alt={label} width={32} height={32} />
                  ) : (
                    <>
                      <img
                        src={srcLight}
                        alt={`${label} light`}
                        className="block dark:hidden"
                        width={32}
                        height={32}
                      />
                      <img
                        src={srcDark}
                        alt={`${label} dark`}
                        className="hidden dark:block"
                        width={32}
                        height={32}
                      />
                    </>
                  )}
                </a>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  align="center"
                  sideOffset={6}
                  className="tooltip-content z-50 select-none rounded bg-primary px-2 py-1 text-sm text-primary-foreground shadow-md font-mono"
                >
                  {label}
                  <Tooltip.Arrow className="fill-muted" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        ))}
      </div>
    </section>
  );
};

export default Stack;
