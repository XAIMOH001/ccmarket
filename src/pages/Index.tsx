import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ListingCard from "@/components/ListingCard";
import { listings, categories } from "@/lib/mockData";
import { ArrowRight, BookOpen, Laptop, Shirt, Sofa, Dumbbell, Package, Leaf, Recycle, Users } from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Books: <BookOpen className="h-5 w-5" />,
  Electronics: <Laptop className="h-5 w-5" />,
  Clothing: <Shirt className="h-5 w-5" />,
  Furniture: <Sofa className="h-5 w-5" />,
  Sports: <Dumbbell className="h-5 w-5" />,
  Other: <Package className="h-5 w-5" />,
};

const Index = () => {
  const featuredListings = listings.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/40 py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 gap-1 px-3 py-1 text-sm">
              <Leaf className="h-3.5 w-3.5" />
              Sustainable Student Marketplace
            </Badge>
            <h1
              className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Buy &amp; Sell Within Your{" "}
              <span className="text-primary">Campus Community</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Give your items a second life. Find affordable books, electronics, clothing, and more from fellow students.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/browse">
                <Button size="lg" className="gap-2">
                  Browse Marketplace
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/create">
                <Button size="lg" variant="outline" className="gap-2">
                  Sell an Item
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-card py-8">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 px-4 text-center md:gap-16">
          {[
            { icon: <Users className="h-5 w-5 text-primary" />, value: "2,400+", label: "Active Students" },
            { icon: <Package className="h-5 w-5 text-primary" />, value: "1,100+", label: "Listings" },
            { icon: <Recycle className="h-5 w-5 text-primary" />, value: "800+", label: "Items Rehomed" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              {s.icon}
              <div className="text-left">
                <p className="text-xl font-bold">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2
            className="mb-8 text-center text-2xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Shop by Category
          </h2>
          <div className="mx-auto grid max-w-3xl grid-cols-3 gap-3 sm:grid-cols-6">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/browse?category=${cat}`}
                className="flex flex-col items-center gap-2 rounded-xl border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {categoryIcons[cat]}
                </div>
                <span className="text-xs font-medium">{cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between">
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Recently Listed
            </h2>
            <Link to="/browse">
              <Button variant="ghost" size="sm" className="gap-1 text-primary">
                View all <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredListings.map((l) => (
              <ListingCard key={l.id} listing={l} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl rounded-2xl bg-primary/5 border border-primary/20 p-8 text-center">
            <Recycle className="mx-auto mb-4 h-10 w-10 text-primary" />
            <h2
              className="mb-3 text-2xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Got items collecting dust?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Turn your unused textbooks, gear, and clothes into cash — and help a fellow student out.
            </p>
            <Link to="/create">
              <Button size="lg" className="gap-2">
                Start Selling <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
