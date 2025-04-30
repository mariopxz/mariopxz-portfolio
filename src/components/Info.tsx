import { Code, Lightbulb, Link, Mail, MapPin } from "lucide-react";

const Info = () => {
  return (
    <div className="flex flex-col p-4 gap-2">
      <div className="flex items-center gap-4 font-mono text-sm">
        <span className="text-muted-foreground flex size-6 p-1 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900">
          <Code />
        </span>
        <p className="text-balance">Fullstack Developer & UI Designer</p>
      </div>
      <div className="flex items-center gap-4 font-mono text-sm">
        <span className="text-muted-foreground flex size-6 p-1 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900">
          <Lightbulb />
        </span>
        <p className="text-balance">Founder @Trekki</p>
      </div>
      <div className="flex items-center gap-4 font-mono text-sm">
        <span className="text-muted-foreground flex size-6 p-1 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900">
          <MapPin />
        </span>
        <p className="text-balance">Terrassa, Barcelona</p>
      </div>
      <div className="flex items-center gap-4 font-mono text-sm">
        <span className="text-muted-foreground flex size-6 p-1 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900">
          <Mail />
        </span>
        <a className="text-balance" href="mailto:emariors@gmail.com">emariors@gmail.com</a>
      </div>
      <div className="flex items-center gap-4 font-mono text-sm">
        <span className="text-muted-foreground flex size-6 p-1 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900">
          <Link />
        </span>
        <a className="text-balance" href="https://www.mariopxz.com" target="_blank">mariopxz.com</a>
      </div>
    </div>
  );
};

export default Info;
