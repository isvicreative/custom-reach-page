import SocialButtons from "./SocialButtons";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Entre em{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para transformar suas ideias em realidade digital
            </p>
          </div>

          <div className="flex justify-center">
            <SocialButtons variant="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
