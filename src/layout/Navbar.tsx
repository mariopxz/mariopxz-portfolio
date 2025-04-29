import { Github, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";


const Navbar = () => {
  const { isDark, toggleDark } = useTheme();


  return (
      <header className="flex h-12 items-center justify-end gap-4 p-2 border-y-1 border-accent">
        <nav className="flex items-center gap-3 max-sm:hidden">
          <a
            href="#about"
            className="font-mono text-sm font-medium text-muted-foreground transition-all duration-300"
          >
            About
          </a>
          <a
            className="font-mono text-sm font-medium text-muted-foreground transition-all duration-300"
            href="/blog"
          >
            Blog
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
          <a
            href="#awards"
            className="font-mono text-sm font-medium text-muted-foreground transition-all duration-300"
          >
            Awards
          </a>
          <a
            href="#certs"
            className="font-mono text-sm font-medium text-muted-foreground transition-all duration-300"
          >
            Certs
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
            className="inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-[color,background-color] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground size-8"
          >
            {isDark ? (
              <Sun className="size-4 text-sm" />
            ) : (
              <Moon className="size-4 text-sm" />
            )}
          </button>

          {/* Mobile Menu Icon */}
          <button className="sm:hidden flex flex-col items-center justify-center rounded-full size-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground group">
            <span className="h-0.5 w-4 rounded bg-foreground transition-transform group-data-[state=open]:translate-y-[3px] group-data-[state=open]:rotate-45" />
            <span className="h-0.5 w-4 rounded bg-foreground transition-transform group-data-[state=open]:-translate-y-[3px] group-data-[state=open]:-rotate-45" />
          </button>
        </div>
      </header>
  );
};

export default Navbar;
