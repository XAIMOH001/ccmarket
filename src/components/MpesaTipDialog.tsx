import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Smartphone } from "lucide-react";

const MpesaTipDialog = ({ recipient, trigger }: { recipient: string; trigger: React.ReactNode }) => {
  const { toast } = useToast();
  const [amount, setAmount] = useState(100);
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const send = () => {
    if (!phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      toast({ title: "STK Push sent", description: `Enter your M-Pesa PIN to tip ${recipient} KSh ${amount}.` });
    }, 1200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-display">Tip {recipient}</DialogTitle>
        </DialogHeader>
        <div className="rounded-xl bg-gradient-to-br from-[#00a651] to-[#007a3d] p-4 text-white">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-widest opacity-80">M-Pesa</span>
            <Smartphone className="h-4 w-4" />
          </div>
          <p className="mt-3 font-display text-3xl font-bold">KSh {amount.toLocaleString()}</p>
          <p className="text-xs opacity-80">Lipa na M-Pesa · Till 247247</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[50, 100, 200, 500].map((v) => (
            <Button
              key={v}
              size="sm"
              variant={amount === v ? "default" : "outline"}
              onClick={() => setAmount(v)}
            >
              {v}
            </Button>
          ))}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone (Safaricom)</Label>
          <Input id="phone" placeholder="07XX XXX XXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <Button onClick={send} disabled={loading || !phone} className="w-full">
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {loading ? "Sending STK..." : `Tip KSh ${amount}`}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default MpesaTipDialog;
