import { Sparkles, Headphones, DollarSign, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Design Inovador",
    description: "Sites modernos, rápidos e focados na experiência do usuário.",
  },
  {
    icon: Headphones,
    title: "Suporte Dedicado",
    description: "Ajuda sempre que você precisar, com agilidade e clareza.",
  },
  {
    icon: DollarSign,
    title: "Preços Transparentes",
    description: "Planos acessíveis com clareza nos custos de criação e mensalidade.",
  },
  {
    icon: TrendingUp,
    title: "Foco em Resultados",
    description: "Seu site foi construído para converter visitantes em clientes.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Por que <span className="bg-gradient-primary bg-clip-text text-transparent">a Isvicreative?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A Tecnologia que Impulsiona Seu Crescimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary transition-all hover:shadow-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
