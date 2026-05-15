import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Leaf, Plus, Search, Settings as SettingsIcon, User } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight">
            Campus Connect
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <Link to="/browse">
            <Button
              variant={location.pathname === "/browse" ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Search className="h-4 w-4" />
              Browse
            </Button>
          </Link>
          <Link to="/hostels">
            <Button
              variant={location.pathname === "/hostels" ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Home className="h-4 w-4" />
              Hostels
            </Button>
          </Link>
          <Link to="/create">
            <Button
              variant={location.pathname === "/create" ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Sell Item
            </Button>
          </Link>
          <Link to="/settings">
            <Button
              variant={location.pathname === "/settings" ? "secondary" : "ghost"}
              size="sm"
              className="gap-2"
            >
              <SettingsIcon className="h-4 w-4" />
              Settings
            </Button>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Sign In</span>
          </Button>
          <Link to="/create" className="md:hidden">
            <Button size="icon" variant="default" className="h-9 w-9">
              <Plus className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
