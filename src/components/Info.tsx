import { Code, Lightbulb, Link, Mail, MapPin } from "lucide-react";

const Info = () => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex items-center gap-4 font-mono text-sm">
        <Code className="flex size- shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900"/>
        <p className="text-balance">Fullstack Developer & UI Designer</p>
      </div>
      <div className="flex items-center gap-4 font-mono text-sm">
        <Lightbulb className="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900"/>
        <p className="text-balance">Founder @Trekki</p>
      </div>
      <div className="flex items-center gap-4 font-mono text-sm">
        <MapPin className="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900"/>
        <p className="text-balance">Terrassa, Barcelona</p>
      </div>
      <div className="flex items-center gap-4 font-mono text-sm">
        <Mail className="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900"/>
        <p className="text-balance">emariors@gmail.com</p>
      </div>
      <div className="flex items-center gap-4 font-mono text-sm">
        <Link className="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-zinc-50 shadow-xs dark:bg-zinc-900"/>
        <p className="text-balance">mariopxz.com</p>
      </div>
    </div>
  );
};

export default Info;
