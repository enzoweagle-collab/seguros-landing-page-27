import { Button } from "@/components/ui/button";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { QuoteSection } from "@/components/QuoteSection";
import { HandHeart } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const openWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=554799647685", '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Logo positioned at top left */}
      <div className="absolute top-6 left-6 z-20">
        <img 
          src="/lovable-uploads/9c2faa53-018c-4b50-8e5b-eb72e9e35785.png" 
          alt="ProSeguros Logo" 
          className="h-10 lg:h-12 w-auto"
        />
      </div>

      {/* Hero Section */}
      <section 
        className="h-[85vh] flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(54, 65, 87, 0.95), rgba(54, 65, 87, 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="text-white space-y-8 max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white">
              Sua segurança em primeiro lugar
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed">
              Protegemos o que é mais importante para você com soluções personalizadas 
              em seguros. Transparência, confiança e atendimento humanizado.
            </p>

            <Button
              variant="secondary"
              size="lg"
              onClick={openWhatsApp}
              className="px-8 py-4 text-lg mt-8 bg-white text-proseguros-primary hover:bg-white/90 border-2 border-white"
            >
              <HandHeart className="mr-2 h-6 w-6" />
              Faça uma cotação!
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Middle Quote Button */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-proseguros-primary mb-8">
            Pronto para se proteger?
          </h3>
          <Button
            variant="proseguros"
            size="lg"
            onClick={openWhatsApp}
            className="px-8 py-4 text-lg"
          >
            <HandHeart className="mr-2 h-6 w-6" />
            Faça uma cotação!
          </Button>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Final Quote Section */}
      <QuoteSection onQuoteClick={openWhatsApp} />
    </div>
  );
};

export default Index;
