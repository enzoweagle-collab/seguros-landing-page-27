import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-proseguros-primary mb-16">
            Sobre o Fundador
          </h2>
          
          <Card className="overflow-hidden shadow-xl border-proseguros-primary/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src="/lovable-uploads/7c8a4c6e-32c8-456d-a049-ee1531c834cc.png"
                    alt="Marcelo Filippi - Fundador da ProSeguros"
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-proseguros-primary mb-6">
                    Marcelo Filippi
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Marcelo Filippi é o fundador da empresa e tem como principal objetivo 
                      oferecer muito mais do que serviços de seguros: ele busca proporcionar 
                      tranquilidade, segurança e confiança para cada cliente que escolhe 
                      caminhar ao seu lado.
                    </p>
                    
                    <p>
                      Sua visão é de que o seguro deve ser algo simples, acessível e humano, 
                      indo além de contratos e cláusulas para se tornar uma verdadeira 
                      parceria de proteção.
                    </p>
                    
                    <p>
                      Guiado por valores como transparência, ética e dedicação, Marcelo 
                      acredita que cada pessoa e cada história merecem atenção especial. 
                      Por isso, sua liderança é marcada pelo compromisso de entregar 
                      soluções que façam sentido para a vida real, trazendo segurança 
                      tanto para o presente quanto para o futuro.
                    </p>
                    
                    <blockquote className="border-l-4 border-proseguros-primary pl-6 italic text-proseguros-primary font-medium text-lg mt-8">
                      "Acredito que o seguro não é apenas sobre bens, mas sobre cuidar 
                      de pessoas e de sonhos."
                      <footer className="text-right mt-2 font-semibold">
                        — Marcelo Filippi
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};