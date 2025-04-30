import { ExternalLink } from "lucide-react";
import LinkedInLogo from "../assets/images/linkedin.webp";
import GithubLogo from "../assets/images/github.webp";
import XLogo from "../assets/images/x.webp";
import YouTubeLogo from "../assets/images/youtube.webp";

const socialLinks = [
  {
    name: "LinkedIn",
    username: "mariopxz",
    href: "https://linkedin.com/in/mariopxz",
    img: LinkedInLogo,
  },
  {
    name: "GitHub",
    username: "mariopxz",
    href: "https://github.com/mariopxz",
    img: GithubLogo,
  },
  {
    name: "X",
    username: "@maariopxz",
    href: "https://x.com/mariopxz",
    img: XLogo,
  },
  {
    name: "YouTube",
    username: "@mariopxz",
    href: "https://www.youtube.com/@mariopxz",
    img: YouTubeLogo,
  },
];

const Social = () => {
  return (
    <div className="relative">
      {/* Background Grid Lines */}
      <div className="pointer-events-none absolute inset-0 -z-10 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
        <div className="border-r border-grid"></div>
        <div className="border-l border-grid"></div>
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {socialLinks.map(({ name, username, href, img }, index) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex cursor-pointer items-center gap-4 p-4 transition-colors select-none ${
              index === 0 || index === 1 ? "screen-line-after" : ""
            } ${index === 2 || index === 3 ? "screen-line-before" : ""}`}
          >
            <div className="relative size-12 shrink-0">
              <img
                src={img}
                alt={`${name} icon`}
                className="rounded-xl object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/8 ring-inset dark:ring-white/8"></div>
            </div>
            <div className="flex flex-1 flex-col">
              <p className="flex items-center font-heading font-medium decoration-ring underline-offset-4 group-hover:underline">
                {name}
              </p>
              <p className="font-mono text-sm text-muted-foreground">
                {username}
              </p>
            </div>
            <ExternalLink className="size-4 text-muted-foreground" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
