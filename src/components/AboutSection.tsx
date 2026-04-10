import decorImg from "@/assets/collection-decor.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-secondary mb-4">Our Story</p>
            <h2 className="font-heading text-4xl md:text-5xl text-primary-foreground mb-6 leading-tight">
              Where elegance <br />meets everyday life
            </h2>
            <div className="space-y-4 font-body text-primary-foreground/80 font-light leading-relaxed">
              <p>
                Nestled in the heart of Abu Samra, Tripoli, Alaset Concept is more than a store — it's a destination
                for those who believe that beauty belongs in every corner of the home.
              </p>
              <p>
                From refined serveware and crystal glassware to artisan ceramics and cozy textiles, every piece
                in our collection is chosen to bring warmth, style, and a touch of luxury to your daily rituals.
              </p>
              <p>
                We believe that the objects you surround yourself with shape how you feel. That's why we curate
                collections that transform ordinary moments into extraordinary ones.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-heading text-3xl text-secondary">500+</p>
                <p className="font-body text-sm text-primary-foreground/60">Unique Products</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-secondary">50+</p>
                <p className="font-body text-sm text-primary-foreground/60">Premium Brands</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src={decorImg}
                alt="Alaset Concept home décor display"
                className="rounded-lg w-full h-[400px] md:h-[500px] object-cover shadow-card"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-gold rounded-sm flex items-center justify-center">
                <span className="font-heading text-primary-foreground text-xs text-center leading-tight">Since<br/>Est.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
