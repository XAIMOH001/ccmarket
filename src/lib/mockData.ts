export type Category = "Books" | "Electronics" | "Clothing" | "Furniture" | "Sports" | "Other";
export type Condition = "Like New" | "Good" | "Fair" | "Used";

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: Category;
  condition: Condition;
  image: string;
  seller: string;
  sellerAvatar: string;
  postedAt: string;
  location: string;
}

export const categories: Category[] = ["Books", "Electronics", "Clothing", "Furniture", "Sports", "Other"];
export const conditions: Condition[] = ["Like New", "Good", "Fair", "Used"];

export const listings: Listing[] = [
  {
    id: "1",
    title: "Calculus: Early Transcendentals",
    description: "8th edition, used for one semester. Some highlighting but otherwise in great condition. Perfect for MATH 101/102.",
    price: 35,
    category: "Books",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    seller: "Alex Chen",
    sellerAvatar: "AC",
    postedAt: "2 days ago",
    location: "West Campus"
  },
  {
    id: "2",
    title: "MacBook Air M1 2020",
    description: "Excellent condition, 256GB, Space Gray. Battery health at 92%. Comes with original charger and box.",
    price: 650,
    category: "Electronics",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
    seller: "Jordan Lee",
    sellerAvatar: "JL",
    postedAt: "5 hours ago",
    location: "Engineering Building"
  },
  {
    id: "3",
    title: "IKEA Desk Lamp",
    description: "White desk lamp, adjustable arm. Works perfectly, just redecorating my room.",
    price: 12,
    category: "Furniture",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&h=300&fit=crop",
    seller: "Sam Rivera",
    sellerAvatar: "SR",
    postedAt: "1 day ago",
    location: "North Dorms"
  },
  {
    id: "4",
    title: "Vintage Denim Jacket",
    description: "Size M, oversized fit. Authentic vintage Levi's in great condition. A campus staple.",
    price: 40,
    category: "Clothing",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
    seller: "Taylor Kim",
    sellerAvatar: "TK",
    postedAt: "3 days ago",
    location: "Student Union"
  },
  {
    id: "5",
    title: "Yoga Mat",
    description: "6mm thick, non-slip surface. Used a handful of times. Comes with carrying strap.",
    price: 15,
    category: "Sports",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop",
    seller: "Morgan Bailey",
    sellerAvatar: "MB",
    postedAt: "6 hours ago",
    location: "Rec Center"
  },
  {
    id: "6",
    title: "Introduction to Psychology",
    description: "Latest edition. No markings or damage. Required text for PSYCH 100.",
    price: 25,
    category: "Books",
    condition: "Like New",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop",
    seller: "Riley Park",
    sellerAvatar: "RP",
    postedAt: "1 week ago",
    location: "Library"
  },
  {
    id: "7",
    title: "Sony WH-1000XM4 Headphones",
    description: "Noise cancelling headphones, black. Minor scuff on right ear cup. Sound quality is phenomenal.",
    price: 180,
    category: "Electronics",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&h=300&fit=crop",
    seller: "Chris Nguyen",
    sellerAvatar: "CN",
    postedAt: "4 days ago",
    location: "Music Hall"
  },
  {
    id: "8",
    title: "Mini Fridge",
    description: "Compact 1.7 cu ft. Perfect for dorm rooms. Runs quietly, no issues.",
    price: 55,
    category: "Furniture",
    condition: "Fair",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=400&h=300&fit=crop",
    seller: "Dana Martin",
    sellerAvatar: "DM",
    postedAt: "2 weeks ago",
    location: "South Dorms"
  },
];
