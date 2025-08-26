import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=554799647685";

  return (
    <Button
      variant="whatsapp"
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all duration-300"
      onClick={() => window.open(whatsappUrl, '_blank')}
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </Button>
  );
};