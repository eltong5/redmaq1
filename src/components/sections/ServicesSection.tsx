import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { 
  Truck, 
  Wrench, 
  Users, 
  ShoppingCart,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import warehouseImage from "@/assets/warehouse.jpg";

const services = [
  {
    title: "Distribución de Maquinaria",
    description: "Amplio catálogo de equipos para construcción e industria",
    icon: Truck,
    features: ["Excavadoras", "Grúas", "Bulldozers", "Compactadoras"]
  },
  {
    title: "Servicio Técnico",
    description: "Mantenimiento y reparación especializada",
    icon: Wrench,
    features: ["Mantenimiento preventivo", "Reparaciones", "Repuestos originales", "Soporte 24/7"]
  },
  {
    title: "Consultoría",
    description: "Asesoría especializada para sus proyectos",
    icon: Users,
    features: ["Análisis de necesidades", "Selección de equipos", "Capacitación", "Optimización"]
  },
  {
    title: "Venta y Arrendamiento",
    description: "Opciones flexibles de adquisición",
    icon: ShoppingCart,
    features: ["Venta directa", "Arrendamiento", "Leasing", "Financiación"]
  }
];

export default function ServicesSection() {
  return (
    <div>
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nuestros{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Servicios
          </span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Soluciones integrales para la industria de la construcción y desarrollo de proyectos
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <Card 
              key={service.title} 
              className="hover:shadow-glow transition-all duration-300 group"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* CTA Section */}
      <Card className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${warehouseImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 gradient-hero" />
        </div>
        
        <CardContent className="relative z-10 p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para impulsar su proyecto?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Contáctenos y descubra cómo nuestras soluciones pueden transformar 
            su operación industrial con la maquinaria más avanzada del mercado.
          </p>
          
          <Button variant="hero" size="lg" className="text-lg px-8" asChild>
            <a href="#contacto">
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}