import { Link, useLocation } from "react-router-dom";
import { Store, Home, User } from "lucide-react";

const items = [
  { to: "/browse", icon: Store, label: "Market" },
  { to: "/hostels", icon: Home, label: "Hostels" },
  { to: "/settings", icon: User, label: "Profile" },
];

const BottomNav = () => {
  const { pathname } = useLocation();
  return (
    <nav className="sticky bottom-0 z-40 border-t bg-card/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        {items.map((it) => {
          const active = pathname.startsWith(it.to);
          const Icon = it.icon;
          return (
            <Link
              key={it.to}
              to={it.to}
              className={`flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              {it.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
