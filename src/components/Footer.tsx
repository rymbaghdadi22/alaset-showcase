import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-teal py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-2xl text-primary-foreground mb-1">Alaset Concept</h3>
            <p className="font-body text-primary-foreground/60 text-sm font-light">Make yourself at home</p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#collections" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Collections</a>
            <a href="#about" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</a>
            <a href="#contact" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Visit</a>
            <a href="https://www.instagram.com/alaset.lb" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">© {new Date().getFullYear()} Alaset Concept. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
