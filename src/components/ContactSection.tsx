import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-medium tracking-[0.2em] uppercase text-secondary mb-3">Visit Us</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">Come say hello</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">Location</h3>
                <p className="font-body text-muted-foreground font-light">Abu Samra, Tripoli, Lebanon</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">Get in Touch</h3>
                <p className="font-body text-muted-foreground font-light">DM us on Instagram or visit the store</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">Opening Hours</h3>
                <p className="font-body text-muted-foreground font-light">Mon – Sat: 10:00 AM – 8:00 PM</p>
                <p className="font-body text-muted-foreground font-light">Sunday: Closed</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Instagram className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-1">Follow Us</h3>
                <a
                  href="https://www.instagram.com/alaset.lb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-primary font-medium hover:underline"
                >
                  @alaset.lb
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-card h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13226.04!2d35.83!3d34.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDI1JzQ4LjAiTiAzNcKwNDknNDguMCJF!5e0!3m2!1sen!2slb!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alaset Concept location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
