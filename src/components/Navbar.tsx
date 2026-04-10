import { useState } from "react";
import { Menu, X, Instagram, MapPin } from "lucide-react";
import logoImg from "@/assets/alaset-logo.jpeg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logoImg} alt="Alaset Concept" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading text-xl text-foreground tracking-wide">Alaset Concept</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#collections" className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors">Collections</a>
          <a href="#about" className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors">Visit Us</a>
          <a href="https://www.instagram.com/alaset.lb" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Instagram size={18} />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="flex flex-col gap-4 p-6">
            <a href="#collections" onClick={() => setOpen(false)} className="text-sm font-body font-medium text-muted-foreground">Collections</a>
            <a href="#about" onClick={() => setOpen(false)} className="text-sm font-body font-medium text-muted-foreground">About</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm font-body font-medium text-muted-foreground">Visit Us</a>
            <a href="https://www.instagram.com/alaset.lb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground">
              <Instagram size={16} /> @alaset.lb
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
