import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories, conditions } from "@/lib/mockData";
import { ImagePlus, Loader2, Sparkles, Upload, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScanOverlay from "@/components/ScanOverlay";
import ConfidenceBadge from "@/components/ConfidenceBadge";

const AI_FILL = {
  title: "Sony WH-1000XM4 Wireless Noise-Cancelling Headphones",
  category: "Electronics",
  condition: "Like New",
  description:
    "Premium over-ear headphones in like-new condition. Industry-leading noise cancellation, 30-hour battery, plush memory-foam ear cushions. Includes original case, USB-C cable, and 3.5mm jack. Ideal for lectures, library focus, and commuting between campus and town.",
  price: "180",
};

const CreateListing = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const fileRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string | null>(null);
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [filled, setFilled] = useState(false);
  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const onFile = (f: File) => {
    const url = URL.createObjectURL(f);
    setImage(url);
    setScanned(false);
    setFilled(false);
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
    }, 2200);
  };

  const magicFill = () => {
    setTitle(AI_FILL.title);
    setCategory(AI_FILL.category);
    setCondition(AI_FILL.condition);
    setDescription(AI_FILL.description);
    setPrice(AI_FILL.price);
    setFilled(true);
    toast({ title: "Magic Description applied", description: "Review the AI-generated fields and tweak as needed." });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Listing posted", description: "Your item is live on the marketplace." });
      navigate("/browse");
    }, 1000);
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 py-10">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
          <Sparkles className="h-3 w-3" /> Computer Vision
        </span>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">Sell with AI</h1>
        <p className="mt-1 text-muted-foreground">
          Snap a photo. Our vision model identifies the item and writes the listing for you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Image-first uploader */}
        <Card className="overflow-hidden">
          {!image ? (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="flex w-full flex-col items-center justify-center gap-3 border-2 border-dashed border-border bg-muted/30 px-6 py-16 transition-colors hover:border-primary/50 hover:bg-primary/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Upload className="h-6 w-6 text-primary" />
              </div>
              <div className="text-center">
                <p className="font-display text-lg font-semibold">Drop your photo here</p>
                <p className="text-xs text-muted-foreground">JPG / PNG · We'll do the rest</p>
              </div>
            </button>
          ) : (
            <div className="relative aspect-[4/3] w-full bg-muted">
              <img src={image} alt="Upload preview" className="h-full w-full object-cover" />
              <ScanOverlay active={scanning} done={scanned} />
            </div>
          )}
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && onFile(e.target.files[0])}
          />
          {image && (
            <div className="flex flex-wrap items-center justify-between gap-2 border-t bg-card p-3">
              <Button type="button" variant="ghost" size="sm" onClick={() => fileRef.current?.click()} className="gap-1.5">
                <ImagePlus className="h-4 w-4" /> Replace photo
              </Button>
              <Button
                type="button"
                size="sm"
                disabled={!scanned}
                onClick={magicFill}
                className="gap-1.5"
              >
                <Wand2 className="h-4 w-4" />
                {scanning ? "Analyzing..." : "Magic Description"}
              </Button>
            </div>
          )}
        </Card>

        <div className="space-y-4">
          <Field label="Title" ai={filled} score={96}>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Will auto-fill after scan" required />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Category" ai={filled} score={94}>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Condition" ai={filled} score={89}>
              <Select value={condition} onValueChange={setCondition} required>
                <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {conditions.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </Field>
          </div>

          <Field label="Description" ai={filled} score={91}>
            <Textarea rows={5} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Will auto-fill after scan" required />
          </Field>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Price (KSh)" ai={filled} score={82}>
              <Input type="number" min="0" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="0" required />
            </Field>
            <div className="space-y-1.5">
              <Label>Pickup location</Label>
              <Input placeholder="e.g. Gate A" required />
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button type="submit" className="flex-1" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Posting..." : "Post Listing"}
          </Button>
          <Button type="button" variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
        </div>
      </form>
    </div>
  );
};

const Field = ({ label, ai, score, children }: { label: string; ai: boolean; score: number; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <div className="flex items-center gap-2">
      <Label>{label}</Label>
      {ai && <ConfidenceBadge score={score} />}
    </div>
    {children}
  </div>
);

export default CreateListing;
