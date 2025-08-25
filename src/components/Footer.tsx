import { Building2, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

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
                  +57 300 000 0000
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:contacto@redmaq.co" className="hover:text-foreground transition-colors">
                  contacto@redmaq.co
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
                <a 
                  href="#inicio" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Inicio
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Servicios
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="#nosotros" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Nosotros
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  Contacto
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t bg-muted/30">
        <div className="container-x py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <span>
              © {year} REDMAQ COLOMBIA. Todos los derechos reservados.
            </span>
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