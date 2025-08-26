import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Car, Truck, Package, Users, Building2 } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Seguro de Vida",
    description: "Proteção financeira para sua família com cobertura completa e personalizada."
  },
  {
    icon: Car,
    title: "Seguro de Auto",
    description: "Cobertura completa para seu veículo com assistência 24h e melhor custo-benefício."
  },
  {
    icon: Truck,
    title: "Seguro de Frota",
    description: "Soluções empresariais para gestão e proteção de frotas de veículos."
  },
  {
    icon: Package,
    title: "Seguro de Transporte",
    description: "Proteção integral para cargas e mercadorias em trânsito."
  },
  {
    icon: Users,
    title: "Responsabilidade Civil",
    description: "Cobertura contra danos a terceiros e responsabilidades profissionais."
  },
  {
    icon: Building2,
    title: "Seguro Empresarial",
    description: "Proteção completa para seu negócio contra diversos tipos de riscos."
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-proseguros-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em seguros para proteger o que é mais importante para você
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-proseguros-primary/10">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-proseguros-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-proseguros-primary" />
                  </div>
                  <CardTitle className="text-xl text-proseguros-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};