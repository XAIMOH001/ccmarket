import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import HostelCard from "@/components/HostelCard";
import VerificationStepper from "@/components/VerificationStepper";
import { hostels, missions } from "@/lib/hostels";
import { Search, MapPin, Plus, Coins, Send, Home, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Hostels = () => {
  const [view, setView] = useState<"student" | "hunter">("student");
  const { toast } = useToast();

  return (
    <div className="container mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-2 gap-1">
            <Home className="h-3 w-3" /> Hunter Service
          </Badge>
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Find a Home</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Verified student housing, sourced and inspected by trusted campus hunters.
          </p>
        </div>
        <div className="flex rounded-full border bg-card p-1">
          <button
            onClick={() => setView("student")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              view === "student" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setView("hunter")}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              view === "hunter" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Verified Hunter
          </button>
        </div>
      </div>

      {view === "student" ? (
        <div className="space-y-8">
          <Card className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search area, type, price..." className="pl-9" />
            </div>
            <Button
              className="gap-2"
              onClick={() => toast({ title: "Hunter requested", description: "We'll notify nearby hunters." })}
            >
              <Target className="h-4 w-4" /> Request a Hunter
            </Button>
          </Card>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-2xl font-semibold">Available Hostels</h2>
              <span className="text-xs text-muted-foreground">{hostels.length} listings</span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {hostels.map((h) => (
                <HostelCard key={h.id} hostel={h} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Tabs defaultValue="missions" className="space-y-6">
          <TabsList>
            <TabsTrigger value="missions">Mission Board</TabsTrigger>
            <TabsTrigger value="submit">Submit Listing</TabsTrigger>
            <TabsTrigger value="verify">Verification</TabsTrigger>
          </TabsList>

          <TabsContent value="missions" className="space-y-4">
            {missions.map((m) => (
              <Card key={m.id} className="p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg font-semibold">
                        {m.type} needed in {m.area}
                      </h3>
                      <Badge variant="secondary" className="gap-1">
                        <Coins className="h-3 w-3 text-primary" />
                        KSh {m.bounty} bounty
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Budget: <span className="font-semibold text-foreground">KSh {m.budget.toLocaleString()}</span> · Posted by {m.student} · {m.postedAt}
                    </p>
                    <p className="mt-2 text-sm">{m.notes}</p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => toast({ title: "Mission accepted", description: `Find a ${m.type} in ${m.area}.` })}
                  >
                    Accept Mission
                  </Button>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="submit">
            <Card className="p-6">
              <h3 className="mb-1 font-display text-lg font-semibold">Submit a Hostel Listing</h3>
              <p className="mb-5 text-sm text-muted-foreground">Verified hunters earn per accepted listing.</p>
              <form
                className="grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  toast({ title: "Listing submitted", description: "Pending review by the team." });
                }}
              >
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="ht">Listing title</Label>
                  <Input id="ht" placeholder="Modern bedsitter near Total" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="ha">Area</Label>
                  <Input id="ha" placeholder="Total, Juja" required />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="hp">Price (KSh)</Label>
                  <Input id="hp" type="number" placeholder="5500" required />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="hn">Notes & amenities</Label>
                  <Textarea id="hn" rows={3} placeholder="Wi-Fi, water 24/7, secure compound..." />
                </div>
                <Button type="submit" className="gap-2 sm:col-span-2">
                  <Send className="h-4 w-4" /> Submit for Review
                </Button>
              </form>
            </Card>
          </TabsContent>

          <TabsContent value="verify">
            <VerificationStepper />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default Hostels;
