import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ListingCard from "@/components/ListingCard";
import { listings, categories, conditions } from "@/lib/mockData";
import { Search, SlidersHorizontal, X } from "lucide-react";

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...listings];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (l) => l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q)
      );
    }

    if (category) result = result.filter((l) => l.category === category);
    if (condition) result = result.filter((l) => l.condition === condition);

    if (sort === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sort === "price-high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [search, category, condition, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setCondition("");
    setSort("newest");
    setSearchParams({});
  };

  const hasFilters = search || category || condition || sort !== "newest";

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1
          className="mb-2 text-3xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Browse Marketplace
        </h1>
        <p className="text-muted-foreground">
          {filtered.length} item{filtered.length !== 1 ? "s" : ""} available
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-6 space-y-3">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search items..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>

        <div className={`flex flex-wrap gap-2 ${showFilters ? "flex" : "hidden md:flex"}`}>
          <Select value={category} onValueChange={(v) => setCategory(v === "all" ? "" : v)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={condition} onValueChange={(v) => setCondition(v === "all" ? "" : v)}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any Condition</SelectItem>
              {conditions.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low → High</SelectItem>
              <SelectItem value="price-high">Price: High → Low</SelectItem>
            </SelectContent>
          </Select>

          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1 text-muted-foreground">
              <X className="h-3.5 w-3.5" /> Clear
            </Button>
          )}
        </div>

        {/* Active Filters */}
        {(category || condition) && (
          <div className="flex flex-wrap gap-1.5">
            {category && (
              <Badge variant="secondary" className="gap-1">
                {category}
                <button onClick={() => setCategory("")}><X className="h-3 w-3" /></button>
              </Badge>
            )}
            {condition && (
              <Badge variant="secondary" className="gap-1">
                {condition}
                <button onClick={() => setCondition("")}><X className="h-3 w-3" /></button>
              </Badge>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((l) => (
            <ListingCard key={l.id} listing={l} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Search className="mb-4 h-12 w-12 text-muted-foreground/40" />
          <h3 className="mb-2 text-lg font-semibold">No items found</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Try adjusting your search or filters
          </p>
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Browse;
