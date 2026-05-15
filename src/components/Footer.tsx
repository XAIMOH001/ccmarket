import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-muted/40 py-8">
    <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <Leaf className="h-4 w-4 text-primary" />
        <span className="font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
          Campus Connect Market
        </span>
      </div>
      <p>Promoting sustainability &amp; affordability within your campus community.</p>
      <p className="text-xs">© 2026 Campus Connect Market. Built for students, by students.</p>
    </div>
  </footer>
);

export default Footer;
