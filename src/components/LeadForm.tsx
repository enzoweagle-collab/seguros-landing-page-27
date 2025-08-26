import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HandHeart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LeadFormProps {
  onSubmit?: (data: { name: string; phone: string }) => void;
}

export const LeadForm = ({ onSubmit }: LeadFormProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (onSubmit) {
      onSubmit({ name: name.trim(), phone: phone.trim() });
    }
    
    navigate('/obrigado');
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-proseguros-primary">
          Solicite sua cotação
        </CardTitle>
        <p className="text-muted-foreground">
          Preencha os dados e receba sua proposta personalizada
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-proseguros-primary font-medium">
              Nome completo
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-proseguros-primary/20 focus:border-proseguros-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-proseguros-primary font-medium">
              WhatsApp
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border-proseguros-primary/20 focus:border-proseguros-primary"
            />
          </div>

          <Button
            type="submit"
            variant="proseguros"
            size="lg"
            className="w-full mt-6"
            disabled={loading || !name.trim() || !phone.trim()}
          >
            <HandHeart className="mr-2 h-5 w-5" />
            {loading ? "Enviando..." : "Faça uma cotação!"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};