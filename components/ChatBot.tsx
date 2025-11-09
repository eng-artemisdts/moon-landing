"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, Bot, User, Settings } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatBot() {
  // Flag para controlar se a IA está em treinamento
  const AI_IN_TRAINING = true;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! 👋 Sou o assistente virtual da Artemis Digital Solutions. Como posso ajudá-lo hoje?",
      sender: "bot",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "⚠️ Atenção: Estou em fase de treinamento! Para um atendimento completo e personalizado, por favor utilize nosso formulário de contato na página.",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (
      input.includes("preço") ||
      input.includes("valor") ||
      input.includes("custo")
    ) {
      return "Nossos preços variam de acordo com o projeto. Para um orçamento personalizado, você pode preencher nosso formulário de contato ou me informar mais detalhes sobre o que precisa!";
    }

    if (input.includes("site") || input.includes("landing")) {
      return "Desenvolvemos sites institucionais e landing pages profissionais! Incluímos design responsivo, otimização SEO e integração com redes sociais. Quer saber mais sobre algum aspecto específico?";
    }

    if (input.includes("ecommerce") || input.includes("loja")) {
      return "Criamos e-commerces completos com catálogo de produtos, carrinho de compras, integração com meios de pagamento e painel administrativo. Posso te ajudar com mais informações?";
    }

    if (input.includes("chatbot") || input.includes("automação")) {
      return "Desenvolvemos chatbots inteligentes e automações para WhatsApp, Instagram e outras plataformas. Isso pode economizar tempo e melhorar o atendimento ao cliente. Quer conhecer casos de uso?";
    }

    if (
      input.includes("prazo") ||
      input.includes("tempo") ||
      input.includes("quanto tempo")
    ) {
      return "O prazo varia conforme a complexidade do projeto:\n• Landing Pages: 1-2 semanas\n• Sites: 2-4 semanas\n• E-commerce: 4-8 semanas\n• Automações: 1-3 semanas\n\nQue tipo de projeto você tem em mente?";
    }

    if (
      input.includes("contato") ||
      input.includes("falar") ||
      input.includes("orçamento")
    ) {
      return "Você pode entrar em contato conosco através do formulário na seção de contato da página, ou pelo email contato@artemisdigital.com. Prefere que eu te direcione para o formulário?";
    }

    if (input.includes("obrigado") || input.includes("valeu")) {
      return "Por nada! Estou aqui para ajudar. Se tiver mais alguma dúvida, é só perguntar! 😊";
    }

    return "Entendo! Posso te ajudar com informações sobre nossos serviços: sites, landing pages, e-commerces, automações e chatbots. Sobre qual você gostaria de saber mais?";
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
          aria-label="Abrir chat"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[380px] h-[600px] bg-black border border-white/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="bg-gradient-to-r from-white/10 to-white/5 p-4 border-b border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white flex items-center gap-2">
                  Artemis Assistant
                  {AI_IN_TRAINING && (
                    <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full border border-yellow-500/30">
                      Em Treinamento
                    </span>
                  )}
                </h3>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs text-gray-400">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                    <Settings className="w-5 h-5 text-gray-400" />
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-black border-white/20">
                  <DialogHeader>
                    <DialogTitle className="text-white flex items-center gap-2">
                      <Bot className="w-6 h-6" />
                      Sobre o Assistente
                    </DialogTitle>
                    <DialogDescription className="text-gray-300 space-y-3 pt-4">
                      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                        <p className="text-yellow-200 font-semibold mb-2 flex items-center gap-2">
                          ⚠️ Assistente com IA{" "}
                          {AI_IN_TRAINING && "- Em Treinamento"}
                        </p>
                        <p className="text-sm text-gray-300">
                          Este chatbot utiliza inteligência artificial para
                          fornecer respostas automáticas. As informações são
                          baseadas em nossos serviços, mas podem não cobrir
                          todos os detalhes específicos.
                        </p>
                        {AI_IN_TRAINING && (
                          <p className="text-sm text-yellow-300 mt-2 font-semibold">
                            🔄 Atualmente em fase de treinamento e aprendizado
                            contínuo.
                          </p>
                        )}
                      </div>

                      <div className="space-y-2 text-sm">
                        <p>
                          <strong className="text-white">Como funciona:</strong>
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-400">
                          <li>Respostas instantâneas sobre nossos serviços</li>
                          <li>Disponível 24/7 para dúvidas iniciais</li>
                          <li>
                            Direcionamento para contato humano quando necessário
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white/5 rounded-lg p-3 text-sm">
                        <p className="text-gray-300">
                          Para questões específicas ou orçamentos detalhados,
                          recomendamos entrar em contato através do nosso
                          formulário ou email.
                        </p>
                      </div>

                      <p className="text-xs text-gray-500 pt-2">
                        Desenvolvido por Artemis Digital Solutions
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>

          {AI_IN_TRAINING && (
            <div className="bg-yellow-500/10 border-b border-yellow-500/30 p-3">
              <div className="flex items-start gap-2 text-xs text-yellow-200">
                <span className="flex-shrink-0 mt-0.5">⚠️</span>
                <div className="flex-1">
                  <p className="font-semibold mb-1">
                    Assistente em Treinamento
                  </p>
                  <p className="text-yellow-300/80 mb-2">
                    Este assistente está aprendendo. Para um atendimento
                    completo, use nosso formulário de contato.
                  </p>
                  <Button
                    size="sm"
                    onClick={() => {
                      setIsOpen(false);
                      setTimeout(() => {
                        document
                          .getElementById("contato")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 100);
                    }}
                    className="h-7 text-xs bg-yellow-500 text-black hover:bg-yellow-400"
                  >
                    Ir para Contato
                  </Button>
                </div>
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-black to-black/95">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.sender === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === "user"
                      ? "bg-white/10"
                      : "bg-gradient-to-br from-white/20 to-white/10"
                  }`}
                >
                  {message.sender === "user" ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`flex flex-col max-w-[70%] ${
                    message.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-white text-black"
                        : "bg-white/10 text-white border border-white/20"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">
                      {message.text}
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-white/20 to-white/10">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/10 rounded-2xl px-4 py-3 border border-white/20">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></span>
                    <span
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-white/20 bg-black">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 bg-white/5 border-white/20 text-white placeholder:text-gray-500"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-white text-black hover:bg-gray-200"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-2">
              {AI_IN_TRAINING ? (
                <span className="text-yellow-400">
                  🔄 IA em Treinamento • Respostas Automáticas
                </span>
              ) : (
                "Assistente com IA • Respostas automáticas"
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
