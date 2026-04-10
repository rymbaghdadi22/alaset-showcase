import glasswareImg from "@/assets/collection-glassware.jpg";
import ceramicsImg from "@/assets/collection-ceramics.jpg";
import servingImg from "@/assets/collection-serving.jpg";
import textilesImg from "@/assets/collection-textiles.jpg";
import decorImg from "@/assets/collection-decor.jpg";

const collections = [
  { title: "Glassware", subtitle: "Crystal elegance for every table", image: glasswareImg, span: "md:col-span-1 md:row-span-2" },
  { title: "Ceramics", subtitle: "Artisan patterns, timeless beauty", image: ceramicsImg, span: "md:col-span-1 md:row-span-1" },
  { title: "Serving Sets", subtitle: "Gold-accented luxury pieces", image: servingImg, span: "md:col-span-1 md:row-span-1" },
  { title: "Textiles", subtitle: "Cushions, throws & warmth", image: textilesImg, span: "md:col-span-1 md:row-span-1" },
  { title: "Home Décor", subtitle: "Vases, candles & accents", image: decorImg, span: "md:col-span-1 md:row-span-1" },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-secondary mb-3">Our Collections</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">Curated for your home</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">
          {collections.map((item, i) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${item.span}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-2xl text-primary-foreground mb-1">{item.title}</h3>
                <p className="font-body text-sm text-primary-foreground/70 font-light">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
