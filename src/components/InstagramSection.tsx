import { Instagram } from "lucide-react";
import glasswareImg from "@/assets/collection-glassware.jpg";
import ceramicsImg from "@/assets/collection-ceramics.jpg";
import servingImg from "@/assets/collection-serving.jpg";
import textilesImg from "@/assets/collection-textiles.jpg";
import decorImg from "@/assets/collection-decor.jpg";
import heroImg from "@/assets/hero-bg.jpg";

const photos = [glasswareImg, ceramicsImg, servingImg, textilesImg, decorImg, heroImg];

const InstagramSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl text-center mb-12">
        <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-secondary mb-3">Follow Us</p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">@alaset.lb</h2>
        <p className="font-body text-muted-foreground font-light">Discover daily inspiration on our Instagram</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 max-w-6xl mx-auto">
        {photos.map((photo, i) => (
          <a
            key={i}
            href="https://www.instagram.com/alaset.lb"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden"
          >
            <img src={photo} alt="Alaset Instagram" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 flex items-center justify-center transition-all duration-300">
              <Instagram className="text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={28} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
