# 📧 Integração do Formulário com Email

## Opções de Integração

### 1. Resend (Recomendado) ⭐

**Vantagens:**
- Gratuito até 3.000 emails/mês
- Fácil de usar
- Ótima documentação
- Suporte a React Email

#### Passo 1: Instalar

```bash
npm install resend
```

#### Passo 2: Obter API Key

1. Acesse [resend.com](https://resend.com)
2. Crie uma conta
3. Vá em API Keys
4. Crie uma nova chave
5. Copie a chave

#### Passo 3: Criar API Route

Crie `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message } = body;

    const data = await resend.emails.send({
      from: 'Artemis Digital <contato@artemisdigital.com>',
      to: ['seu-email@exemplo.com'],
      subject: `Nova Solicitação de Orçamento - ${service}`,
      html: `
        <h2>Nova Solicitação de Orçamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Serviço:</strong> ${service}</p>
        <p><strong>Orçamento:</strong> ${budget || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
}
```

#### Passo 4: Atualizar ContactForm

Edite `components/ContactForm.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    budget: formData.get('budget'),
    message: formData.get('message'),
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    } else {
      alert('Erro ao enviar. Tente novamente.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Erro ao enviar. Tente novamente.');
  }

  setIsSubmitting(false);
};
```

#### Passo 5: Adicionar name aos inputs

Em `components/ContactForm.tsx`, adicione `name` a cada input:

```tsx
<input
  type="text"
  name="name"  // ← Adicione
  required
  // ...
/>

<input
  type="email"
  name="email"  // ← Adicione
  required
  // ...
/>

<input
  type="tel"
  name="phone"  // ← Adicione
  required
  // ...
/>

<select
  name="service"  // ← Adicione
  required
  // ...
>

<select
  name="budget"  // ← Adicione
  // ...
>

<textarea
  name="message"  // ← Adicione
  required
  // ...
></textarea>
```

#### Passo 6: Configurar variável de ambiente

Crie `.env.local`:

```bash
RESEND_API_KEY=re_sua_chave_aqui
```

---

### 2. SendGrid

#### Passo 1: Instalar

```bash
npm install @sendgrid/mail
```

#### Passo 2: Criar API Route

Crie `app/api/contact/route.ts`:

```typescript
import sgMail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message } = body;

    const msg = {
      to: 'seu-email@exemplo.com',
      from: 'contato@artemisdigital.com',
      subject: `Nova Solicitação - ${service}`,
      html: `
        <h2>Nova Solicitação de Orçamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Serviço:</strong> ${service}</p>
        <p><strong>Orçamento:</strong> ${budget || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    };

    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar' }, { status: 500 });
  }
}
```

---

### 3. Nodemailer (Gmail)

#### Passo 1: Instalar

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

#### Passo 2: Configurar Gmail

1. Acesse [myaccount.google.com/security](https://myaccount.google.com/security)
2. Ative "Verificação em duas etapas"
3. Gere uma "Senha de app"
4. Copie a senha

#### Passo 3: Criar API Route

```typescript
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: 'seu-email@exemplo.com',
      subject: `Nova Solicitação - ${service}`,
      html: `
        <h2>Nova Solicitação de Orçamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Serviço:</strong> ${service}</p>
        <p><strong>Orçamento:</strong> ${budget || 'Não informado'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar' }, { status: 500 });
  }
}
```

#### Passo 4: Configurar .env.local

```bash
GMAIL_USER=seu-email@gmail.com
GMAIL_APP_PASSWORD=sua_senha_de_app
```

---

### 4. Webhook (Slack, Discord, etc)

#### Slack

```typescript
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    await fetch(process.env.SLACK_WEBHOOK_URL!, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🎯 Nova Solicitação de Orçamento`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*Nova Solicitação de Orçamento*\n\n*Nome:* ${name}\n*Email:* ${email}\n*Telefone:* ${phone}\n*Serviço:* ${service}\n*Mensagem:* ${message}`,
            },
          },
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao enviar' }, { status: 500 });
  }
}
```

---

### 5. Google Sheets

#### Passo 1: Instalar

```bash
npm install googleapis
```

#### Passo 2: Configurar Google Cloud

1. Acesse [console.cloud.google.com](https://console.cloud.google.com)
2. Crie um projeto
3. Ative Google Sheets API
4. Crie credenciais (Service Account)
5. Baixe o JSON de credenciais

#### Passo 3: Criar API Route

```typescript
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, budget, message } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS!),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID,
      range: 'Sheet1!A:F',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          new Date().toISOString(),
          name,
          email,
          phone,
          service,
          budget,
          message,
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao salvar' }, { status: 500 });
  }
}
```

---

## 📊 Comparação de Serviços

| Serviço | Gratuito | Fácil | Recomendado |
|---------|----------|-------|-------------|
| **Resend** | 3k/mês | ⭐⭐⭐⭐⭐ | ✅ Sim |
| **SendGrid** | 100/dia | ⭐⭐⭐⭐ | ✅ Sim |
| **Nodemailer** | Ilimitado | ⭐⭐⭐ | ⚠️ Gmail limita |
| **Webhook** | Depende | ⭐⭐⭐⭐⭐ | ✅ Para notificações |
| **Google Sheets** | Ilimitado | ⭐⭐ | ⚠️ Para backup |

---

## ✅ Checklist de Integração

- [ ] Serviço escolhido
- [ ] Dependências instaladas
- [ ] API Key obtida
- [ ] Variáveis de ambiente configuradas
- [ ] API Route criada
- [ ] ContactForm atualizado
- [ ] Atributo `name` adicionado aos inputs
- [ ] Testado localmente
- [ ] Testado em produção

---

## 🧪 Testar Localmente

```bash
# Rodar servidor
npm run dev

# Preencher formulário
# Verificar console do navegador
# Verificar terminal do Next.js
# Verificar email recebido
```

---

## 🚀 Deploy

Ao fazer deploy na Vercel:

1. Vá em Settings > Environment Variables
2. Adicione suas variáveis:
   - `RESEND_API_KEY`
   - `SENDGRID_API_KEY`
   - etc.
3. Redeploy o projeto

---

## 🆘 Problemas Comuns

### Email não chega
- Verifique spam
- Confirme API Key
- Verifique logs do serviço
- Teste com outro email

### Erro 500
- Verifique variáveis de ambiente
- Veja logs no terminal
- Confirme credenciais

### CORS Error
- API Routes do Next.js não têm CORS
- Se usar API externa, configure CORS

---

Precisa de ajuda? contato@artemisdigital.com

