import { siteConfig } from "@/config/siteConfig";
import SocialButtons from "./SocialButtons";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {siteConfig.companyName}
            </h2>
            <p className="text-muted-foreground text-sm">{siteConfig.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Lar
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contato</h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">{siteConfig.contact.phone}</p>
              <p className="text-muted-foreground">{siteConfig.contact.email}</p>
              <p className="text-muted-foreground">{siteConfig.contact.address}</p>
            </div>
            <div className="mt-6">
              <SocialButtons variant="footer" />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
