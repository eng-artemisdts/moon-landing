# 🎥 Como Adicionar Vídeo à Landing Page

## 📋 Preparação do Vídeo

### 1. Especificações Recomendadas

- **Formato**: MP4 (H.264)
- **Resolução**: 1920x1080 (Full HD) ou 1280x720 (HD)
- **Duração**: 30-90 segundos (ideal para landing page)
- **Tamanho**: Máximo 10MB (comprimir se necessário)
- **Aspect Ratio**: 16:9

### 2. Ferramentas para Comprimir Vídeo

**Online (Gratuito):**
- [Clideo](https://clideo.com/compress-video)
- [FreeConvert](https://www.freeconvert.com/video-compressor)
- [CloudConvert](https://cloudconvert.com/mp4-converter)

**Desktop:**
- **HandBrake** (Windows/Mac/Linux)
  ```bash
  # Instalar no Mac
  brew install handbrake
  ```
- **FFmpeg** (Linha de comando)
  ```bash
  # Comprimir vídeo mantendo qualidade
  ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 1M output.mp4
  ```

## 📁 Estrutura de Arquivos

Crie a pasta `assets` dentro de `public`:

```
public/
└── assets/
    ├── logo.svg              # Sua logo (já deve estar aqui)
    ├── intro-video.mp4       # Seu vídeo
    └── video-thumbnail.jpg   # Imagem de preview
```

## 🎬 Opção 1: Vídeo Local (Hospedado no Projeto)

### Passo 1: Adicionar Arquivos

1. Coloque `intro-video.mp4` em `/public/assets/`
2. Crie um thumbnail (imagem de preview) em `/public/assets/video-thumbnail.jpg`

### Passo 2: Ativar o Vídeo

Edite `app/page.tsx` na linha ~117, descomente o código do vídeo:

```tsx
{/* Vídeo Section */}
<div className="relative">
  <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden relative group">
    {/* REMOVA ou comente o placeholder */}
    {/* <div className="absolute inset-0 flex items-center justify-center bg-black/50">
      ...
    </div> */}
    
    {/* DESCOMENTE este código */}
    <video
      className="w-full h-full object-cover"
      controls
      poster="/assets/video-thumbnail.jpg"
    >
      <source src="/assets/intro-video.mp4" type="video/mp4" />
      Seu navegador não suporta vídeos HTML5.
    </video>
  </div>
</div>
```

### Passo 3: Criar Thumbnail

Se não tiver um thumbnail, extraia do vídeo:

```bash
# Com FFmpeg
ffmpeg -i intro-video.mp4 -ss 00:00:03 -vframes 1 video-thumbnail.jpg
```

Ou use um frame do vídeo manualmente no seu editor de vídeo.

## 🌐 Opção 2: Vídeo do YouTube

### Vantagens
- Não aumenta o tamanho do projeto
- Streaming otimizado
- Estatísticas de visualização

### Implementação

Substitua a seção de vídeo em `app/page.tsx`:

```tsx
{/* Vídeo do YouTube */}
<div className="relative">
  <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/SEU_VIDEO_ID?controls=1&modestbranding=1&rel=0"
      title="Vídeo de Apresentação"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
```

**Como obter o ID do vídeo:**
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- ID: `dQw4w9WgXcQ` (parte após `v=`)

## 🎨 Opção 3: Vídeo do Vimeo

```tsx
{/* Vídeo do Vimeo */}
<div className="relative">
  <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden">
    <iframe
      src="https://player.vimeo.com/video/SEU_VIDEO_ID?title=0&byline=0&portrait=0"
      className="w-full h-full"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>
```

## 🚀 Opção 4: Vídeo com Autoplay (Background)

Para vídeo de fundo sem controles:

```tsx
{/* Vídeo Background */}
<div className="relative">
  <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      poster="/assets/video-thumbnail.jpg"
    >
      <source src="/assets/intro-video.mp4" type="video/mp4" />
    </video>
    
    {/* Overlay opcional */}
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Veja Como Trabalhamos</h3>
      </div>
    </div>
  </div>
</div>
```

## 🎯 Opção 5: Modal de Vídeo (Lightbox)

Para abrir vídeo em modal ao clicar:

### Passo 1: Criar componente VideoModal

```tsx
// components/VideoModal.tsx
"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

export function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Thumbnail clicável */}
      <div
        className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden relative group cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="/assets/video-thumbnail.jpg"
          alt="Vídeo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/60 transition-colors">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-10 h-10 text-white ml-1" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="max-w-4xl w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              className="w-full h-full"
              controls
              autoPlay
            >
              <source src="/assets/intro-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}
```

### Passo 2: Usar no page.tsx

```tsx
import { VideoModal } from "@/components/VideoModal";

// Na seção Hero
<VideoModal />
```

## 📊 Comparação de Opções

| Opção | Vantagens | Desvantagens |
|-------|-----------|--------------|
| **Local** | Controle total, sem dependências | Aumenta tamanho do projeto |
| **YouTube** | Gratuito, otimizado, estatísticas | Branding do YouTube |
| **Vimeo** | Profissional, sem ads | Plano pago para remover branding |
| **Autoplay** | Impacto visual imediato | Pode irritar usuários |
| **Modal** | Não distrai, elegante | Requer clique do usuário |

## 💡 Dicas de Performance

### 1. Lazy Loading

```tsx
<video
  className="w-full h-full object-cover"
  loading="lazy"
  preload="metadata"
  controls
>
  <source src="/assets/intro-video.mp4" type="video/mp4" />
</video>
```

### 2. Múltiplos Formatos

```tsx
<video controls>
  <source src="/assets/intro-video.webm" type="video/webm" />
  <source src="/assets/intro-video.mp4" type="video/mp4" />
  Seu navegador não suporta vídeos.
</video>
```

### 3. Responsive

```tsx
<video
  className="w-full h-full object-cover"
  controls
  playsInline  // Importante para mobile
>
  <source src="/assets/intro-video.mp4" type="video/mp4" />
</video>
```

## ✅ Checklist Final

- [ ] Vídeo comprimido (< 10MB)
- [ ] Formato MP4 (H.264)
- [ ] Thumbnail criado
- [ ] Arquivos em `/public/assets/`
- [ ] Código atualizado em `page.tsx`
- [ ] Testado em desktop
- [ ] Testado em mobile
- [ ] Carregamento rápido verificado

## 🆘 Problemas Comuns

### Vídeo não aparece
- Verifique o caminho: `/assets/video.mp4` (sem `public`)
- Confirme que o arquivo existe
- Limpe o cache: `rm -rf .next && npm run dev`

### Vídeo muito grande
- Comprima com HandBrake ou FFmpeg
- Use resolução 720p ao invés de 1080p
- Considere hospedar no YouTube/Vimeo

### Não funciona no mobile
- Adicione `playsInline` ao vídeo
- Teste em diferentes navegadores
- Verifique se o formato é compatível

---

Precisa de ajuda? contato@artemisdigital.com

