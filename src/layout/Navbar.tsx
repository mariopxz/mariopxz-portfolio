import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import logoBlack from "../assets/images/mariopxz-logo-black.webp"
import logoWhite from "../assets/images/mariopxz-logo-white.webp"

const Navbar = () => {
  const { isDark, toggleDark } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative sticky top-0 z-50">
      <header
        className={`flex h-12 items-center gap-4 p-2 transition-colors duration-300 ${
          scrolled
          ? "bg-background/80 backdrop-blur border-b border-border justify-between"
          : "justify-end"
        }`}
      >
        <img src={isDark ? logoWhite : logoBlack} alt="Mario Pérez Logo" className={`${scrolled ? "flex" : "hidden"} w-16 h-16`} />
        <nav className="flex items-center gap-3 max-sm:hidden">
          <a
            href="#about"
            className="font-mono text-sm font-medium text-muted-foreground transition-all duration-300"
          >
            About
          </a>
          <a
            href="#experience"
            className="font-mono text-sm font-medium text-muted-foreground transition-all duration-300"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="font-mono text-sm font-medium text-muted-foreground transition-all duration-300"
          >
            Projects
          </a>
          <div className="flex items-center gap-2">
          {/* GitHub Button */}
          <a
            href="https://github.com/mariopxz"
            target="_blank"
            rel="noopener noreferrer"
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-[color,background-color] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
          >
            <Github className="size-4 text-sm" />
          </a>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => toggleDark()}
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-[color,background-color] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8 hover:cursor-pointer"
          >
            {isDark ? (
              <Sun className="size-4 text-sm" />
            ) : (
              <Moon className="size-4 text-sm" />
            )}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden relative flex flex-col items-center justify-center rounded-full size-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground group"
          >
            <span
              className={`absolute h-0.5 w-4 rounded bg-foreground transition-all duration-300 ${
                mobileOpen ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute h-0.5 w-4 rounded bg-foreground transition-all duration-300 ${
                mobileOpen ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
        </nav>

        
      </header>
      <nav
        className={`sm:hidden absolute top-full right-2 mt-2 flex flex-col items-start gap-2 border border-input bg-background p-4 shadow-md z-50 rounded-lg transition-all duration-300 ease-out ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <a
          href="#about"
          className="font-mono text-sm font-medium text-muted-foreground"
        >
          About
        </a>
        <a
          href="#experience"
          className="font-mono text-sm font-medium text-muted-foreground"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="font-mono text-sm font-medium text-muted-foreground"
        >
          Projects
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
