import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Layers3,
  Bot,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { ChatBot } from "@/components/ChatBot";
import PixelBlast from "@/components/PixelBlast";

const INSTAGRAM_URL = "https://instagram.com/artemisdigital.tech";

const clients = [
  {
    id: "cliente-1",
    name: "Cliente 1",
    logo: "https://lyqcsclmauwmzipjiazs.supabase.co/storage/v1/object/public/organization-logos/866d61f4-3e76-45dd-8773-4343f8fe3b28/1765381347600.png",
  },
  {
    id: "cliente-2",
    name: "Cliente 2",
    logo: "https://lyqcsclmauwmzipjiazs.supabase.co/storage/v1/object/public/organization-logos/d6dfad00-7e50-40da-a44c-150bfc991053/1767902535411.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <Image
            src="/assets/logo-reduced.svg"
            alt="Artemis Digital Solutions"
            width={34}
            height={34}
          />
          <div className="hidden gap-8 md:flex">
            <a
              href="#sobre"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              Sobre
            </a>
            <a
              href="#solucoes"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              Soluções
            </a>
            <a
              href="#valores"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              Valores
            </a>
            <a
              href="#instagram"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              Instagram
            </a>
            <a
              href="#contato"
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              Contato
            </a>
          </div>
          <Button asChild className="bg-white text-black hover:bg-gray-200">
            <a href="#contato">Falar com especialista</a>
          </Button>
        </nav>
      </header>

      <section className="relative isolate overflow-hidden px-4 pb-24 pt-32">
        <div className="absolute inset-0 z-0 min-h-full bg-black">
          <PixelBlast
            className="absolute inset-0 z-0 min-h-full w-full"
            variant="square"
            pixelSize={4}
            color="#E8A878"
            patternScale={2}
            patternDensity={1.35}
            speed={0.4}
            transparent
            edgeFade={0.35}
            enableRipples
            rippleIntensityScale={0.85}
            rippleThickness={0.1}
            rippleSpeed={0.3}
            liquid={false}
            antialias={false}
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/45 to-black" />
        </div>

        <div className="container relative z-10 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="glass-panel mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4682A]/50 px-4 py-2 text-sm shadow-[0_0_20px_rgba(212,104,42,0.25)]">
                Software e IA para receita e operação
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Engenharia de software e IA aplicada para acelerar
                <span className="bg-gradient-to-r from-[#F0F0F5] via-[#E8A878] to-[#D4682A] bg-clip-text text-transparent">
                  {" "}
                  vendas e operação
                </span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-white/75">
                A Artemis projeta, desenvolve e evolui produtos digitais com
                foco em resultado de negócio: automação de processos, software
                sob medida, e-commerce e produto próprio para operação comercial
                com IA.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-black hover:bg-gray-200"
                >
                  <a href="#contato">
                    Fale conosco
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#D4682A]/60 bg-transparent text-white hover:bg-[#D4682A] hover:border-[#D4682A] hover:text-white"
                >
                  <a href="#solucoes">Ver soluções</a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <TypewriterEffect />
              <div className="glass-panel rounded-2xl p-6">
                <p className="text-sm text-white/65">Entendimento rápido</p>
                <h3 className="mt-2 text-2xl font-semibold">O que fazemos</h3>
                <p className="mt-3 text-white/75">
                  Construímos soluções digitais para empresas que precisam
                  escalar aquisição, atendimento e gestão com tecnologia
                  confiável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Quem é a Artemis
            </h2>
            <p className="text-lg text-white/70">
              Somos uma software house especializada em desenvolvimento de
              soluções digitais para negócios que precisam de execução técnica
              de alto nível e visão estratégica de produto.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="glass-panel border-white/20 bg-white/[0.03]">
              <CardHeader>
                <CardTitle className="text-2xl">O que fazemos</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75">
                Projetamos arquitetura, desenvolvemos software, integramos APIs,
                automatizamos fluxos e entregamos produtos prontos para
                operação.
              </CardContent>
            </Card>
            <Card className="glass-panel border-white/20 bg-white/[0.03]">
              <CardHeader>
                <CardTitle className="text-2xl">O que vendemos</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75">
                Soluções de IA e automação, software sob medida, e-commerce de
                alta performance e o Nebula, nosso CRM com IA integrado ao
                WhatsApp.
              </CardContent>
            </Card>
            <Card className="glass-panel border-white/20 bg-white/[0.03]">
              <CardHeader>
                <CardTitle className="text-2xl">Como entregamos</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75">
                Operamos com escopo claro, sprints curtas, comunicação objetiva
                e foco em métricas de impacto real para o negócio.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="solucoes" className="bg-white/[0.03] px-4 py-20">
        <div className="container mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Soluções que vendemos
            </h2>
            <p className="text-lg text-white/70">
              Foco em produtos e serviços de tecnologia para geração de receita,
              ganho de produtividade e escala operacional.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="glass-panel border-white/20 bg-white/[0.03]">
              <CardHeader>
                <Bot className="mb-4 h-10 w-10 text-white" />
                <CardTitle>IA e Automações</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75">
                Agentes, fluxos automatizados e integrações para reduzir tarefas
                repetitivas e melhorar conversão.
              </CardContent>
            </Card>

            <Card className="glass-panel border-white/20 bg-white/[0.03]">
              <CardHeader>
                <Layers3 className="mb-4 h-10 w-10 text-white" />
                <CardTitle>Software Sob Medida</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75">
                Sistemas internos, painéis e plataformas customizadas para
                processos críticos da sua operação.
              </CardContent>
            </Card>

            <Card className="glass-panel border-white/20 bg-white/[0.03]">
              <CardHeader>
                <ShoppingCart className="mb-4 h-10 w-10 text-white" />
                <CardTitle>E-commerce</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75">
                Lojas virtuais robustas, com integrações de pagamento, logística
                e operação orientada a performance.
              </CardContent>
            </Card>

            <Card className="glass-panel border-white/20 bg-white/[0.03]">
              <CardHeader>
                <ShieldCheck className="mb-4 h-10 w-10 text-white" />
                <CardTitle>Arquitetura e Evolução</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75">
                Modernização de stack, segurança, observabilidade e continuidade
                para suportar crescimento sem gargalos.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="glass-panel grid gap-8 rounded-3xl border border-white/20 p-8 lg:grid-cols-2 lg:p-12">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-white/65">
                Produto Artemis
              </p>
              <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Image
                  src="/assets/logo-nebula.png"
                  alt="Nebula - produto Artemis"
                  width={100}
                  height={100}
                  className="h-12 w-auto drop-shadow-[0_0_32px_rgba(255,255,255,0.45)]"
                  priority
                />
                <h2 className="text-4xl font-bold md:text-5xl">Nebula</h2>
              </div>
              <p className="mt-4 text-lg text-white/75 max-w-xl">
                CRM com IA + WhatsApp para treinar agentes, automatizar
                follow-up e manter pipeline comercial sempre atualizado.
              </p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>Agente treinável com contexto da empresa</li>
                <li>Habilidades para proposta, mídia e agendamento</li>
                <li>Integração com WhatsApp e visão clara de funil</li>
              </ul>
              <Button
                asChild
                className="mt-8 bg-white text-black hover:bg-gray-200"
              >
                <a
                  href="https://www.nebula.artemisdigital.tech/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Conhecer o Nebula
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="rounded-2xl border border-white/15 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.15em] text-white/60">
                Resultados esperados
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="text-3xl font-bold">+28%</p>
                  <p className="mt-1 text-sm text-white/70">
                    Conversão comercial
                  </p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="text-3xl font-bold">-42%</p>
                  <p className="mt-1 text-sm text-white/70">
                    Tempo de resposta
                  </p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="mt-1 text-sm text-white/70">
                    Atendimento assistido por IA
                  </p>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/[0.03] p-4">
                  <p className="text-3xl font-bold">1 stack</p>
                  <p className="mt-1 text-sm text-white/70">
                    Comercial centralizado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="valores" className="bg-white/[0.03] px-4 py-20">
        <div className="container mx-auto">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Nossos valores
            </h2>
            <p className="text-lg text-white/70">
              Valores claros para entregar software com previsibilidade,
              segurança e impacto de negócio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="glass-panel border-white/20 bg-white/[0.03]">
              <CardHeader>
                <CardTitle>Transparência operacional</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75">
                Escopo, prazo, riscos e evolução do projeto sempre visíveis para
                tomada de decisão rápida.
              </CardContent>
            </Card>
            <Card className="glass-panel border-white/20 bg-white/[0.03]">
              <CardHeader>
                <CardTitle>Excelência técnica</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75">
                Arquitetura sólida, código escalável e integração com sistemas
                reais do dia a dia do seu time.
              </CardContent>
            </Card>
            <Card className="glass-panel border-white/20 bg-white/[0.03]">
              <CardHeader>
                <CardTitle>Compromisso com resultado</CardTitle>
              </CardHeader>
              <CardContent className="text-white/75">
                Tecnologia orientada por metas de negócio: eficiência, conversão
                e crescimento sustentável.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Perguntas frequentes
            </h2>
            <p className="text-lg text-white/70">
              Respostas diretas para decisões técnicas e comerciais.
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="glass-panel rounded-2xl border border-white/15 bg-white/[0.03]"
          >
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="px-6 hover:no-underline">
                Em quanto tempo vocês colocam uma solução no ar?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-white/70">
                Em geral, entregamos primeira versão entre 2 e 8 semanas,
                variando pelo escopo. Trabalhamos com etapas de validação para
                acelerar valor sem sacrificar qualidade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="px-6 hover:no-underline">
                Vocês integram com ferramentas que já usamos?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-white/70">
                Sim. Integramos CRMs, ERPs, gateways de pagamento, WhatsApp,
                calendários, plataformas de marketing e APIs proprietárias.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="px-6 hover:no-underline">
                Como garantem segurança e continuidade?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-white/70">
                Aplicamos práticas de segurança desde a arquitetura, com
                controle de acesso, versionamento, backup e monitoramento para
                operação estável.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-white/10">
              <AccordionTrigger className="px-6 hover:no-underline">
                Existe suporte após entrega?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-white/70">
                Sim. Podemos assumir sustentação contínua com evolução de
                features, correções, monitoramento e roadmap técnico.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section id="instagram" className="px-4 py-20">
        <div className="container mx-auto">
          <div className="glass-panel mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-white/[0.02]">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-12 md:p-12">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">
                  Redes sociais
                </p>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Acompanhe a Artemis no Instagram
                </h2>
                <p className="mt-4 max-w-xl text-lg text-white/70">
                  Cases, bastidores de produto e conteúdo sobre software, IA e
                  operação comercial — direto do nosso dia a dia.
                </p>
                <p className="mt-4 font-medium text-white/90">
                  <span className="text-white/50">@</span>artemisdigital.tech
                </p>
              </div>
              <div className="flex flex-col items-stretch gap-4 sm:flex-row md:flex-col lg:min-w-[220px]">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] px-8 py-5 text-base font-semibold text-white shadow-[0_12px_40px_rgba(225,48,108,0.35)] transition hover:brightness-110 hover:shadow-[0_16px_48px_rgba(225,48,108,0.45)]"
                >
                  <Instagram className="h-6 w-6 shrink-0" aria-hidden />
                  Seguir no Instagram
                  <ArrowRight className="h-4 w-4 shrink-0 opacity-80 transition group-hover:translate-x-0.5" />
                </a>
                <p className="text-center text-xs text-white/45 md:text-left">
                  Abre o perfil oficial em uma nova aba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-white/[0.03] px-4 py-20">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                Vamos desenhar sua próxima solução?
              </h2>
              <p className="text-xl text-white/70">
                Conte seu cenário e retornamos com diagnóstico técnico e
                proposta de execução.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div className="space-y-6">
                <div className="glass-panel rounded-xl border border-white/15 p-6">
                  <Mail className="mb-3 h-8 w-8" />
                  <h3 className="mb-2 font-semibold">Email</h3>
                  <p className="text-sm text-white/70">
                    contato.artemisdts@gmail.com
                  </p>
                </div>
                <div className="glass-panel rounded-xl border border-white/15 p-6">
                  <Phone className="mb-3 h-8 w-8" />
                  <h3 className="mb-2 font-semibold">Telefone</h3>
                  <p className="text-sm text-white/70">+55 (31) 98833-3074</p>
                </div>
                <div className="glass-panel rounded-xl border border-white/15 p-6">
                  <MapPin className="mb-3 h-8 w-8" />
                  <h3 className="mb-2 font-semibold">Atendimento</h3>
                  <p className="text-sm text-white/70">
                    Belo Horizonte, MG • operação remota para todo Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-4 py-14">
        <div className="container mx-auto">
          <p className="mb-6 text-center text-sm uppercase tracking-[0.2em] text-white/60">
            Empresas que confiam na Artemis
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {clients.map((client) => (
              <div
                key={client.id}
                className="glass-panel flex w-full flex-col gap-4 rounded-xl border border-white/15 p-5"
              >
                <div className="flex min-h-[96px] items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    width={240}
                    height={72}
                    className="h-14 w-auto object-contain opacity-90"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 pt-14 pb-8">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-[1fr_auto_auto]">
            <div className="flex flex-col gap-4">
              <Image
                src="/assets/logo-full-white.svg"
                alt="Artemis Digital Solutions"
                width={160}
                height={36}
                className="opacity-90"
              />
              <p className="max-w-xs text-sm leading-relaxed text-white/50">
                Software house para empresas que precisam transformar tecnologia
                em crescimento previsível.
              </p>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Soluções
              </p>
              <ul className="space-y-2.5 text-sm text-white/65">
                <li>IA e automações</li>
                <li>Software sob medida</li>
                <li>E-commerce</li>
                <li>Nebula — CRM com IA</li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                Contato
              </p>
              <ul className="space-y-2.5 text-sm text-white/65">
                <li>contato.artemisdts@gmail.com</li>
                <li>+55 (31) 98833-3074</li>
                <li>Belo Horizonte, MG</li>
                <li>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/65 transition hover:text-white"
                  >
                    <Instagram className="h-4 w-4" aria-hidden />
                    @artemisdigital.tech
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
            <p className="text-xs text-white/35">
              &copy; {new Date().getFullYear()} Artemis Digital Solutions. Todos
              os direitos reservados.
            </p>
            <p className="text-xs text-white/25">Belo Horizonte · Brasil</p>
          </div>
        </div>
      </footer>

      <ChatBot />
    </main>
  );
}
