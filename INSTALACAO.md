# 🚀 Guia Rápido de Instalação

## Passos para rodar o projeto

### 1. Instalar dependências

```bash
npm install
```

### 2. Executar em modo de desenvolvimento

```bash
npm run dev
```

### 3. Abrir no navegador

Acesse: [http://localhost:3000](http://localhost:3000)

---

## ✅ Checklist de Personalização

Após instalar, personalize a landing page:

### Obrigatório

- [ ] Adicionar logo da empresa em `public/logo.png`
- [ ] Atualizar email de contato em `app/page.tsx`
- [ ] Atualizar telefone em `app/page.tsx`
- [ ] Adicionar imagens reais na seção Hero

### Recomendado

- [ ] Adicionar favicon em `app/favicon.ico`
- [ ] Adicionar imagens dos serviços
- [ ] Configurar domínio personalizado
- [ ] Configurar Google Analytics
- [ ] Testar em diferentes dispositivos

### Opcional

- [ ] Adicionar depoimentos de clientes
- [ ] Criar página de casos de sucesso
- [ ] Implementar formulário de contato funcional
- [ ] Adicionar chat online
- [ ] Integrar com CRM

---

## 📝 Onde encontrar o quê

| Item | Localização |
|------|-------------|
| Logo do header | `app/page.tsx` linha ~26 |
| Título principal | `app/page.tsx` linha ~48 |
| Informações de contato | `app/page.tsx` linha ~372 |
| Cores do tema | `app/globals.css` linha ~6 |
| Serviços | `app/page.tsx` linha ~250 |
| FAQ | `app/page.tsx` linha ~330 |

---

## 🎨 Dicas de Personalização

### Trocar cores principais

Edite `app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Mude estes valores */
}
```

### Adicionar nova seção

Copie uma seção existente em `app/page.tsx` e modifique o conteúdo.

### Alterar fontes

Edite `app/layout.tsx` e importe uma nova fonte do Google Fonts.

---

## 🆘 Problemas Comuns

### Erro ao instalar dependências

```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 já está em uso

```bash
# Use outra porta
npm run dev -- -p 3001
```

### Erro de TypeScript

```bash
# Verifique se o TypeScript está instalado
npm install --save-dev typescript @types/react @types/node
```

---

## 📞 Precisa de Ajuda?

- Email: contato@artemisdigital.com
- Telefone: (00) 00000-0000

---

**Tempo estimado de configuração:** 15-30 minutos

