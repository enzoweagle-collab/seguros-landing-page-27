import { Button } from "@/components/ui/button";
import { HandHeart } from "lucide-react";

interface QuoteSectionProps {
  onQuoteClick: () => void;
}

export const QuoteSection = ({ onQuoteClick }: QuoteSectionProps) => {
  return (
    <section className="py-20 bg-proseguros-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-8">
          Vamos fechar negócio?
        </h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
          Estamos prontos para oferecer a melhor solução em seguros para você. 
          Clique no botão abaixo e receba sua cotação personalizada.
        </p>
        <Button
          variant="secondary"
          size="lg"
          onClick={onQuoteClick}
          className="bg-white text-proseguros-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold"
        >
          <HandHeart className="mr-2 h-6 w-6" />
          Faça uma cotação!
        </Button>
      </div>
    </section>
  );
};