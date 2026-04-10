import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Alaset Concept showroom with elegant tableware and home décor"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <p className="text-sm font-body font-medium tracking-[0.3em] uppercase text-secondary mb-6 animate-fade-up">
          A L A S E T &nbsp; C O N C E P T
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 animate-fade-up delay-100 leading-tight">
          Make yourself <br />
          <span className="italic text-gradient-gold">at home</span>
        </h1>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl font-light max-w-xl mx-auto mb-10 animate-fade-up delay-200">
          A touch of everyday luxury. Refined serveware, statement décor & timeless home essentials.
        </p>
        <div className="flex gap-4 justify-center animate-fade-up delay-300">
          <a href="#collections" className="bg-gradient-teal px-8 py-3 rounded-sm text-primary-foreground font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
            Explore Collections
          </a>
          <a href="#about" className="border border-primary-foreground/30 px-8 py-3 rounded-sm text-primary-foreground font-body text-sm font-medium tracking-wide hover:bg-primary-foreground/10 transition-colors">
            Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
        <div className="w-px h-12 bg-primary-foreground/30 mx-auto mb-2" />
        <p className="text-primary-foreground/50 text-xs font-body tracking-widest uppercase">Scroll</p>
      </div>
    </section>
  );
};

export default HeroSection;
