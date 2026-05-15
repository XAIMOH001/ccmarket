import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Palette, GraduationCap } from "lucide-react";
import { CAMPUS_THEMES, applyTheme, getStoredThemeId } from "@/lib/themes";
import { toast } from "sonner";

const Settings = () => {
  const [activeTheme, setActiveTheme] = useState<string>("default");

  useEffect(() => {
    setActiveTheme(getStoredThemeId());
  }, []);

  const handleSelect = (id: string) => {
    applyTheme(id);
    setActiveTheme(id);
    const t = CAMPUS_THEMES.find((x) => x.id === id);
    toast.success(`Applied ${t?.name} theme`, {
      description: t?.university,
    });
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8 max-w-2xl">
        <h1
          className="text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Settings
        </h1>
        <p className="mt-2 text-muted-foreground">
          Personalize Campus Connect to feel right at home on your campus.
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Palette className="h-5 w-5" />
            </div>
            <div>
              <CardTitle>App Color Theme</CardTitle>
              <CardDescription>
                Pick a Kenyan campus palette — the whole app updates instantly.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAMPUS_THEMES.map((theme) => {
              const active = theme.id === activeTheme;
              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => handleSelect(theme.id)}
                  className={`group relative rounded-xl border p-4 text-left transition-all hover:shadow-md ${
                    active
                      ? "border-primary ring-2 ring-primary/40 bg-primary/5"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  {active && (
                    <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                  )}

                  <div className="mb-3 flex gap-1.5">
                    {theme.swatches.map((color, i) => (
                      <span
                        key={i}
                        className="h-8 flex-1 rounded-md border border-black/5"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  <div className="flex items-start gap-2">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <div>
                      <h3 className="text-sm font-semibold leading-tight">{theme.name}</h3>
                      <p className="text-xs text-muted-foreground">{theme.university}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">{theme.description}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex items-center justify-between rounded-lg bg-muted/50 p-4">
            <div className="text-sm text-muted-foreground">
              Your theme is saved to this device and applied automatically next visit.
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSelect("default")}
              disabled={activeTheme === "default"}
            >
              Reset to default
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
