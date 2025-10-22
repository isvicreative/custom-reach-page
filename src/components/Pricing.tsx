import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Básico",
    price: "R$ 50",
    priceDetail: "criação",
    monthly: "R$ 37,90/mês",
    features: [
      "Site padrão",
      "Textos e contatos",
      "Design responsivo",
      "Suporte por email",
    ],
    details: [
      { label: "Alterações:", value: "1/mês" },
      { label: "Domínio:", value: "Não incluso" },
    ],
  },
  {
    name: "Padrão",
    price: "R$ 100",
    priceDetail: "criação",
    monthly: "R$ 47,90/mês",
    featured: true,
    features: [
      "Tudo do plano Básico",
      "Domínio .com.br incluso",
      "SSL Gratuito",
      "Suporte prioritário",
      "Adaptações personalizadas",
    ],
    details: [
      { label: "Alterações:", value: "Até 3/mês" },
      { label: "Domínio:", value: "Incluso (.com.br)" },
    ],
  },
  {
    name: "Prêmio",
    price: "A partir de R$ 200",
    priceDetail: "criação",
    monthly: "Mensalidade a combinar",
    features: [
      "Tudo do plano Padrão",
      "Alterações ilimitadas",
      "Personalização visual extra",
      "Suporte prioritário 24/7",
      "Otimização SEO avançada",
      "Análise integrada",
      "Design exclusivo e personalizado desenvolvido por parceiro especializado",
    ],
    details: [
      { label: "Alterações:", value: "Ilimitadas" },
      { label: "Domínio:", value: "Incluso (.com.br)" },
    ],
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Escolha o Plano{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perfeito
            </span>{" "}
            para o Seu Negócio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparência e qualidade em todos os nossos serviços
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${
                plan.featured
                  ? "border-primary shadow-glow"
                  : "border-border bg-gradient-card"
              } transition-all hover:scale-105`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-4 h-4" />
                    RECOMENDADO
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.priceDetail}
                  </span>
                </div>
                <p className="text-foreground font-medium">{plan.monthly}</p>
              </div>

              <div className="space-y-3 mb-6">
                {plan.details.map((detail, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{detail.label}</span>
                    <span className="font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6 mb-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={scrollToContact}
                className={
                  plan.featured
                    ? "w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    : "w-full bg-secondary hover:bg-primary transition-colors"
                }
              >
                Plano
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="border-foreground/20 hover:border-primary hover:text-primary"
          >
            Fale Conosco para Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
