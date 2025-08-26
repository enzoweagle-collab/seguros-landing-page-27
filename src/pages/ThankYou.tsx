import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    // Update page title
    document.title = "Obrigado - ProSeguros";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-proseguros-primary to-proseguros-secondary">
      <div className="text-center text-white max-w-2xl mx-auto px-4">
        <CheckCircle className="h-32 w-32 mx-auto mb-8 text-green-400 animate-pulse" />
        <h1 className="text-5xl font-bold mb-6">
          Obrigado!
        </h1>
        <p className="text-2xl opacity-90">
          Já entraremos em contato!
        </p>
      </div>
    </div>
  );
};

export default ThankYou;