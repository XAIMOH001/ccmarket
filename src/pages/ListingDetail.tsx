import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { listings } from "@/lib/mockData";
import { ArrowLeft, MapPin, MessageCircle, Share2, Heart, Clock } from "lucide-react";

const ListingDetail = () => {
  const { id } = useParams();
  const listing = listings.find((l) => l.id === id);

  if (!listing) {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center px-4 py-20 text-center">
        <h2 className="mb-2 text-2xl font-bold">Listing not found</h2>
        <p className="mb-6 text-muted-foreground">This item may have been sold or removed.</p>
        <Link to="/browse">
          <Button>Back to Browse</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/browse" className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to listings
      </Link>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Image */}
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border">
            <img
              src={listing.image}
              alt={listing.title}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="mb-2 flex flex-wrap gap-1.5">
              <Badge variant="secondary">{listing.category}</Badge>
              <Badge variant="outline">{listing.condition}</Badge>
            </div>
            <h1
              className="mb-2 text-2xl font-bold lg:text-3xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {listing.title}
            </h1>
            <p className="text-3xl font-bold text-primary">${listing.price}</p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {listing.location}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Posted {listing.postedAt}
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1 gap-2">
              <MessageCircle className="h-4 w-4" />
              Contact Seller
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Seller Card */}
          <Card>
            <CardContent className="flex items-center gap-4 p-4">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {listing.sellerAvatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{listing.seller}</p>
                <p className="text-xs text-muted-foreground">Verified Student</p>
              </div>
            </CardContent>
          </Card>

          {/* Description */}
          <div>
            <h3 className="mb-2 font-semibold">Description</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {listing.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
