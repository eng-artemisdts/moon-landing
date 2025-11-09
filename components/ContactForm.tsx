"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio (você pode integrar com um backend ou serviço de email)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitted(true);

    // Resetar formulário após 3 segundos
    setTimeout(() => {
      setSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-2xl">Solicitar Orçamento</CardTitle>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mensagem Enviada!</h3>
            <p className="text-muted-foreground">
              Entraremos em contato em até 24 horas.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                placeholder="Seu nome"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Serviço de Interesse *
              </label>
              <select
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              >
                <option value="">Selecione um serviço</option>
                <option value="landing-page">Landing Page</option>
                <option value="site-institucional">Site Institucional</option>
                <option value="ecommerce">E-commerce</option>
                <option value="automacao">Automação de Processos</option>
                <option value="chatbot">Chatbot de Atendimento</option>
                <option value="sob-medida">Solução Sob Medida</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Orçamento Estimado
              </label>
              <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all">
                <option value="">Selecione uma faixa</option>
                <option value="ate-5k">Até R$ 5.000</option>
                <option value="5k-10k">R$ 5.000 - R$ 10.000</option>
                <option value="10k-20k">R$ 10.000 - R$ 20.000</option>
                <option value="acima-20k">Acima de R$ 20.000</option>
                <option value="nao-definido">Ainda não definido</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Conte-nos sobre seu projeto *
              </label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-white focus:border-transparent transition-all resize-none"
                placeholder="Descreva suas necessidades, objetivos e qualquer informação relevante sobre o projeto..."
              ></textarea>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Solicitação
                  <ArrowRight className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Ao enviar este formulário, você concorda com nossa política de
              privacidade e tratamento de dados.
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
}

