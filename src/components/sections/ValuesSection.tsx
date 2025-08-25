import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { 
  Award, 
  Shield, 
  Headphones, 
  Lightbulb, 
  ShieldCheck, 
  Heart 
} from "lucide-react";

const values = [
  {
    name: "Calidad",
    icon: Award,
    description: "Productos y servicios que superan las expectativas más exigentes"
  },
  {
    name: "Confiabilidad", 
    icon: Shield,
    description: "Respaldo constante en cada proyecto y relación comercial"
  },
  {
    name: "Servicio",
    icon: Headphones,
    description: "Atención personalizada y soporte técnico especializado"
  },
  {
    name: "Innovación",
    icon: Lightbulb,
    description: "Tecnología de vanguardia para impulsar la industria"
  },
  {
    name: "Seguridad",
    icon: ShieldCheck,
    description: "Máximos estándares de seguridad en todos nuestros procesos"
  },
  {
    name: "Responsabilidad",
    icon: Heart,
    description: "Compromiso social y ambiental con las comunidades"
  }
];

export default function ValuesSection() {
  return (
    <div className="text-center">
      <div className="max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nuestros{" "}
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Valores
          </span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Los principios que guían cada decisión y acción en REDMAQ COLOMBIA
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => {
          const IconComponent = value.icon;
          return (
            <Card 
              key={value.name} 
              className={`hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group ${
                index % 2 === 0 ? 'fade-in' : 'slide-up'
              }`}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-accent rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {value.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}