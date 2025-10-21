import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ISVICREATIVE
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Lar
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Lar
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Fale Conosco
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
