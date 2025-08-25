import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Target, Eye, Building2 } from "lucide-react";
import serviceImage from "@/assets/service-team.jpg";

export default function MissionVisionSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Image Section */}
      <div className="relative">
        <div className="relative rounded-2xl overflow-hidden shadow-elegant">
          <img 
            src={serviceImage} 
            alt="Equipo de servicio técnico REDMAQ"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>
        
        {/* Floating Stats */}
        <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-6 shadow-elegant border">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-accent" />
            <div>
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Proyectos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Construimos el Futuro de la{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Industria
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            En REDMAQ COLOMBIA, somos más que distribuidores. Somos sus socios estratégicos 
            en el crecimiento y modernización de la industria colombiana.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Mission */}
          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Target className="h-5 w-5 text-accent" />
                </div>
                <CardTitle className="text-xl">Nuestra Misión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Facilitar el acceso a maquinaria de construcción e industrial de alta calidad, 
                brindando soluciones integrales que impulsen el desarrollo de proyectos en Colombia.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-xl">Nuestra Visión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Ser la red de distribución líder en Colombia, reconocida por nuestra innovación, 
                confiabilidad y compromiso con el crecimiento sostenible de la industria.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}