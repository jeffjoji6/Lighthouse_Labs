const Footer = () => {
  return (
    <footer className="relative border-t border-border">
      {/* Orange gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Lighthouse Labs" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground text-sm">Engineering What's Next.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Services</h4>
            {["Website Development", "Shopify Development", "Custom Web Applications", "Digital Presence Optimization"].map((s) => (
              <a key={s} href="#services" className="block text-muted-foreground text-sm mb-2 hover:text-foreground transition-colors">
                {s}
              </a>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Company</h4>
            {["About", "Process", "Work", "Contact"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="block text-muted-foreground text-sm mb-2 hover:text-foreground transition-colors">
                {s}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Get in Touch</h4>
            <a href="mailto:hello@lighthouselabs.dev" className="block text-muted-foreground text-sm mb-2 hover:text-foreground transition-colors">
              hello@lighthouselabs.dev
            </a>
            <div className="flex gap-4 mt-4">
              {["GitHub", "LinkedIn", "X", "Dribbble"].map((s) => (
                <a key={s} href="#" className="text-muted-foreground text-xs hover:text-primary transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* SEO paragraph */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground/60 text-xs leading-relaxed max-w-3xl">
            Lighthouse Labs is a web development studio specializing in modern websites, scalable web platforms,
            e-commerce systems, and digital infrastructure for growing businesses. Services include Website Development,
            Shopify Development, Custom Web Applications, and Digital Presence Optimization.
          </p>
          <p className="mt-6 text-center text-muted-foreground text-xs">
            © {new Date().getFullYear()} Lighthouse Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
