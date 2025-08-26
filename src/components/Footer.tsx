import { Building2, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

// Importamos íconos oficiales en SVG (sin librerías externas)
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.8-3.9a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 5.8c-.8.4-1.6.6-2.5.8.9-.6 1.6-1.4 2-2.5-.9.6-1.9 1-3 1.2A4.3 4.3 0 0 0 12 8c0 .3 0 .6.1.9-3.6-.2-6.7-1.9-8.8-4.6a4.3 4.3 0 0 0 1.3 5.8c-.7 0-1.4-.2-2-.5v.1a4.3 4.3 0 0 0 3.5 4.2c-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1a4.3 4.3 0 0 0 4 3 8.6 8.6 0 0 1-5.3 1.8c-.3 0-.6 0-.9-.1a12.2 12.2 0 0 0 6.6 1.9c7.9 0 12.2-6.6 12.2-12.2v-.6c.8-.5 1.5-1.2 2-2z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer id="contacto" className="bg-card border-t">
      {/* Main Footer Content */}
      <div className="container-x py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="h-8 w-8 text-accent" />
              <h3 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                REDMAQ COLOMBIA
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Red de distribución de maquinaria para construcción e industria. 
              Conectando proyectos con la tecnología más avanzada en toda Colombia.
            </p>
            
            {/* Contact CTA */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">¿Necesita una cotización?</h4>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:contacto@redmaq.co">
                  <Mail className="mr-2 h-4 w-4" />
                  Contactar Ahora
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+573000000000" className="hover:text-foreground transition-colors">
                  +57 310 714 85 27
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:contacto@redmaq.co" className="hover:text-foreground transition-colors">
                  juliocbolano@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent mt-0.5" />
                <span>Barranquilla, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Navegación</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Inicio
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Servicios
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Nosotros
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Contacto
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Media Icons in the middle */}
      <div className="flex justify-center gap-6 py-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
          <FacebookIcon />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
          <TwitterIcon />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t bg-muted/30">
        <div className="container-x py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>© {year} REDMAQ COLOMBIA. Todos los derechos reservados.</span>
            <div className="flex items-center gap-4">
              <span>Lider en comercializacion de prodcutos industriales</span>
              <div className="flex items-center gap-1">
                <span>Powered by</span>
                <span className="font-semibold text-accent">Lovable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
