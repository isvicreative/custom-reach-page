import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/siteConfig";
import SocialButtons from "./SocialButtons";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Entraremos em contato em breve.",
        });
        form.reset();
      } else {
        throw new Error("Erro ao enviar");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente ou entre em contato diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Entre em{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para transformar suas ideias em realidade digital
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu e-mail"
                    required
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Seu telefone"
                    className="bg-card border-border"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    required
                    rows={5}
                    className="bg-card border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Ou fale conosco diretamente:</h3>
                <SocialButtons variant="hero" />
              </div>

              <div className="space-y-4 pt-8 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Telefone</p>
                  <p className="font-medium">{siteConfig.contact.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">E-mail</p>
                  <p className="font-medium">{siteConfig.contact.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Localização</p>
                  <p className="font-medium">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
