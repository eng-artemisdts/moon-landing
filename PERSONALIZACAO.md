# 🎨 Guia de Personalização da Landing Page

## 📸 Como Adicionar Imagens

### 1. Logo da Empresa

**Passo 1:** Adicione sua logo em `public/logo.png` (recomendado: 200x200px, formato PNG com fundo transparente)

**Passo 2:** Abra `app/page.tsx` e localize a linha 24-28:

```tsx
// ANTES:
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
  <Code2 className="w-6 h-6 text-white" />
</div>

// DEPOIS:
<img 
  src="/logo.png" 
  alt="Artemis Digital Solutions" 
  className="w-10 h-10 object-contain"
/>
```

Repita o mesmo processo no footer (linha ~410).

### 2. Imagem Principal (Hero)

**Passo 1:** Adicione sua imagem em `public/hero-image.png` (recomendado: 1000x1000px)

**Passo 2:** Localize a linha 64-72 em `app/page.tsx`:

```tsx
// ANTES:
<div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-200 rounded-2xl flex items-center justify-center">
  <div className="text-center">
    <Code2 className="w-32 h-32 text-primary mx-auto mb-4" />
    <p className="text-sm text-muted-foreground">[Espaço para imagem/ilustração]</p>
  </div>
</div>

// DEPOIS:
<img 
  src="/hero-image.png" 
  alt="Soluções Digitais" 
  className="w-full h-auto rounded-2xl shadow-2xl"
/>
```

### 3. Ícones dos Serviços

Você pode adicionar imagens personalizadas para cada serviço:

**Passo 1:** Adicione imagens em `public/servicos/` (ex: `landing-page.png`, `ecommerce.png`)

**Passo 2:** Substitua os ícones nos cards de serviço (linha ~250):

```tsx
// ANTES:
<Globe className="w-10 h-10 text-primary mb-2" />

// DEPOIS:
<img 
  src="/servicos/landing-page.png" 
  alt="Landing Pages" 
  className="w-10 h-10 mb-2"
/>
```

---

## 🎨 Como Alterar Cores

### Método 1: Cores Pré-definidas

Edite `app/globals.css` (linhas 6-20):

```css
:root {
  /* Cor principal (azul por padrão) */
  --primary: 221.2 83.2% 53.3%;
  
  /* Para verde: */
  --primary: 142 76% 36%;
  
  /* Para roxo: */
  --primary: 262 83% 58%;
  
  /* Para laranja: */
  --primary: 25 95% 53%;
}
```

### Método 2: Gradientes

Para alterar os gradientes da página:

**Hero Section (linha 43):**
```tsx
// ANTES:
className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50"

// DEPOIS (tons de verde):
className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50"
```

**CTA Section (linha 361):**
```tsx
// ANTES:
className="py-20 px-4 bg-gradient-to-br from-primary to-blue-700 text-white"

// DEPOIS:
className="py-20 px-4 bg-gradient-to-br from-green-600 to-emerald-700 text-white"
```

---

## ✏️ Como Editar Textos

### Título Principal

Linha 48-51 em `app/page.tsx`:

```tsx
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
  Tecnologia de Qualidade para{" "}
  <span className="text-primary">Pequenos Negócios</span>
</h1>
```

### Subtítulo

Linha 52-56:

```tsx
<p className="text-xl text-muted-foreground mb-8">
  Desenvolvemos soluções digitais sob medida: sites, e-commerces, automações e chatbots. 
  Transformamos tecnologia em resultados reais para o seu negócio.
</p>
```

### Informações de Contato

Linha 372-394:

```tsx
<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
  <Mail className="w-8 h-8 mx-auto mb-3" />
  <h3 className="font-semibold mb-2">Email</h3>
  <p className="text-blue-100">SEU-EMAIL@AQUI.com</p>
</div>
```

---

## 🔧 Adicionar Novos Serviços

Para adicionar um novo card de serviço, copie e cole este template na seção de serviços (após linha 310):

```tsx
<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <SeuIcone className="w-10 h-10 text-primary mb-2" />
    <CardTitle className="text-xl">Nome do Serviço</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription className="text-base">
      Descrição detalhada do seu novo serviço aqui.
    </CardDescription>
  </CardContent>
</Card>
```

---

## 📱 Adicionar Links de Redes Sociais

No footer (linha ~410), adicione:

```tsx
<div>
  <h4 className="font-semibold mb-4">Redes Sociais</h4>
  <div className="flex space-x-4">
    <a href="https://instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer">
      <Instagram className="w-5 h-5 hover:text-primary transition-colors" />
    </a>
    <a href="https://linkedin.com/company/seu-perfil" target="_blank" rel="noopener noreferrer">
      <Linkedin className="w-5 h-5 hover:text-primary transition-colors" />
    </a>
    <a href="https://facebook.com/seu-perfil" target="_blank" rel="noopener noreferrer">
      <Facebook className="w-5 h-5 hover:text-primary transition-colors" />
    </a>
  </div>
</div>
```

Não esqueça de importar os ícones no topo do arquivo:

```tsx
import { Instagram, Linkedin, Facebook } from "lucide-react";
```

---

## 🎯 Adicionar Nova Pergunta no FAQ

Copie este template na seção de FAQ (após linha 355):

```tsx
<AccordionItem value="item-6">
  <AccordionTrigger className="px-6">
    Sua pergunta aqui?
  </AccordionTrigger>
  <AccordionContent className="px-6">
    Sua resposta detalhada aqui.
  </AccordionContent>
</AccordionItem>
```

---

## 📊 Adicionar Google Analytics

**Passo 1:** Crie uma conta no Google Analytics e obtenha seu ID (ex: G-XXXXXXXXXX)

**Passo 2:** Edite `app/layout.tsx` e adicione antes do `</head>`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

**Passo 3:** Importe o Script no topo do arquivo:

```tsx
import Script from 'next/script';
```

---

## 🌐 Configurar Domínio Personalizado

### Vercel

1. Acesse seu projeto no Vercel
2. Vá em Settings > Domains
3. Adicione seu domínio
4. Configure os DNS conforme instruções

### Outros Provedores

Consulte a documentação específica do seu provedor de hospedagem.

---

## 💡 Dicas Importantes

1. **Otimize suas imagens** antes de adicionar (use TinyPNG ou similar)
2. **Teste em diferentes dispositivos** (mobile, tablet, desktop)
3. **Mantenha consistência** nas cores e estilos
4. **Use imagens de alta qualidade** mas otimizadas
5. **Teste a velocidade** da página com Google PageSpeed Insights

---

## 📋 Checklist Final

Antes de publicar, verifique:

- [ ] Logo adicionada e aparecendo corretamente
- [ ] Todas as imagens otimizadas e carregando
- [ ] Informações de contato atualizadas
- [ ] Links funcionando (email, telefone)
- [ ] Cores alinhadas com identidade visual
- [ ] Textos revisados (sem erros de português)
- [ ] Testado em mobile e desktop
- [ ] Google Analytics configurado (se aplicável)
- [ ] Favicon personalizado
- [ ] Meta tags para SEO atualizadas

---

## 🆘 Precisa de Ajuda?

Se tiver dúvidas durante a personalização:

- Email: contato@artemisdigital.com
- Telefone: (00) 00000-0000
- Consulte o README.md para informações técnicas

---

**Tempo estimado de personalização completa:** 1-2 horas

