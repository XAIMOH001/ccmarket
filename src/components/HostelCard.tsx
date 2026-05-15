import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BadgeCheck, MapPin, Coins } from "lucide-react";
import MpesaTipDialog from "./MpesaTipDialog";
import type { Hostel } from "@/lib/hostels";

const HostelCard = ({ hostel }: { hostel: Hostel }) => (
  <Card className="group overflow-hidden border-border/60 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
      <img
        src={hostel.image}
        alt={hostel.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {hostel.verified && (
        <Badge className="absolute left-3 top-3 gap-1 bg-primary text-primary-foreground">
          <BadgeCheck className="h-3 w-3" />
          Verified
        </Badge>
      )}
      <div className="absolute bottom-3 right-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-bold backdrop-blur">
        KSh {hostel.price.toLocaleString()}/mo
      </div>
    </div>
    <div className="space-y-3 p-4">
      <div>
        <h3 className="font-display text-lg font-semibold leading-tight">{hostel.title}</h3>
        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3" />
          {hostel.area} · {hostel.type}
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        {hostel.amenities.map((a) => (
          <span key={a} className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium">
            {a}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t pt-3">
        <span className="text-xs text-muted-foreground">Hunter: {hostel.hunter}</span>
        <MpesaTipDialog
          recipient={hostel.hunter}
          trigger={
            <Button size="sm" variant="ghost" className="h-7 gap-1 text-xs text-primary">
              <Coins className="h-3 w-3" />
              Tip
            </Button>
          }
        />
      </div>
    </div>
  </Card>
);

export default HostelCard;
