import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Listing } from "@/lib/mockData";
import { MapPin } from "lucide-react";

interface ListingCardProps {
  listing: Listing;
}

const conditionColor: Record<string, string> = {
  "Like New": "bg-primary/15 text-primary border-primary/20",
  Good: "bg-leaf/15 text-leaf border-leaf/20",
  Fair: "bg-warm/15 text-warm border-warm/20",
  Used: "bg-earth/15 text-earth border-earth/20",
};

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <Link to={`/listing/${listing.id}`}>
      <Card className="group overflow-hidden border transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardContent className="p-4">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="line-clamp-1 font-semibold leading-tight">{listing.title}</h3>
            <span className="shrink-0 text-lg font-bold text-primary">${listing.price}</span>
          </div>
          <div className="mb-3 flex flex-wrap gap-1.5">
            <Badge variant="secondary" className="text-xs font-normal">
              {listing.category}
            </Badge>
            <Badge variant="outline" className={`text-xs font-normal ${conditionColor[listing.condition]}`}>
              {listing.condition}
            </Badge>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {listing.location}
            </span>
            <span>{listing.postedAt}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;
