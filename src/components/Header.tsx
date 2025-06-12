import { useState, useEffect } from "react";
import { Repeat } from "lucide-react";
import MarioLogoLight from "../assets/images/mariopxz-logo-black.webp";
import MarioLogoDark from "../assets/images/mariopxz-logo-white.webp";
import MarioAvatar from "../assets/images/mariopxz-avatar.webp";
import { useTheme } from "../context/ThemeContext";

const titles = [
  "Software Developer",
  "UI/UX Designer",
  "Young Empreneaur",
  "Creating with code, driven by passion.",
];

const Header = () => {
  const [animateKey, setAnimateKey] = useState(0);
  const { isDark } = useTheme();
  const extendedTitles = [...titles, titles[0]]; // para cerrar el bucle visual
  const [index, setIndex] = useState(0);
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === titles.length) {
      // Cuando llegamos al duplicado, reseteamos sin transición
      setTimeout(() => {
        setResetting(true);
        setIndex(0);
        setTimeout(() => setResetting(false), 50); // dejamos que se aplique el estilo sin transición
      }, 500);
    }
  }, [index]);

  const handleRestartAnimation = () => {
    // Incrementa el key para reiniciar el componente
    setAnimateKey((prev) => prev + 1);
  };
  return (
    <div>
      {/* MIDDLE PATTERN BLOCK */}
      <div className="aspect-[2/1] border-x border-grid select-none md:aspect-[3/1] screen-line-after before:-top-px after:-bottom-px bg-zinc-950/0.75 bg-[image:radial-gradient(var(--pattern-foreground)_1px,_transparent_0)] bg-[size:10px_10px] bg-center [--pattern-foreground:var(--color-zinc-950)]/5 dark:bg-white/0.75 dark:[--pattern-foreground:var(--color-white)]/5">
        <div className="flex size-full justify-center items-center text-white dark:text-black">
          {/* Logo visible en modo claro */}
          <img
            key={animateKey}
            src={isDark ? MarioLogoDark : MarioLogoLight}
            alt="Mario Logo"
            className="size-60 animate-fade-in-up"
          />
        </div>

        {/* Bottom Right Action */}
        <div className="absolute inset-0 flex items-end justify-end p-2">
          <button
            className="inline-flex items-center justify-center rounded-full size-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            title="Restart animation"
            onClick={handleRestartAnimation}
          >
            <Repeat className="size-4" />
          </button>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="flex border-x border-grid">
        {/* Avatar */}
        <div className="relative shrink-0 border-r border-grid p-1">
          <img
            src={MarioAvatar}
            alt="mariopxz avatar"
            className="w-32 sm:w-40 h-32 sm:h-40 object-cover object-right rounded-full ring-1 ring-border ring-offset-2 ring-offset-background"
          />
        </div>

        {/* Name + Subtitle */}
        <div className="flex flex-col flex-1">
          <div className="flex grow items-end pb-1 pl-4">
            <div className="font-mono text-xs text-zinc-300 dark:text-zinc-800 select-none">
              text-3xl <span className="inline dark:hidden">text-zinc-950</span>
              <span className="hidden dark:inline">text-zinc-50</span>{" "}
              font-medium
            </div>
          </div>
          <div className="border-t border-grid">
            <h1 className="flex items-center pl-4 font-heading text-3xl font-medium">
              Mario López
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-[0.6em] translate-y-px text-info ml-2"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.3393 0.582135C12.6142 -0.194045 11.3836 -0.194045 10.6584 0.582135L8.88012 2.48429C8.51756 2.8711 8.00564 3.0843 7.47584 3.06515L4.87538 2.97706C3.81324 2.94132 2.94259 3.81197 2.97834 4.87411L3.06642 7.47712C3.0843 8.00691 2.87238 8.51884 2.48429 8.88139L0.582135 10.6584C-0.194045 11.3836 -0.194045 12.6155 0.582135 13.3406L2.48429 15.1189C2.87238 15.4815 3.0843 15.9921 3.06642 16.5232L2.97706 19.1249C2.94259 20.1871 3.81324 21.0577 4.87538 21.022L7.47712 20.9339C8.00691 20.916 8.51884 21.1279 8.88139 21.5148L10.6584 23.4169C11.3848 24.1944 12.6155 24.1944 13.3419 23.4169L15.1202 21.5148C15.4815 21.1279 15.9934 20.9147 16.5232 20.9339L19.1249 21.022C20.1871 21.0577 21.059 20.1871 21.022 19.1249L20.9352 16.5219C20.916 15.9921 21.1292 15.4815 21.516 15.1189L23.4182 13.3406C24.1944 12.6155 24.1944 11.3836 23.4182 10.6584L21.516 8.88012C21.1292 8.51884 20.916 8.00691 20.9352 7.47584L21.022 4.87411C21.059 3.81197 20.1871 2.94132 19.1249 2.97706L16.5232 3.06642C15.9934 3.08302 15.4815 2.8711 15.1189 2.48429L13.3393 0.582135ZM5.91327 12.5402L10.2908 16.9164L17.5458 8.99374L15.8262 7.4018L10.2091 13.5232L7.56393 10.878L5.91327 12.5402Z"
                />
              </svg>
            </h1>
            <div className="relative h-6 overflow-hidden pl-4 border-t-1">
              <div
                className={`transition-transform duration-500 ease-in-out ${
                  resetting ? "transition-none" : ""
                }`}
                style={{
                  transform: `translateY(-${index * 1.5}rem)`,
                }}
              >
                {extendedTitles.map((title, i) => (
                  <p
                    key={i}
                    className="h-6 font-mono text-sm text-muted-foreground select-none"
                  >
                    {title}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
