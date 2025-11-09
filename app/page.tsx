import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sparkles,
  Shield,
  Eye,
  Target,
  Heart,
  Globe,
  ShoppingCart,
  Zap,
  MessageSquare,
  Wrench,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Play,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {/* Logo SVG */}
            <Image
              src="/assets/logo.svg"
              alt="Artemis Digital Solutions"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="font-bold text-xl">Artemis Digital Solutions</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#sobre"
              className="text-sm font-medium hover:text-white/70 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#servicos"
              className="text-sm font-medium hover:text-white/70 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#valores"
              className="text-sm font-medium hover:text-white/70 transition-colors"
            >
              Valores
            </a>
            <a
              href="#contato"
              className="text-sm font-medium hover:text-white/70 transition-colors"
            >
              Contato
            </a>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black"
          >
            <a href="#contato">Fale Conosco</a>
          </Button>
        </nav>
      </header>

      {/* Hero Section com Vídeo */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm mb-6 border border-white/20">
                ✨ Transformando Ideias em Realidade Digital
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Tecnologia de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Qualidade
                </span>
                <br />
                para Pequenos Negócios
              </h1>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                Desenvolvemos soluções digitais sob medida: sites, e-commerces,
                automações e chatbots. Transformamos tecnologia em resultados
                reais para o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-black hover:bg-gray-200"
                >
                  <a href="#contato">
                    Solicitar Orçamento
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  <a href="#servicos">Conhecer Serviços</a>
                </Button>
              </div>
            </div>

            {/* Vídeo Section */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden relative group">
                {/* Placeholder para vídeo - substitua o src pelo seu vídeo */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <p className="text-sm text-gray-300">
                      Assista nosso vídeo de apresentação
                    </p>
                  </div>
                </div>
                {/* Descomente e adicione seu vídeo aqui */}
                {/* <video
                  className="w-full h-full object-cover"
                  controls
                  poster="/assets/video-thumbnail.jpg"
                >
                  <source src="/assets/intro-video.mp4" type="video/mp4" />
                </video> */}
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a Artemis Digital Solutions
            </h2>
            <p className="text-lg text-gray-400">
              Somos uma empresa de desenvolvimento de software dedicada a
              oferecer soluções tecnológicas completas para pequenos negócios
              que desejam dar o próximo passo na sua jornada digital.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all">
              <CardHeader>
                <Target className="w-12 h-12 text-white mb-4" />
                <CardTitle>Propósito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Democratizar o acesso à tecnologia de qualidade para pequenos
                  negócios, permitindo que empreendedores possam competir em
                  igualdade de condições no ambiente digital.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all">
              <CardHeader>
                <Heart className="w-12 h-12 text-white mb-4" />
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Desenvolver soluções digitais sob medida que tornem o dia a
                  dia dos nossos clientes mais simples, organizado e eficiente,
                  com impacto real na operação.
                </p>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all">
              <CardHeader>
                <Eye className="w-12 h-12 text-white mb-4" />
                <CardTitle>Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Ser reconhecida como a parceira tecnológica preferida dos
                  pequenos negócios, consolidando-nos como referência em
                  soluções digitais transparentes e inovadoras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section id="valores" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-400">
              Os valores que orientam todas as nossas decisões e a forma como
              nos relacionamos com clientes, parceiros e colaboradores.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparência</h3>
              <p className="text-gray-400">
                Construímos relações de confiança com linguagem clara, prazos
                realistas e acompanhamento contínuo. Alinhamos expectativas
                desde o início.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Inovação</h3>
              <p className="text-gray-400">
                Buscamos constantemente novas tecnologias e abordagens que
                tragam ganhos reais, sempre alinhadas ao contexto e momento do
                cliente.
              </p>
            </div>

            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Segurança</h3>
              <p className="text-gray-400">
                Adotamos boas práticas de proteção de dados e continuidade
                operacional, garantindo confidencialidade e uso responsável das
                informações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-400">
              Soluções modulares que crescem com o seu negócio. Comece com o que
              faz sentido agora e evolua conforme suas necessidades.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="border-white/10 bg-black hover:bg-white/5 transition-all group">
              <CardHeader>
                <Globe className="w-10 h-10 text-white mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl">Landing Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">
                  Páginas de alta conversão para captação de leads, campanhas e
                  divulgação de produtos ou serviços específicos.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-black hover:bg-white/5 transition-all group">
              <CardHeader>
                <Globe className="w-10 h-10 text-white mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl">Sites Institucionais</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">
                  Presença digital profissional e responsiva, apresentando sua
                  empresa, serviços e diferenciais de forma organizada.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-black hover:bg-white/5 transition-all group">
              <CardHeader>
                <ShoppingCart className="w-10 h-10 text-white mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl">E-commerces</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">
                  Lojas virtuais completas com catálogo, pagamento, frete e
                  gestão de pedidos. Venda online de forma profissional.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-black hover:bg-white/5 transition-all group">
              <CardHeader>
                <Zap className="w-10 h-10 text-white mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl">Automações</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">
                  Automatize processos repetitivos, integre sistemas e reduza
                  tarefas manuais. Mais eficiência e menos retrabalho.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-black hover:bg-white/5 transition-all group">
              <CardHeader>
                <MessageSquare className="w-10 h-10 text-white mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl">
                  Chatbots de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">
                  Atendimento automatizado em site e WhatsApp. Respostas rápidas
                  às dúvidas mais comuns, 24 horas por dia.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-white/10 bg-black hover:bg-white/5 transition-all group">
              <CardHeader>
                <Wrench className="w-10 h-10 text-white mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-xl">Soluções Sob Medida</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">
                  Sistemas internos, dashboards e ferramentas específicas para
                  necessidades únicas do seu negócio.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-gray-400">
              Tire suas dúvidas sobre nossos serviços e forma de trabalho
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full bg-white/5 rounded-lg border border-white/10"
          >
            <AccordionItem value="item-1" className="border-white/10">
              <AccordionTrigger className="px-6 hover:no-underline">
                Como funciona o processo de desenvolvimento?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-400">
                Começamos com uma conversa para entender suas necessidades e
                objetivos. Depois apresentamos uma proposta com escopo, prazo e
                investimento. Aprovado, iniciamos o desenvolvimento com
                acompanhamento contínuo e entregas parciais.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-white/10">
              <AccordionTrigger className="px-6 hover:no-underline">
                Quanto tempo leva para desenvolver um site?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-400">
                Depende da complexidade. Uma landing page pode ficar pronta em
                1-2 semanas, um site institucional em 3-4 semanas, e um
                e-commerce em 6-8 semanas. Definimos prazos realistas na
                proposta.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-white/10">
              <AccordionTrigger className="px-6 hover:no-underline">
                Vocês oferecem suporte após a entrega?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-400">
                Sim! Oferecemos período de garantia para correções e também
                planos de manutenção mensal para atualizações, melhorias e
                suporte contínuo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-white/10">
              <AccordionTrigger className="px-6 hover:no-underline">
                Preciso ter conhecimento técnico para usar as soluções?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-400">
                Não! Desenvolvemos soluções pensando na simplicidade de uso.
                Além disso, oferecemos treinamento e documentação para que você
                e sua equipe possam usar tudo com autonomia.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-white/10">
              <AccordionTrigger className="px-6 hover:no-underline">
                Qual o investimento necessário?
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-400">
                O investimento varia conforme a complexidade e funcionalidades
                desejadas. Trabalhamos com orçamentos personalizados e
                transparentes. Entre em contato para conversarmos sobre seu
                projeto e apresentarmos uma proposta.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="py-20 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Pronto para Transformar seu Negócio?
              </h2>
              <p className="text-xl text-gray-400">
                Preencha o formulário abaixo e entraremos em contato em até 24
                horas para discutir seu projeto.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>

              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <Mail className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-400 text-sm">
                    contato@artemisdigital.com
                  </p>
                </div>

                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <Phone className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Telefone</h3>
                  <p className="text-gray-400 text-sm">(00) 00000-0000</p>
                </div>

                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Localização</h3>
                  <p className="text-gray-400 text-sm">Atendimento Online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/assets/logo.svg"
                  alt="Artemis Digital Solutions"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="font-bold">Artemis Digital</span>
              </div>
              <p className="text-sm text-gray-400">
                Soluções digitais para pequenos negócios que querem crescer.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Landing Pages
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Sites Institucionais
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    E-commerces
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Automações
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="#sobre"
                    className="hover:text-white transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#valores"
                    className="hover:text-white transition-colors"
                  >
                    Valores
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>contato@artemisdigital.com</li>
                <li>(00) 00000-0000</li>
                <li>Atendimento Online</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Artemis Digital Solutions. Todos
              os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
