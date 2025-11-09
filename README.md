# Artemis Digital Solutions - Landing Page

Landing page moderna e responsiva desenvolvida com Next.js, Tailwind CSS e shadcn-ui para a Artemis Digital Solutions.

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn-ui** - Componentes UI de alta qualidade
- **Lucide React** - Ícones modernos

## 📋 Pré-requisitos

- Node.js 18.17 ou superior
- npm, yarn, pnpm ou bun

## 🔧 Instalação

1. Clone o repositório ou navegue até a pasta do projeto:

```bash
cd /Users/gabrielmoura/Desktop/www/Artemis/Projetos/landing
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

## 🎯 Como Executar

### Modo de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Build para Produção

```bash
npm run build
npm run start
```

## 📁 Estrutura do Projeto

```
landing/
├── app/
│   ├── globals.css          # Estilos globais e configuração Tailwind
│   ├── layout.tsx           # Layout principal da aplicação
│   └── page.tsx             # Página principal (landing page)
├── components/
│   └── ui/                  # Componentes shadcn-ui
│       ├── accordion.tsx
│       ├── button.tsx
│       └── card.tsx
├── lib/
│   └── utils.ts             # Funções utilitárias
├── public/                  # Arquivos estáticos (adicione logos aqui)
├── tailwind.config.ts       # Configuração do Tailwind
├── tsconfig.json            # Configuração do TypeScript
└── package.json             # Dependências do projeto
```

## 🎨 Personalização

### Adicionar Logo

1. Adicione sua logo na pasta `public/` (ex: `public/logo.png`)
2. No arquivo `app/page.tsx`, substitua o ícone temporário:

```tsx
// Substitua isso:
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
  <Code2 className="w-6 h-6 text-white" />
</div>

// Por isso:
<img src="/logo.png" alt="Artemis Digital Solutions" className="w-10 h-10" />
```

### Adicionar Imagens

1. Adicione suas imagens na pasta `public/`
2. Substitua os placeholders no `app/page.tsx`:

```tsx
// Substitua o placeholder da seção Hero:
<div className="aspect-square bg-gradient-to-br from-primary/20 to-purple-200 rounded-2xl flex items-center justify-center">
  // ... conteúdo atual
</div>

// Por:
<img 
  src="/sua-imagem.png" 
  alt="Descrição" 
  className="w-full h-auto rounded-2xl shadow-xl"
/>
```

### Alterar Cores

As cores podem ser personalizadas no arquivo `app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Azul principal */
  --secondary: 210 40% 96.1%;    /* Cinza claro */
  /* ... outras cores */
}
```

### Atualizar Informações de Contato

No arquivo `app/page.tsx`, procure pela seção `#contato` e atualize:

- Email: `contato@artemisdigital.com`
- Telefone: `(00) 00000-0000`
- Localização

## 📱 Seções da Landing Page

1. **Header/Navegação** - Menu fixo com links de navegação
2. **Hero** - Seção principal com call-to-action
3. **Sobre** - Propósito, Missão e Visão da empresa
4. **Valores** - Transparência, Inovação e Segurança
5. **Serviços** - Portfólio completo de serviços oferecidos
6. **FAQ** - Perguntas frequentes com accordion
7. **Contato/CTA** - Formulário de contato e informações
8. **Footer** - Links úteis e informações da empresa

## 🎯 Recursos Implementados

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Navegação suave entre seções
- ✅ Componentes reutilizáveis com shadcn-ui
- ✅ Animações e transições suaves
- ✅ Otimizado para SEO
- ✅ Acessibilidade (a11y)
- ✅ Performance otimizada com Next.js

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)
2. Acesse [vercel.com](https://vercel.com)
3. Importe seu repositório
4. Configure e faça deploy

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Próximos Passos

- [ ] Adicionar logo da empresa
- [ ] Adicionar imagens reais nas seções
- [ ] Configurar formulário de contato funcional
- [ ] Integrar com Google Analytics
- [ ] Adicionar animações mais elaboradas
- [ ] Implementar modo escuro (dark mode)
- [ ] Adicionar mais depoimentos de clientes
- [ ] Criar página de blog

## 🤝 Suporte

Para dúvidas ou suporte, entre em contato:
- Email: contato@artemisdigital.com
- Telefone: (00) 00000-0000

## 📄 Licença

Este projeto foi desenvolvido para uso exclusivo da Artemis Digital Solutions.

---

Desenvolvido com ❤️ pela Artemis Digital Solutions

