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
  Brain,
  Cpu,
  Network,
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { ValueCard } from "@/components/ValueCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ChatBot } from "@/components/ChatBot";
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
              src="/assets/logo-reduced.svg"
              alt="Artemis Digital Solutions"
              width={30}
              height={30}
            />
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
        {/* Video Background apenas no Hero */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          >
            <source src="/assets/background.mp4" type="video/mp4" />
          </video>
          {/* Overlay para melhor legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

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

            {/* Logo e Typewriter Effect no lado direito */}
            <div className="flex flex-col items-center justify-center gap-8 w-full">
              <Image
                src="/assets/logo-full-white.svg"
                alt="Artemis Digital Solutions"
                width={350}
                height={78}
                className="w-full max-w-sm"
                priority
              />
              <TypewriterEffect />
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
            <ValueCard
              icon={<Eye className="w-8 h-8 text-white" />}
              title="Transparência"
              description="Construímos relações de confiança com linguagem clara, prazos realistas e acompanhamento contínuo. Alinhamos expectativas desde o início."
              detailedDescription="Transparência é a base de qualquer parceria de sucesso. Na Artemis Digital Solutions, acreditamos que a confiança se constrói através da clareza e honestidade em todas as etapas do projeto. Desde a primeira conversa até a entrega final, mantemos você informado sobre cada decisão, progresso e desafio."
              benefits={[
                "Comunicação clara e sem jargões técnicos desnecessários",
                "Propostas detalhadas com escopo, prazos e custos bem definidos",
                "Atualizações regulares sobre o andamento do projeto",
                "Alinhamento de expectativas desde o início",
                "Documentação completa e acessível",
                "Feedback contínuo e espaço para dúvidas",
              ]}
              examples={[
                "Apresentamos propostas com linguagem simples, explicando exatamente o que será feito, por que será feito e quais resultados esperamos alcançar",
                "Durante o desenvolvimento, você recebe atualizações semanais com o progresso, próximos passos e eventuais ajustes necessários",
                "Se surgir alguma limitação técnica ou mudança de escopo, comunicamos imediatamente e discutimos as melhores alternativas",
                "Mantemos um canal direto de comunicação para que você possa tirar dúvidas a qualquer momento",
                "Ao final do projeto, entregamos toda a documentação necessária para que você tenha autonomia sobre sua solução",
              ]}
            />

            <ValueCard
              icon={<Sparkles className="w-8 h-8 text-white" />}
              title="Inovação"
              description="Buscamos constantemente novas tecnologias e abordagens que tragam ganhos reais, sempre alinhadas ao contexto e momento do cliente."
              detailedDescription="Inovação não é apenas usar a tecnologia mais recente, mas sim aplicar as melhores soluções para resolver problemas reais. Estamos sempre atentos às tendências do mercado, novas ferramentas e metodologias que possam trazer benefícios concretos para o seu negócio, mas sempre com os pés no chão e foco em resultados práticos."
              benefits={[
                "Uso de tecnologias modernas e comprovadas no mercado",
                "Soluções escaláveis que crescem com seu negócio",
                "Automações inteligentes que economizam tempo e recursos",
                "Integração com ferramentas que você já usa",
                "Experiência do usuário otimizada e intuitiva",
                "Performance e velocidade de carregamento superiores",
              ]}
              examples={[
                "Implementamos automações com IA para chatbots que entendem contexto e oferecem respostas mais naturais e úteis",
                "Utilizamos frameworks modernos como Next.js e React para criar sites rápidos, otimizados para SEO e com excelente experiência do usuário",
                "Integramos seu site com ferramentas de CRM, e-mail marketing e analytics para centralizar suas operações",
                "Aplicamos técnicas de otimização de performance que podem reduzir o tempo de carregamento em até 70%",
                "Desenvolvemos soluções mobile-first que funcionam perfeitamente em qualquer dispositivo",
              ]}
            />

            <ValueCard
              icon={<Shield className="w-8 h-8 text-white" />}
              title="Segurança"
              description="Adotamos boas práticas de proteção de dados e continuidade operacional, garantindo confidencialidade e uso responsável das informações."
              detailedDescription="Segurança é um valor inegociável. Sabemos que pequenos negócios lidam com dados sensíveis de clientes, informações financeiras e processos internos importantes. Por isso, todas as nossas soluções são desenvolvidas com foco na proteção dessas informações e na continuidade da operação, seguindo as melhores práticas do mercado e a LGPD."
              benefits={[
                "Proteção de dados pessoais conforme LGPD",
                "Criptografia de informações sensíveis",
                "Backups automáticos e recuperação de desastres",
                "Autenticação segura e controle de acesso",
                "Monitoramento proativo de vulnerabilidades",
                "Atualizações regulares de segurança",
              ]}
              examples={[
                "Implementamos SSL/HTTPS em todos os sites para criptografar a comunicação entre usuários e servidor",
                "Configuramos backups automáticos diários com armazenamento em nuvem segura, garantindo que seus dados nunca sejam perdidos",
                "Utilizamos autenticação de dois fatores (2FA) em áreas administrativas para prevenir acessos não autorizados",
                "Aplicamos validação e sanitização de dados em formulários para prevenir ataques como SQL Injection e XSS",
                "Mantemos sistemas atualizados com os últimos patches de segurança e monitoramos constantemente por vulnerabilidades",
                "Seguimos o princípio do menor privilégio, garantindo que cada usuário tenha acesso apenas ao que realmente precisa",
              ]}
            />
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
            <ServiceCard
              icon={<Globe className="w-10 h-10 text-white" />}
              title="Landing Pages"
              description="Páginas de alta conversão para captação de leads, campanhas e divulgação de produtos ou serviços específicos."
              detailedDescription="Landing pages são páginas focadas em um único objetivo: converter visitantes em leads ou clientes. Diferente de um site completo, uma landing page elimina distrações e guia o usuário para uma ação específica, como preencher um formulário, fazer uma compra ou baixar um material."
              features={[
                "Design responsivo e otimizado",
                "Formulário de captura de leads",
                "Integração com ferramentas de marketing",
                "Otimização para SEO e velocidade",
                "Call-to-actions estratégicos",
                "Provas sociais e depoimentos",
                "Analytics e rastreamento de conversões",
                "Testes A/B para otimização",
              ]}
              benefits={[
                "Aumento de até 300% na taxa de conversão comparado a páginas genéricas",
                "Captura qualificada de leads interessados no seu produto/serviço",
                "Mensagem focada e direcionada para seu público-alvo específico",
                "Menor custo por lead em campanhas de anúncios online",
                "Dados precisos sobre comportamento e interesse dos visitantes",
                "Rápida implementação para campanhas e lançamentos",
              ]}
              process={[
                "Reunião para entender seu objetivo, público-alvo e oferta",
                "Criação de wireframe e estrutura da página focada em conversão",
                "Design visual alinhado com sua identidade e otimizado para ação",
                "Desenvolvimento com foco em performance e experiência do usuário",
                "Integração com ferramentas (CRM, email marketing, analytics)",
                "Testes de funcionalidade, velocidade e responsividade",
                "Entrega com treinamento e documentação completa",
              ]}
              timeline="1-2 semanas"
              priceRange="A partir de R$ 2.500"
              idealFor={[
                "Lançamento de produtos",
                "Campanhas de marketing",
                "Captação de leads",
                "Eventos e webinars",
                "Promoções específicas",
                "Testes de mercado",
              ]}
            />

            <ServiceCard
              icon={<Globe className="w-10 h-10 text-white" />}
              title="Sites Institucionais"
              description="Presença digital profissional e responsiva, apresentando sua empresa, serviços e diferenciais de forma organizada."
              detailedDescription="Um site institucional é a casa digital da sua empresa. É onde clientes, parceiros e potenciais colaboradores conhecem sua história, valores, serviços e formas de contato. Desenvolvemos sites que transmitem profissionalismo e facilitam a jornada do visitante."
              features={[
                "Design personalizado e responsivo",
                "Páginas: Home, Sobre, Serviços, Contato",
                "Formulário de contato integrado",
                "Blog/Notícias (opcional)",
                "Galeria de fotos e vídeos",
                "Depoimentos de clientes",
                "Integração com redes sociais",
                "Otimização para mecanismos de busca (SEO)",
                "Painel administrativo intuitivo",
                "Certificado SSL incluso",
              ]}
              benefits={[
                "Credibilidade e profissionalismo para sua marca",
                "Disponibilidade 24/7 para apresentar seus serviços",
                "Alcance ampliado além da sua região geográfica",
                "Redução de custos com materiais impressos e atendimento",
                "Facilidade para clientes encontrarem informações",
                "Base sólida para estratégias de marketing digital",
                "Controle total sobre o conteúdo e atualizações",
              ]}
              process={[
                "Briefing completo sobre sua empresa, objetivos e público",
                "Definição de estrutura, páginas e funcionalidades necessárias",
                "Criação de identidade visual ou adaptação da existente",
                "Desenvolvimento das páginas com conteúdo otimizado",
                "Implementação de formulários e integrações",
                "Testes em diferentes dispositivos e navegadores",
                "Treinamento para gestão de conteúdo",
                "Lançamento e acompanhamento inicial",
              ]}
              timeline="3-4 semanas"
              priceRange="A partir de R$ 4.500"
              idealFor={[
                "Empresas B2B",
                "Prestadores de serviços",
                "Consultórios e clínicas",
                "Escritórios profissionais",
                "Pequenas empresas",
                "Startups",
              ]}
            />

            <ServiceCard
              icon={
                <div className="relative">
                  <Brain className="w-10 h-10 text-purple-400" />
                  <Cpu className="w-5 h-5 text-cyan-400 absolute -bottom-1 -right-1" />
                </div>
              }
              title="Modelos de IA Personalizados"
              description="Treinamento e fine-tuning de modelos de Inteligência Artificial com os dados específicos da sua empresa para soluções inteligentes sob medida."
              detailedDescription="Desenvolvemos e treinamos modelos de IA customizados utilizando os dados, documentos e conhecimento específicos da sua empresa. Através de fine-tuning de LLMs (Large Language Models) como GPT, Claude ou modelos open-source, criamos assistentes inteligentes que entendem profundamente o seu negócio, produtos e processos."
              features={[
                "Fine-tuning de modelos LLM (GPT, Claude, Llama)",
                "Treinamento com documentos e dados da empresa",
                "Base de conhecimento personalizada (RAG)",
                "Integração com sistemas existentes",
                "API própria para o modelo treinado",
                "Embeddings de documentos e manuais",
                "Respostas contextualizadas ao seu negócio",
                "Atualização contínua do modelo",
                "Dashboard de monitoramento e analytics",
                "Segurança e privacidade dos dados",
              ]}
              benefits={[
                "IA que entende profundamente seu negócio",
                "Respostas precisas baseadas em seus dados reais",
                "Automação de atendimento especializado",
                "Redução de tempo em consultas internas",
                "Assistente virtual com conhecimento da empresa",
                "Escalabilidade sem perder qualidade",
                "Vantagem competitiva com tecnologia de ponta",
                "ROI mensurável em produtividade",
              ]}
              process={[
                "Análise dos dados e documentos disponíveis",
                "Definição de casos de uso e objetivos",
                "Preparação e estruturação da base de conhecimento",
                "Seleção e configuração do modelo base",
                "Treinamento e fine-tuning com seus dados",
                "Testes extensivos de qualidade e precisão",
                "Integração com seus sistemas e plataformas",
                "Deploy e monitoramento contínuo",
              ]}
              timeline="4-8 semanas"
              priceRange="A partir de R$ 12.000"
              idealFor={[
                "Empresas com grande volume de documentação",
                "E-commerces com catálogos extensos",
                "Empresas de suporte técnico",
                "Instituições educacionais",
                "Empresas de consultoria",
                "Startups de tecnologia",
              ]}
            />

            <ServiceCard
              icon={<ShoppingCart className="w-10 h-10 text-white" />}
              title="E-commerces"
              description="Lojas virtuais completas com catálogo, pagamento, frete e gestão de pedidos. Venda online de forma profissional."
              detailedDescription="Um e-commerce é sua loja funcionando 24 horas por dia, 7 dias por semana. Desenvolvemos lojas virtuais completas, seguras e fáceis de gerenciar, com todas as funcionalidades necessárias para vender online com profissionalismo e eficiência."
              features={[
                "Catálogo de produtos ilimitado",
                "Carrinho de compras inteligente",
                "Múltiplas formas de pagamento",
                "Cálculo automático de frete",
                "Gestão de estoque em tempo real",
                "Painel administrativo completo",
                "Sistema de cupons e promoções",
                "Área do cliente com histórico",
                "Recuperação de carrinho abandonado",
                "Integração com marketplaces",
                "Relatórios de vendas e analytics",
                "Certificado SSL e segurança PCI",
              ]}
              benefits={[
                "Vendas 24/7 sem limitação geográfica",
                "Redução de custos operacionais com loja física",
                "Gestão centralizada de produtos, pedidos e clientes",
                "Escalabilidade para crescer conforme demanda",
                "Dados precisos sobre comportamento de compra",
                "Automação de processos de venda e pós-venda",
                "Múltiplos canais de venda integrados",
              ]}
              process={[
                "Análise do negócio, produtos e estratégia de vendas",
                "Definição de plataforma, funcionalidades e integrações",
                "Design da loja focado em conversão e experiência",
                "Cadastro inicial de produtos e categorias",
                "Configuração de pagamentos, frete e impostos",
                "Testes completos de fluxo de compra e segurança",
                "Treinamento para gestão da loja",
                "Lançamento com suporte intensivo no primeiro mês",
              ]}
              timeline="6-8 semanas"
              priceRange="A partir de R$ 8.500"
              idealFor={[
                "Varejistas",
                "Atacadistas",
                "Fabricantes",
                "Artesãos",
                "Distribuidores",
                "Revendedores",
              ]}
            />

            <ServiceCard
              icon={<Zap className="w-10 h-10 text-white" />}
              title="Automações"
              description="Automatize processos repetitivos, integre sistemas e reduza tarefas manuais. Mais eficiência e menos retrabalho."
              detailedDescription="Automação é transformar tarefas manuais e repetitivas em processos automáticos e inteligentes. Identificamos gargalos na sua operação e criamos soluções que economizam tempo, reduzem erros e liberam sua equipe para atividades estratégicas."
              features={[
                "Análise e mapeamento de processos",
                "Integração entre sistemas e ferramentas",
                "Automação de fluxos de trabalho",
                "Sincronização de dados em tempo real",
                "Notificações e alertas automáticos",
                "Geração automática de relatórios",
                "Backup e arquivamento automático",
                "Webhooks e APIs personalizadas",
              ]}
              benefits={[
                "Economia de até 20 horas semanais em tarefas repetitivas",
                "Redução de 90% em erros humanos de digitação e transferência",
                "Processos executados com consistência e precisão",
                "Informações atualizadas em tempo real entre sistemas",
                "Equipe focada em atividades que geram valor",
                "Escalabilidade sem aumento proporcional de custos",
                "ROI positivo geralmente em menos de 6 meses",
              ]}
              process={[
                "Mapeamento dos processos atuais e identificação de gargalos",
                "Análise de viabilidade técnica e retorno sobre investimento",
                "Desenho da solução de automação personalizada",
                "Desenvolvimento e configuração das integrações",
                "Testes em ambiente controlado com dados reais",
                "Implementação gradual com acompanhamento",
                "Documentação e treinamento da equipe",
                "Suporte e ajustes pós-implementação",
              ]}
              timeline="2-6 semanas"
              priceRange="A partir de R$ 3.500"
              idealFor={[
                "Equipes de vendas",
                "Atendimento ao cliente",
                "Gestão de leads",
                "Processos administrativos",
                "Marketing digital",
                "Operações repetitivas",
              ]}
            />

            <ServiceCard
              icon={<MessageSquare className="w-10 h-10 text-white" />}
              title="Chatbots de Atendimento"
              description="Atendimento automatizado em site e WhatsApp. Respostas rápidas às dúvidas mais comuns, 24 horas por dia."
              detailedDescription="Chatbots são assistentes virtuais que atendem seus clientes 24/7, respondendo dúvidas frequentes, coletando informações e direcionando para atendimento humano quando necessário. Desenvolvemos chatbots inteligentes que melhoram a experiência do cliente e otimizam sua equipe."
              features={[
                "Atendimento 24/7 automatizado",
                "Integração com WhatsApp Business",
                "Widget para site responsivo",
                "Fluxos de conversa personalizados",
                "Respostas a perguntas frequentes",
                "Coleta de dados e qualificação",
                "Transferência para atendimento humano",
                "Integração com CRM e sistemas",
                "Relatórios de interações",
                "Múltiplos idiomas (opcional)",
              ]}
              benefits={[
                "Atendimento instantâneo sem espera",
                "Redução de até 70% no volume de atendimentos humanos",
                "Disponibilidade 24 horas, inclusive finais de semana",
                "Padronização de informações fornecidas",
                "Coleta automática de dados de potenciais clientes",
                "Equipe focada em casos complexos e vendas",
                "Satisfação do cliente com respostas rápidas",
              ]}
              process={[
                "Levantamento das dúvidas mais frequentes dos clientes",
                "Definição de fluxos de conversa e respostas",
                "Configuração da personalidade e tom do chatbot",
                "Desenvolvimento e integração com canais",
                "Treinamento do bot com base de conhecimento",
                "Testes com cenários reais de atendimento",
                "Implementação com monitoramento inicial",
                "Otimização contínua baseada em interações",
              ]}
              timeline="2-4 semanas"
              priceRange="A partir de R$ 3.000"
              idealFor={[
                "E-commerces",
                "Empresas de serviços",
                "Suporte técnico",
                "Agendamentos",
                "Vendas online",
                "Atendimento em escala",
              ]}
            />

            <ServiceCard
              icon={<Wrench className="w-10 h-10 text-white" />}
              title="Soluções Sob Medida"
              description="Sistemas internos, dashboards e ferramentas específicas para necessidades únicas do seu negócio."
              detailedDescription="Cada negócio tem suas particularidades. Quando soluções prontas não atendem, desenvolvemos sistemas personalizados que se encaixam perfeitamente nos seus processos. De dashboards gerenciais a ferramentas específicas, criamos o que você precisa."
              features={[
                "Análise profunda das necessidades",
                "Arquitetura personalizada",
                "Interface intuitiva e customizada",
                "Integrações com sistemas existentes",
                "Banco de dados otimizado",
                "Controles de acesso e permissões",
                "Relatórios e dashboards visuais",
                "API para integrações futuras",
                "Documentação técnica completa",
                "Escalabilidade planejada",
              ]}
              benefits={[
                "Solução que atende exatamente suas necessidades específicas",
                "Processos otimizados para sua realidade operacional",
                "Vantagem competitiva com ferramenta exclusiva",
                "Independência de soluções genéricas limitadas",
                "Controle total sobre funcionalidades e dados",
                "Possibilidade de evolução conforme crescimento",
                "ROI mensurável e alinhado aos objetivos",
              ]}
              process={[
                "Imersão no negócio e mapeamento detalhado de requisitos",
                "Prototipagem e validação da solução proposta",
                "Definição de arquitetura e tecnologias adequadas",
                "Desenvolvimento iterativo com entregas parciais",
                "Testes de usabilidade e performance",
                "Treinamento completo da equipe",
                "Implementação com acompanhamento próximo",
                "Suporte e evolução contínua",
              ]}
              timeline="6-12 semanas"
              priceRange="Sob consulta"
              idealFor={[
                "Processos únicos",
                "Gestão interna",
                "Dashboards gerenciais",
                "Ferramentas específicas",
                "Integrações complexas",
                "Sistemas legados",
              ]}
            />
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
                  <p className="text-gray-400 text-sm">contato@artemis.tech</p>
                </div>

                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <Phone className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Telefone</h3>
                  <p className="text-gray-400 text-sm">+55 (31) 98293-6068</p>
                </div>

                <div className="p-6 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="w-8 h-8 mb-3" />
                  <h3 className="font-semibold mb-2">Localização</h3>
                  <p className="text-gray-400 text-sm">
                    Belo Horizonte, Minas Gerais, Brasil
                  </p>
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
                    Modelos de IA
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
                <li>contato@artemis.tech</li>
                <li>+55 (31) 98293-6068</li>
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

      {/* ChatBot Flutuante */}
      <ChatBot />
    </main>
  );
}
