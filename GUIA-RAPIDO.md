# ⚡ Guia Rápido de Personalização

## 🎯 Onde Encontrar Cada Elemento

### 📍 Logo

**Arquivo:** `app/page.tsx`

**Linhas 35-40 (Header):**
```tsx
<Image
  src="/assets/logo.svg"
  alt="Artemis Digital Solutions"
  width={40}
  height={40}
  className="w-10 h-10"
/>
```

**Linhas 506-512 (Footer):**
```tsx
<Image
  src="/assets/logo.svg"
  alt="Artemis Digital Solutions"
  width={32}
  height={32}
  className="w-8 h-8"
/>
```

**Seu arquivo deve estar em:** `/public/assets/logo.svg`

---

### 🎥 Vídeo

**Arquivo:** `app/page.tsx`

**Linhas 95-120:**
```tsx
<div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden relative group">
  {/* Placeholder atual */}
  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
    ...
  </div>
  
  {/* Descomente para ativar vídeo real */}
  {/* <video
    className="w-full h-full object-cover"
    controls
    poster="/assets/video-thumbnail.jpg"
  >
    <source src="/assets/intro-video.mp4" type="video/mp4" />
  </video> */}
</div>
```

**Arquivos necessários:**
- `/public/assets/intro-video.mp4`
- `/public/assets/video-thumbnail.jpg`

---

### 📝 Formulário de Contato

**Arquivo:** `components/ContactForm.tsx`

**Campos do formulário (linhas 40-150):**
1. Nome Completo (obrigatório)
2. Email (obrigatório)
3. Telefone (obrigatório)
4. Serviço de Interesse (obrigatório)
5. Orçamento Estimado (opcional)
6. Mensagem (obrigatório)

**Para integrar com backend (linha 13-25):**
```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  // ADICIONE SUA INTEGRAÇÃO AQUI
  // Exemplo: enviar para API
  const formData = new FormData(e.currentTarget);
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: formData,
  });

  setIsSubmitting(false);
  setSubmitted(true);
};
```

---

### 📞 Informações de Contato

**Arquivo:** `app/page.tsx`

**Email (linha 479):**
```tsx
<p className="text-gray-400 text-sm">
  contato@artemisdigital.com
</p>
```

**Telefone (linha 486):**
```tsx
<p className="text-gray-400 text-sm">(00) 00000-0000</p>
```

**Localização (linha 493):**
```tsx
<p className="text-gray-400 text-sm">Atendimento Online</p>
```

**Também no Footer (linhas 553-557):**
```tsx
<ul className="space-y-2 text-sm text-gray-400">
  <li>contato@artemisdigital.com</li>
  <li>(00) 00000-0000</li>
  <li>Atendimento Online</li>
</ul>
```

---

### 🎨 Cores (Tema Dark)

**Arquivo:** `app/globals.css`

**Linhas 6-26:**
```css
:root {
  --background: 0 0% 0%;        /* Fundo preto */
  --foreground: 0 0% 100%;      /* Texto branco */
  --primary: 0 0% 100%;         /* Cor primária branca */
  --primary-foreground: 0 0% 0%; /* Texto em botões preto */
  --card: 0 0% 5%;              /* Fundo dos cards */
  --border: 0 0% 20%;           /* Bordas */
  --muted-foreground: 0 0% 60%; /* Texto secundário cinza */
}
```

**Para ajustar tons:**
- `0%` = Preto puro
- `5%` = Preto suave
- `10%` = Cinza muito escuro
- `20%` = Cinza escuro
- `60%` = Cinza médio
- `100%` = Branco puro

---

### ✏️ Textos Principais

#### Título Hero
**Arquivo:** `app/page.tsx` | **Linha 73-80**
```tsx
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
  Tecnologia de{" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
    Qualidade
  </span>
  <br />
  para Pequenos Negócios
</h1>
```

#### Subtítulo Hero
**Linha 81-86**
```tsx
<p className="text-xl text-gray-400 mb-8 leading-relaxed">
  Desenvolvemos soluções digitais sob medida: sites, e-commerces,
  automações e chatbots. Transformamos tecnologia em resultados
  reais para o seu negócio.
</p>
```

---

### 🔗 Links do Menu

**Arquivo:** `app/page.tsx` | **Linhas 44-67**

```tsx
<a href="#sobre">Sobre</a>
<a href="#servicos">Serviços</a>
<a href="#valores">Valores</a>
<a href="#contato">Contato</a>
```

**Para adicionar novo link:**
```tsx
<a
  href="#nova-secao"
  className="text-sm font-medium hover:text-white/70 transition-colors"
>
  Nova Seção
</a>
```

---

### 📦 Serviços

**Arquivo:** `app/page.tsx` | **Linhas 250-350**

**Estrutura de cada card:**
```tsx
<Card className="border-white/10 bg-black hover:bg-white/5 transition-all group">
  <CardHeader>
    <Globe className="w-10 h-10 text-white mb-2 group-hover:scale-110 transition-transform" />
    <CardTitle className="text-xl">Nome do Serviço</CardTitle>
  </CardHeader>
  <CardContent>
    <CardDescription className="text-base text-gray-400">
      Descrição do serviço aqui.
    </CardDescription>
  </CardContent>
</Card>
```

**Para adicionar novo serviço:**
Copie um card existente e modifique o ícone, título e descrição.

**Ícones disponíveis:**
- `Globe` - Sites/Web
- `ShoppingCart` - E-commerce
- `Zap` - Automação
- `MessageSquare` - Chat
- `Wrench` - Ferramentas
- `Code2` - Desenvolvimento
- `Sparkles` - Inovação
- `Shield` - Segurança

---

### ❓ FAQ (Perguntas Frequentes)

**Arquivo:** `app/page.tsx` | **Linhas 370-440**

**Estrutura de cada pergunta:**
```tsx
<AccordionItem value="item-1" className="border-white/10">
  <AccordionTrigger className="px-6 hover:no-underline">
    Sua pergunta aqui?
  </AccordionTrigger>
  <AccordionContent className="px-6 text-gray-400">
    Sua resposta detalhada aqui.
  </AccordionContent>
</AccordionItem>
```

**Para adicionar nova pergunta:**
Copie um `AccordionItem` e mude o `value` para `item-6`, `item-7`, etc.

---

## 🚀 Comandos Rápidos

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar produção localmente
npm start

# Limpar cache
rm -rf .next node_modules
npm install
```

---

## 📱 Testar Responsividade

### No Navegador (Chrome/Firefox)
1. Pressione `F12` ou `Cmd+Option+I` (Mac)
2. Clique no ícone de dispositivo móvel
3. Teste diferentes tamanhos:
   - iPhone SE (375px)
   - iPhone 12 Pro (390px)
   - iPad (768px)
   - Desktop (1920px)

### Breakpoints do Tailwind
- `sm:` - 640px e acima
- `md:` - 768px e acima
- `lg:` - 1024px e acima
- `xl:` - 1280px e acima
- `2xl:` - 1536px e acima

---

## ✅ Checklist de Lançamento

### Antes do Deploy
- [ ] Logo adicionada em `/public/assets/logo.svg`
- [ ] Vídeo adicionado (ou placeholder removido)
- [ ] Email de contato atualizado
- [ ] Telefone atualizado
- [ ] Formulário testado
- [ ] Testado em mobile
- [ ] Testado em desktop
- [ ] Links do menu funcionando
- [ ] Todas as seções revisadas

### Após Deploy
- [ ] SSL/HTTPS ativo
- [ ] Domínio configurado
- [ ] Google Analytics (opcional)
- [ ] Velocidade testada (PageSpeed)
- [ ] Compartilhado nas redes sociais

---

## 🆘 Problemas Comuns

### Logo não aparece
```bash
# Verifique o caminho
ls public/assets/logo.svg

# Se não existir, crie a pasta
mkdir -p public/assets
```

### Cores não mudaram
```bash
# Limpe o cache
rm -rf .next
npm run dev
```

### Formulário não envia
- Verifique o console do navegador (F12)
- Veja se há erros na aba "Console"
- Configure a integração no `ContactForm.tsx`

### Página em branco
```bash
# Verifique erros de build
npm run build

# Se houver erros, leia a mensagem e corrija
```

---

## 📞 Suporte

**Email:** contato@artemisdigital.com  
**Telefone:** (00) 00000-0000

**Documentação Completa:**
- `README-DARK.md` - Guia completo
- `INSTRUCOES-VIDEO.md` - Como adicionar vídeo
- `GUIA-RAPIDO.md` - Este arquivo

---

**Tempo estimado de personalização:** 30-60 minutos

Boa sorte! 🚀

