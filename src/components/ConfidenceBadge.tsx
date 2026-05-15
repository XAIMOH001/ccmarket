import { Sparkles } from "lucide-react";

const ConfidenceBadge = ({ score }: { score: number }) => (
  <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
    <Sparkles className="h-2.5 w-2.5" />
    AI · {score}%
  </span>
);

export default ConfidenceBadge;
