import { Github, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useEffect, useState } from "react";
import logoBlack from "../assets/images/mariopxz-logo-black.webp"
import logoWhite from "../assets/images/mariopxz-logo-white.webp"
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Navbar = () => {
  const { t } = useTranslation();

  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  const { isDark, toggleDark } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative sticky top-0 z-50">
      <header
        className={`flex h-12 items-center justify-end gap-4 p-2 transition-colors duration-300 ${
          scrolled
          ? "bg-background/80 backdrop-blur border-b border-border"
          : ""
        }`}
      >
        <img src={isDark ? logoWhite : logoBlack} alt="Mario Pérez Logo" className={`${scrolled ? "flex" : "hidden"} w-16 h-16 absolute left-0`} />
        <nav className="flex items-center gap-3 max-sm:hidden">
          <a
            href="#about"
            className="font-mono text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            {t("about")}
          </a>
          <a
            href="#experience"
            className="font-mono text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            {t("experience")}
          </a>
          <a
            href="#projects"
            className="font-mono text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300"
          >
            {t("projects")}
          </a>
        </nav>

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

          {/* Language Toggle Button */}
          <button
            onClick={() => {
              setLanguageMenuOpen(!languageMenuOpen)
              setMobileOpen(false)
            }}
            data-slot="button"
            className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-[color,background-color] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8 hover:cursor-pointer"
          >
            <Languages />
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => {
              setMobileOpen(!mobileOpen)
              setLanguageMenuOpen(false)
            }}
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
      </header>
      <nav
        className={`absolute top-full right-2 mt-2 flex flex-col items-start gap-2 border border-input bg-background p-4 shadow-md z-50 rounded-lg transition-all duration-300 ease-out ${
          languageMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <button
          onClick={() => {
            i18n.changeLanguage('es')
            setLanguageMenuOpen(false)
          }}
          className="font-mono text-sm font-medium text-muted-foreground hover:cursor-pointer hover:text-foreground transition-all duration-300"
        >
          {t("spanish")}
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage('en')
            setLanguageMenuOpen(false)
          }}
          className="font-mono text-sm font-medium text-muted-foreground hover:cursor-pointer hover:text-foreground transition-all duration-300"
        >
          {t("english")}
        </button>
      </nav>
      <nav
        className={`sm:hidden absolute top-full right-2 mt-2 flex flex-col items-start gap-2 border border-input bg-background p-4 shadow-md z-50 rounded-lg transition-all duration-300 ease-out ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <a
          href="#about"
          onClick={() => setMobileOpen(false)}
          className="font-mono text-sm font-medium text-muted-foreground"
        >
          {t("about")}
        </a>
        <a
          href="#experience"
          onClick={() => setMobileOpen(false)}
          className="font-mono text-sm font-medium text-muted-foreground"
        >
          {t("experience")}
        </a>
        <a
          href="#projects"
          onClick={() => setMobileOpen(false)}
          className="font-mono text-sm font-medium text-muted-foreground"
        >
          {t("projects")}
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
