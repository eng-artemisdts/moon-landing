# 🌑 Artemis Digital Solutions - Landing Page Dark Mode

Landing page moderna com design **dark mode** (preto e branco), desenvolvida com Next.js, Tailwind CSS e shadcn-ui.

## ✨ Novidades da Versão Dark Mode

### 🎨 Design Atualizado
- **Tema preto e branco** elegante e profissional
- Gradientes sutis e efeitos de blur
- Animações e transições suaves
- Cards com bordas translúcidas
- Hover effects modernos

### 🎥 Seção de Vídeo
- Campo para vídeo de apresentação no Hero
- Player com overlay e botão play estilizado
- Placeholder pronto para seu vídeo

### 📝 Formulário de Contato
- Formulário completo para solicitação de orçamento
- Campos: Nome, Email, Telefone, Serviço, Orçamento, Mensagem
- Validação de campos obrigatórios
- Feedback visual ao enviar
- Animação de sucesso

### 🎯 Logo SVG Integrada
- Logo da Artemis carregada de `/assets/logo.svg`
- Otimizada com Next.js Image
- Presente no header e footer

## 🚀 Como Usar

### 1. Adicionar sua Logo

Coloque seu arquivo SVG em:
```
/public/assets/logo.svg
```

### 2. Adicionar Vídeo (Opcional)

Para adicionar um vídeo real, edite `app/page.tsx` na linha ~117:

```tsx
{/* Descomente e adicione seu vídeo */}
<video
  className="w-full h-full object-cover"
  controls
  poster="/assets/video-thumbnail.jpg"
>
  <source src="/assets/intro-video.mp4" type="video/mp4" />
</video>
```

Coloque seus arquivos em:
- `/public/assets/intro-video.mp4` (vídeo)
- `/public/assets/video-thumbnail.jpg` (thumbnail)

### 3. Configurar Formulário

O formulário está em `components/ContactForm.tsx`. Para integrar com um backend:

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  // Substitua por sua integração
  const formData = new FormData(e.currentTarget);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });
    
    if (response.ok) {
      setSubmitted(true);
    }
  } catch (error) {
    console.error('Erro ao enviar:', error);
  }
  
  setIsSubmitting(false);
};
```

## 🎨 Personalização de Cores

### Manter Preto e Branco Puro

As cores já estão configuradas em `app/globals.css`:

```css
:root {
  --background: 0 0% 0%;        /* Preto */
  --foreground: 0 0% 100%;      /* Branco */
  --primary: 0 0% 100%;         /* Branco */
  --primary-foreground: 0 0% 0%; /* Preto */
}
```

### Adicionar Tons de Cinza

Se quiser adicionar variações de cinza:

```css
:root {
  --background: 0 0% 5%;        /* Preto suave */
  --card: 0 0% 10%;             /* Cinza muito escuro */
  --muted-foreground: 0 0% 60%; /* Cinza médio */
}
```

## 📱 Estrutura das Seções

1. **Header** - Navegação fixa com logo SVG
2. **Hero com Vídeo** - Título, descrição, CTAs e player de vídeo
3. **Sobre** - Propósito, Missão e Visão em cards
4. **Valores** - Transparência, Inovação e Segurança
5. **Serviços** - 6 cards com serviços oferecidos
6. **FAQ** - Perguntas frequentes com accordion
7. **Contato** - Formulário completo + informações
8. **Footer** - Links e informações da empresa

## 🎯 Recursos Implementados

- ✅ Design dark mode (preto e branco)
- ✅ Seção de vídeo no Hero
- ✅ Logo SVG integrada
- ✅ Formulário de contato funcional
- ✅ Validação de campos
- ✅ Feedback visual
- ✅ Animações suaves
- ✅ Totalmente responsivo
- ✅ Efeitos hover modernos
- ✅ Gradientes sutis
- ✅ Bordas translúcidas

## 🔧 Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

## 📂 Estrutura de Arquivos

```
landing/
├── app/
│   ├── globals.css          # Tema dark mode
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Landing page
├── components/
│   ├── ContactForm.tsx      # Formulário de contato
│   └── ui/                  # Componentes shadcn-ui
├── public/
│   └── assets/
│       ├── logo.svg         # Sua logo aqui
│       ├── intro-video.mp4  # Vídeo (opcional)
│       └── video-thumbnail.jpg # Thumbnail (opcional)
└── lib/
    └── utils.ts             # Utilitários
```

## 🎬 Integrações Sugeridas

### Email (Resend)

```bash
npm install resend
```

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'contato@artemisdigital.com',
    to: 'seu-email@exemplo.com',
    subject: 'Nova Solicitação de Orçamento',
    html: `<p>Nome: ${data.name}</p>...`,
  });
  
  return Response.json({ success: true });
}
```

### Google Analytics

Adicione em `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
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
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 🌐 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

Ou conecte seu repositório Git no [vercel.com](https://vercel.com)

### Netlify

1. Conecte seu repositório
2. Build command: `npm run build`
3. Publish directory: `.next`

## 💡 Dicas

1. **Otimize imagens** antes de adicionar
2. **Comprima vídeos** para carregamento rápido
3. **Teste em diferentes dispositivos**
4. **Configure SSL** no deploy
5. **Adicione meta tags** para SEO

## 📞 Suporte

- Email: contato@artemisdigital.com
- Telefone: (00) 00000-0000

---

Desenvolvido com 🖤 pela Artemis Digital Solutions

