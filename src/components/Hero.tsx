import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full border border-primary text-primary text-sm font-medium">
                INOVAÇÃO DIGITAL
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                ISVICREATIVE:{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Transformando Ideias
                </span>{" "}
                em Presença Digital Poderosa
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Criação de Sites Profissionais, Otimizados e Escaláveis. Comece sua jornada digital conosco.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("pricing")}
                className="bg-gradient-primary hover:opacity-90 transition-opacity group"
                size="lg"
              >
                Ver Nossos Planos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="border-foreground/20 hover:border-primary hover:text-primary"
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroImage}
                alt="Inovação Digital"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
