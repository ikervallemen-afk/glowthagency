import { Instagram, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary/80 border-t border-border py-12">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <span className="font-display text-lg font-bold text-primary">Glowth</span>
          <p className="text-sm text-muted-foreground mt-2">
            Marketing especializado para clínicas que quieren más pacientes sin depender del boca a boca.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Navegación</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { label: "Inicio", href: "#hero" },
              { label: "Servicio", href: "#servicio" },
              { label: "Testimonios", href: "#testimonios" },
              { label: "Precio", href: "#precio" },
              { label: "Proceso", href: "#proceso" },
            ].map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold text-foreground mb-3 text-sm">Contacto</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:glowthagency0@gmail.com" className="hover:text-foreground transition-colors">
                glowthagency0@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-primary" />
              <a
                href="https://instagram.com/glowthagency"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                @glowthagency
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>España</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Glowth Agency. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">Aviso legal</a>
          <a href="#" className="hover:text-foreground transition-colors">Política de privacidad</a>
          <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
