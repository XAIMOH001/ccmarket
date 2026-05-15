import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, IdCard, GraduationCap, Camera, ShieldCheck } from "lucide-react";

const STEPS = [
  { icon: IdCard, label: "National ID", desc: "Upload front & back" },
  { icon: GraduationCap, label: "Student / Alumni Credential", desc: "University ID or transcript" },
  { icon: Camera, label: "Selfie Verification", desc: "Live photo to match ID" },
  { icon: ShieldCheck, label: "Background Check", desc: "Auto-reviewed in 24h" },
];

const VerificationStepper = () => {
  const [step, setStep] = useState(0);

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="font-display text-lg font-semibold">Hunter Verification</h3>
          <p className="text-xs text-muted-foreground">Complete all steps to start earning bounties</p>
        </div>
        <span className="font-display text-2xl font-bold text-primary">
          {step}/{STEPS.length}
        </span>
      </div>

      <div className="relative space-y-4">
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
        {STEPS.map((s, i) => {
          const done = i < step;
          const active = i === step;
          const Icon = s.icon;
          return (
            <div key={s.label} className="relative flex items-start gap-4">
              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                  done
                    ? "border-primary bg-primary text-primary-foreground"
                    : active
                    ? "border-primary bg-background text-primary"
                    : "border-border bg-background text-muted-foreground"
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
              </div>
              <div className="flex-1 pt-1.5">
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-medium ${active || done ? "" : "text-muted-foreground"}`}>{s.label}</p>
                  {active && (
                    <Button size="sm" onClick={() => setStep(step + 1)}>
                      Upload
                    </Button>
                  )}
                  {done && <span className="text-[10px] font-semibold uppercase text-primary">Verified</span>}
                </div>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
      {step === STEPS.length && (
        <div className="mt-6 rounded-lg border border-primary/30 bg-primary/5 p-4 text-center">
          <ShieldCheck className="mx-auto mb-2 h-6 w-6 text-primary" />
          <p className="font-display text-sm font-semibold">You're a Verified Hunter!</p>
          <p className="text-xs text-muted-foreground">You can now accept missions.</p>
        </div>
      )}
    </Card>
  );
};

export default VerificationStepper;
