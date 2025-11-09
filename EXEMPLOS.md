# 💻 Exemplos de Código para Personalização

## 🎨 Paletas de Cores Prontas

### Azul Profissional (Padrão)
```css
--primary: 221.2 83.2% 53.3%;
--primary-foreground: 210 40% 98%;
```

### Verde Sustentável
```css
--primary: 142 76% 36%;
--primary-foreground: 0 0% 100%;
```

### Roxo Criativo
```css
--primary: 262 83% 58%;
--primary-foreground: 0 0% 100%;
```

### Laranja Energético
```css
--primary: 25 95% 53%;
--primary-foreground: 0 0% 100%;
```

### Vermelho Impactante
```css
--primary: 0 72% 51%;
--primary-foreground: 0 0% 100%;
```

---

## 📝 Templates de Seções Adicionais

### Seção de Depoimentos

Adicione após a seção de Serviços:

```tsx
{/* Testimonials Section */}
<section className="py-20 px-4 bg-slate-50">
  <div className="container mx-auto">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">O Que Nossos Clientes Dizem</h2>
      <p className="text-lg text-muted-foreground">
        Veja como ajudamos outros negócios a crescer
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full mr-4"></div>
            <div>
              <p className="font-semibold">Nome do Cliente</p>
              <p className="text-sm text-muted-foreground">Empresa X</p>
            </div>
          </div>
          <p className="text-muted-foreground italic">
            "A Artemis transformou nossa presença digital. Aumentamos as vendas 
            em 150% nos primeiros 3 meses!"
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full mr-4"></div>
            <div>
              <p className="font-semibold">Nome do Cliente</p>
              <p className="text-sm text-muted-foreground">Empresa Y</p>
            </div>
          </div>
          <p className="text-muted-foreground italic">
            "Profissionais competentes e atenciosos. O site ficou exatamente 
            como imaginávamos!"
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full mr-4"></div>
            <div>
              <p className="font-semibold">Nome do Cliente</p>
              <p className="text-sm text-muted-foreground">Empresa Z</p>
            </div>
          </div>
          <p className="text-muted-foreground italic">
            "A automação que implementaram economizou 20 horas por semana 
            da nossa equipe. Incrível!"
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
```

### Seção de Estatísticas

```tsx
{/* Stats Section */}
<section className="py-20 px-4 bg-primary text-white">
  <div className="container mx-auto">
    <div className="grid md:grid-cols-4 gap-8 text-center">
      <div>
        <p className="text-5xl font-bold mb-2">50+</p>
        <p className="text-blue-100">Projetos Entregues</p>
      </div>
      <div>
        <p className="text-5xl font-bold mb-2">100%</p>
        <p className="text-blue-100">Clientes Satisfeitos</p>
      </div>
      <div>
        <p className="text-5xl font-bold mb-2">5+</p>
        <p className="text-blue-100">Anos de Experiência</p>
      </div>
      <div>
        <p className="text-5xl font-bold mb-2">24/7</p>
        <p className="text-blue-100">Suporte Disponível</p>
      </div>
    </div>
  </div>
</section>
```

### Seção de Processo

```tsx
{/* Process Section */}
<section className="py-20 px-4">
  <div className="container mx-auto">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-6">Como Trabalhamos</h2>
      <p className="text-lg text-muted-foreground">
        Um processo transparente e eficiente do início ao fim
      </p>
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            1
          </div>
          <h3 className="font-bold mb-2">Descoberta</h3>
          <p className="text-sm text-muted-foreground">
            Entendemos suas necessidades e objetivos
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            2
          </div>
          <h3 className="font-bold mb-2">Planejamento</h3>
          <p className="text-sm text-muted-foreground">
            Criamos uma estratégia personalizada
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            3
          </div>
          <h3 className="font-bold mb-2">Desenvolvimento</h3>
          <p className="text-sm text-muted-foreground">
            Construímos sua solução com qualidade
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
            4
          </div>
          <h3 className="font-bold mb-2">Entrega</h3>
          <p className="text-sm text-muted-foreground">
            Lançamos e oferecemos suporte contínuo
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 🎯 Botões Personalizados

### Botão WhatsApp Flutuante

Adicione antes do `</main>` em `app/page.tsx`:

```tsx
{/* WhatsApp Float Button */}
<a
  href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
>
  <MessageSquare className="w-6 h-6" />
</a>
```

### Botão de Voltar ao Topo

```tsx
{/* Scroll to Top Button */}
<button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed bottom-6 left-6 w-12 h-12 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
>
  <ArrowUp className="w-5 h-5" />
</button>
```

Não esqueça de importar:
```tsx
import { ArrowUp } from "lucide-react";
```

---

## 📧 Formulário de Contato Funcional

Substitua a seção de contato por este formulário:

```tsx
<section id="contato" className="py-20 px-4 bg-slate-50">
  <div className="container mx-auto max-w-2xl">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
      <p className="text-lg text-muted-foreground">
        Preencha o formulário e retornaremos em até 24 horas
      </p>
    </div>

    <Card>
      <CardContent className="pt-6">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nome Completo</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Seu nome"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Telefone</label>
            <input
              type="tel"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="(00) 00000-0000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Serviço de Interesse</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
              <option>Landing Page</option>
              <option>Site Institucional</option>
              <option>E-commerce</option>
              <option>Automação</option>
              <option>Chatbot</option>
              <option>Outro</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mensagem</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Conte-nos sobre seu projeto..."
              required
            ></textarea>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Enviar Mensagem
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
</section>
```

---

## 🎨 Animações Suaves

### Fade In ao Scroll

Instale a biblioteca:
```bash
npm install framer-motion
```

Use em qualquer seção:
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>
  {/* Seu conteúdo aqui */}
</motion.div>
```

---

## 🌙 Modo Escuro (Dark Mode)

### Passo 1: Adicione o botão de toggle

```tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-accent"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </button>
  );
}
```

### Passo 2: Configure o provider

Em `app/layout.tsx`:

```tsx
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## 📊 Integração com Google Tag Manager

Em `app/layout.tsx`, adicione no `<head>`:

```tsx
<Script id="google-tag-manager" strategy="afterInteractive">
  {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-XXXXXXX');
  `}
</Script>
```

E logo após o `<body>`:

```tsx
<noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
    height="0"
    width="0"
    style={{ display: 'none', visibility: 'hidden' }}
  />
</noscript>
```

---

## 🎯 Meta Tags para SEO

Em `app/layout.tsx`, expanda o metadata:

```tsx
export const metadata: Metadata = {
  title: "Artemis Digital Solutions - Soluções Digitais para Pequenos Negócios",
  description: "Desenvolvimento de sites, landing pages, e-commerces, automações e chatbots para pequenos negócios. Tecnologia acessível e de qualidade.",
  keywords: ["desenvolvimento web", "landing page", "e-commerce", "automação", "chatbot", "pequenos negócios"],
  authors: [{ name: "Artemis Digital Solutions" }],
  openGraph: {
    title: "Artemis Digital Solutions",
    description: "Soluções Digitais para Pequenos Negócios",
    url: "https://seusite.com",
    siteName: "Artemis Digital Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artemis Digital Solutions",
    description: "Soluções Digitais para Pequenos Negócios",
    images: ["/og-image.png"],
  },
};
```

---

## 📱 Menu Mobile Responsivo

Crie um componente `components/MobileMenu.tsx`:

```tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <a href="#sobre" onClick={() => setIsOpen(false)}>Sobre</a>
            <a href="#servicos" onClick={() => setIsOpen(false)}>Serviços</a>
            <a href="#valores" onClick={() => setIsOpen(false)}>Valores</a>
            <a href="#contato" onClick={() => setIsOpen(false)}>Contato</a>
          </nav>
        </div>
      )}
    </div>
  );
}
```

---

Estes exemplos cobrem as personalizações mais comuns. Adapte conforme necessário!

