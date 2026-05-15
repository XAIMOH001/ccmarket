export interface Hostel {
  id: string;
  title: string;
  area: string;
  price: number;
  type: "Bedsitter" | "Single Room" | "1-Bedroom" | "Shared";
  image: string;
  verified: boolean;
  hunter: string;
  postedAt: string;
  amenities: string[];
}

export interface HunterMission {
  id: string;
  student: string;
  area: string;
  type: string;
  budget: number;
  notes: string;
  postedAt: string;
  bounty: number;
}

export const hostels: Hostel[] = [
  {
    id: "h1",
    title: "Sunny Bedsitter near Total",
    area: "Total, Juja",
    price: 5500,
    type: "Bedsitter",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    verified: true,
    hunter: "Brian K.",
    postedAt: "2h ago",
    amenities: ["Wi-Fi", "Water 24/7", "Secure"],
  },
  {
    id: "h2",
    title: "Modern Single Room — Gate A",
    area: "Gate A, JKUAT",
    price: 4200,
    type: "Single Room",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop",
    verified: true,
    hunter: "Aisha M.",
    postedAt: "1d ago",
    amenities: ["Tiled", "Balcony"],
  },
  {
    id: "h3",
    title: "Spacious 1BR with Parking",
    area: "Kenyatta Road",
    price: 9000,
    type: "1-Bedroom",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    verified: false,
    hunter: "Pending review",
    postedAt: "5h ago",
    amenities: ["Parking", "Kitchen"],
  },
  {
    id: "h4",
    title: "Budget Shared Room",
    area: "Madaraka",
    price: 2800,
    type: "Shared",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    verified: true,
    hunter: "Dennis O.",
    postedAt: "3d ago",
    amenities: ["Bills inclusive"],
  },
];

export const missions: HunterMission[] = [
  {
    id: "m1",
    student: "Wanjiru N.",
    area: "Total area",
    type: "Bedsitter",
    budget: 6000,
    notes: "Needs reliable water and Wi-Fi. Move-in by month end.",
    postedAt: "30m ago",
    bounty: 500,
  },
  {
    id: "m2",
    student: "Kevin O.",
    area: "Gate A",
    type: "Single Room",
    budget: 4500,
    notes: "Quiet area preferred. Ground floor.",
    postedAt: "2h ago",
    bounty: 300,
  },
  {
    id: "m3",
    student: "Faith M.",
    area: "Kenyatta Road",
    type: "1-Bedroom",
    budget: 10000,
    notes: "Sharing with one. Needs parking.",
    postedAt: "1d ago",
    bounty: 800,
  },
];
