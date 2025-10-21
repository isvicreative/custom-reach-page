# ISVICREATIVE - Site Institucional

Site front-end moderno desenvolvido com React + Vite, apresentando a ISVICREATIVE e seus serviços de criação de sites profissionais.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool moderna e rápida
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utility-first
- **shadcn/ui** - Componentes React reutilizáveis
- **Lucide React** - Ícones SVG

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+ e npm instalados

### Passos

```bash
# 1. Clone o repositório
git clone <URL_DO_REPOSITORIO>

# 2. Entre na pasta do projeto
cd isvicreative

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador
http://localhost:8080
```

### Build para Produção

```bash
# Gera os arquivos otimizados na pasta dist/
npm run build

# Preview da build de produção
npm run preview
```

## 🔧 Como Trocar os Botões Sociais (WhatsApp / Instagram / Email)

### Método 1: Arquivo de Configuração (Recomendado)

Edite o arquivo `src/config/siteConfig.js`:

```javascript
export const siteConfig = {
  // ... outras configs
  
  social: {
    // WhatsApp: formato https://wa.me/CÓDIGO_PAÍS_DDD_NÚMERO
    whatsapp: "https://wa.me/5511999999999",
    
    // Instagram: URL completa do perfil
    instagram: "https://instagram.com/seu_usuario",
    
    // Email: endereço de e-mail
    email: "contato@seusite.com.br",
    
    // Facebook (usado no footer)
    facebook: "https://facebook.com/sua_pagina",
    
    // LinkedIn (usado no footer)
    linkedin: "https://linkedin.com/company/sua_empresa",
  },
  
  contact: {
    phone: "(11) 9 9999-9999",
    email: "contato@seusite.com.br",
    address: "Sua Cidade, Estado",
  },
};
```

**Deixe vazio (`""`) qualquer rede social que não quiser exibir.**

### Método 2: Trocar os Ícones SVG (Avançado)

Para substituir os ícones padrão por SVGs customizados, edite `src/components/SocialButtons.tsx`:

1. Localize o componente do ícone (ex: `WhatsAppIcon`)
2. Substitua o código SVG dentro do `return`
3. Mantenha as classes `className="w-5 h-5"`

Exemplo:
```tsx
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    {/* Cole aqui o path do seu SVG customizado */}
  </svg>
);
```

## 📧 Configurar Formulário de Contato

O formulário usa Formspree por padrão. Para ativar:

1. Acesse [https://formspree.io](https://formspree.io) e crie uma conta grátis
2. Crie um novo formulário e copie o endpoint
3. Edite `src/config/siteConfig.js`:

```javascript
export const siteConfig = {
  // ... outras configs
  
  formEndpoint: "https://formspree.io/f/SEU_FORM_ID_AQUI",
};
```

### Alternativa: Integrar com outro serviço

Para usar outro serviço (como EmailJS, SendGrid, etc.), edite o método `handleSubmit` em `src/components/Contact.tsx`.

## 🎨 Personalizar Cores e Design

### Cores Principais

Edite `src/index.css` (todas as cores em HSL):

```css
:root {
  --primary: 282 85% 60%;        /* Roxo principal */
  --primary-glow: 291 91% 73%;   /* Roxo brilhante */
  --background: 0 0% 4%;         /* Fundo escuro */
  --foreground: 0 0% 98%;        /* Texto branco */
  /* ... */
}
```

### Gradientes e Sombras

Também em `src/index.css`:

```css
--gradient-primary: linear-gradient(135deg, hsl(282 85% 60%), hsl(291 91% 73%));
--shadow-glow: 0 0 40px hsl(282 85% 60% / 0.3);
```

## 📱 Deploy

### Vercel (Recomendado)

1. Instale a CLI do Vercel: `npm i -g vercel`
2. Execute: `vercel`
3. Siga as instruções na tela
4. Seu site estará no ar em segundos!

### Outras Plataformas

- **Netlify**: arraste a pasta `dist/` após o build
- **GitHub Pages**: configure no repositório
- **Railway**: conecte o repositório Git

## 📁 Estrutura do Projeto

```
src/
├── assets/           # Imagens e assets
├── components/       # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── SocialButtons.tsx
├── config/
│   └── siteConfig.js # ⭐ CONFIGURAÇÃO CENTRAL
├── pages/
│   └── Index.tsx     # Página principal
└── index.css         # Estilos globais e design system
```

## 🆘 Suporte

Para dúvidas ou problemas:
- Abra uma issue no repositório
- Consulte a documentação do [React](https://react.dev) e [Vite](https://vitejs.dev)

## 📄 Licença

Este projeto é de código aberto. Sinta-se livre para usar e modificar.

---

**Desenvolvido com ❤️ usando React + Vite**
