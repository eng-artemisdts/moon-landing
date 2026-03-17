"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, Bot, User, Settings, Minimize2, Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionIdRef = useRef<string>(
    `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Adiciona mensagem inicial quando o chat é aberto pela primeira vez
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialMessage: Message = {
        id: "initial-message",
        text: "Olá! Eu sou o OrionAI, assistente da Artemis Digital Solutions.\n\nSomos uma software house focada em IA, automações, software sob medida e e-commerce. Me conte o seu cenário para eu indicar a melhor solução técnica.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([initialMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageText = inputValue;
    setInputValue("");
    setIsTyping(true);

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_CHAT_WEBHOOK_URL;

      if (!webhookUrl) {
        throw new Error("URL do webhook não configurada");
      }

      const response = await fetch(
        webhookUrl,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chatInput: messageText,
            sessionId: sessionIdRef.current,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();

      // Processa a resposta do n8n
      // Tenta diferentes formatos de resposta comuns do n8n
      let botResponseText = "";

      if (typeof data === "string") {
        botResponseText = data;
      } else if (data.output) {
        botResponseText = data.output;
      } else if (data.response) {
        botResponseText = data.response;
      } else if (data.message) {
        botResponseText = data.message;
      } else if (data.text) {
        botResponseText = data.text;
      } else if (data.body?.output) {
        botResponseText = data.body.output;
      } else if (data.body?.response) {
        botResponseText = data.body.response;
      } else if (data.body?.message) {
        botResponseText = data.body.message;
      } else if (Array.isArray(data) && data.length > 0) {
        // Se for um array, pega o primeiro item
        const firstItem = data[0];
        botResponseText = typeof firstItem === "string"
          ? firstItem
          : firstItem.output || firstItem.response || firstItem.message || firstItem.text || JSON.stringify(firstItem);
      } else {
        // Fallback: usa a resposta completa como string
        botResponseText = JSON.stringify(data);
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText || "Desculpe, não consegui processar a resposta.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Erro ao enviar mensagem para o webhook:", error);

      // Mensagem de erro amigável
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente ou entre em contato através do formulário.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
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
      return "Desenvolvemos páginas e experiências web com foco em performance, conversão e integração com o restante da operação. Quer que eu te mostre o melhor formato para o seu caso?";
    }

    if (input.includes("ecommerce") || input.includes("loja")) {
      return "Criamos e-commerces robustos, com integração de pagamento, logística e automação do funil comercial. Posso te ajudar a mapear o escopo ideal?";
    }

    if (input.includes("chatbot") || input.includes("automação")) {
      return "Desenvolvemos automações e agentes de IA para WhatsApp e outros canais, conectados ao seu CRM e processos internos. Quer exemplos aplicados ao seu negócio?";
    }

    if (
      input.includes("prazo") ||
      input.includes("tempo") ||
      input.includes("quanto tempo")
    ) {
      return "O prazo varia com a complexidade e integrações, mas normalmente iniciamos entregas entre 2 e 8 semanas. Se quiser, te ajudo a estimar o seu cenário.";
    }

    if (
      input.includes("contato") ||
      input.includes("falar") ||
      input.includes("orçamento")
    ) {
      return "Você pode falar conosco pelo formulário da landing ou via contato@artemis.tech. Se quiser, te direciono para o formulário agora.";
    }

    if (input.includes("obrigado") || input.includes("valeu")) {
      return "Por nada! Estou aqui para ajudar. Se tiver mais alguma dúvida, é só perguntar! 😊";
    }

    return "Posso te ajudar com IA e automações, software sob medida, e-commerce e integrações. Sobre qual frente você quer conversar primeiro?";
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
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center group"
          aria-label="Abrir chat"
        >
          <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />
          <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}

      {isOpen && (
        <div className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-black border border-white/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 ${isExpanded
            ? "w-[calc(100vw-2rem)] md:w-[calc(100vw-4rem)] h-[calc(100vh-2rem)] md:h-[calc(100vh-4rem)] max-w-6xl"
            : "w-[calc(100vw-2rem)] md:w-[380px] h-[600px] max-h-[calc(100vh-2rem)]"
          }`}>
          <div className="bg-gradient-to-r from-white/10 to-white/5 p-4 border-b border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white flex items-center gap-2">
                  Artemis Assistant
                </h3>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-xs text-gray-400">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label={isExpanded ? "Minimizar" : "Maximizar"}
              >
                {isExpanded ? (
                  <Minimize2 className="w-5 h-5 text-gray-400" />
                ) : (
                  <Maximize2 className="w-5 h-5 text-gray-400" />
                )}
              </button>
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
                      <div className="bg-white/10 border border-white/20 rounded-lg p-4">
                        <p className="text-white font-semibold mb-2 flex items-center gap-2">
                          🤖 Assistente com IA
                        </p>
                        <p className="text-sm text-gray-300">
                          Este chatbot utiliza inteligência artificial para
                          fornecer respostas automáticas. As informações são
                          baseadas em nossos serviços e podem ajudar com
                          dúvidas sobre nossos produtos e serviços.
                        </p>
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

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-black to-black/95">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === "user"
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
                  className={`flex flex-col max-w-[70%] ${message.sender === "user" ? "items-end" : "items-start"
                    }`}
                >
                  <div
                    className={`rounded-2xl px-4 py-2 ${message.sender === "user"
                      ? "bg-white text-black"
                      : "bg-white/10 text-white border border-white/20"
                      }`}
                  >
                    {message.sender === "bot" ? (
                      <div className="text-sm prose prose-invert prose-sm max-w-none">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                            a: ({ href, children }) => (
                              <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 underline break-words"
                              >
                                {children}
                              </a>
                            ),
                            ul: ({ children }) => (
                              <ul className="list-disc list-inside mb-2 space-y-1 ml-2">{children}</ul>
                            ),
                            ol: ({ children }) => (
                              <ol className="list-decimal list-inside mb-2 space-y-1 ml-2">{children}</ol>
                            ),
                            li: ({ children }) => <li className="ml-2">{children}</li>,
                            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                            em: ({ children }) => <em className="italic">{children}</em>,
                            code: (props: any) => {
                              const { children, className } = props;
                              const isInline = !className || !className.includes("language-");
                              if (isInline) {
                                return (
                                  <code className="bg-white/20 px-1.5 py-0.5 rounded text-xs font-mono">
                                    {children}
                                  </code>
                                );
                              }
                              return (
                                <code className="block bg-white/10 p-3 rounded-lg overflow-x-auto text-xs font-mono mb-2">
                                  {children}
                                </code>
                              );
                            },
                            pre: ({ children }) => (
                              <pre className="bg-white/10 p-3 rounded-lg overflow-x-auto mb-2">
                                {children}
                              </pre>
                            ),
                            blockquote: ({ children }) => (
                              <blockquote className="border-l-4 border-white/30 pl-4 my-2 italic">
                                {children}
                              </blockquote>
                            ),
                            h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
                            h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
                            h3: ({ children }) => <h3 className="text-sm font-bold mb-2">{children}</h3>,
                            hr: () => <hr className="my-3 border-white/20" />,
                            table: ({ children }) => (
                              <div className="overflow-x-auto my-2">
                                <table className="min-w-full border-collapse border border-white/20">
                                  {children}
                                </table>
                              </div>
                            ),
                            thead: ({ children }) => <thead className="bg-white/10">{children}</thead>,
                            tbody: ({ children }) => <tbody>{children}</tbody>,
                            tr: ({ children }) => <tr className="border-b border-white/10">{children}</tr>,
                            th: ({ children }) => (
                              <th className="border border-white/20 px-3 py-2 text-left font-semibold">
                                {children}
                              </th>
                            ),
                            td: ({ children }) => (
                              <td className="border border-white/20 px-3 py-2">{children}</td>
                            ),
                          }}
                        >
                          {message.text}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-sm whitespace-pre-line break-words">
                        {message.text}
                      </p>
                    )}
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
              Assistente com IA • Respostas automáticas
            </p>
          </div>
        </div>
      )}
    </>
  );
}
