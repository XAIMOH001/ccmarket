import { Sparkles } from "lucide-react";

interface Props {
  active: boolean;
  done: boolean;
}

const ScanOverlay = ({ active, done }: Props) => {
  if (!active && !done) return null;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
      {active && (
        <>
          <div className="absolute inset-0 bg-primary/5" />
          <div className="scanline absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_hsl(var(--primary))]" />
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3 w-3 animate-pulse text-primary" />
            Scanning...
          </div>
          {/* Corner brackets */}
          {["top-2 left-2 border-t-2 border-l-2", "top-2 right-2 border-t-2 border-r-2", "bottom-2 left-2 border-b-2 border-l-2", "bottom-2 right-2 border-b-2 border-r-2"].map((c) => (
            <div key={c} className={`absolute h-5 w-5 border-primary ${c}`} />
          ))}
        </>
      )}
      {done && !active && (
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
          <Sparkles className="h-3 w-3" />
          AI Scan Complete
        </div>
      )}
    </div>
  );
};

export default ScanOverlay;
