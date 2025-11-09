"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/toast";
import { BudgetRange, BudgetRangeLabels } from "@/lib/n8n-service";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: BudgetRange;
  message: string;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { showToast, ToastComponent } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Envia os dados para a API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Erro ao enviar formulário');
      }

      // Console log dos dados enviados
      console.log("=== LEAD ENVIADO COM SUCESSO ===");
      console.log(data);
      console.log("================================");

      setSubmitted(true);

      // Resetar formulário após 3 segundos
      setTimeout(() => {
        setSubmitted(false);
        reset();
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      
      // Exibe mensagem de erro para o usuário
      showToast({
        message: 'Erro ao enviar formulário. Por favor, tente novamente.',
        type: 'error',
      });
    }
  };

  return (
    <>
      {ToastComponent}
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                {...register("fullName", { required: "Nome é obrigatório" })}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-white transition-all"
                placeholder="Seu nome"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email é obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido",
                    },
                  })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-white transition-all"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: "Telefone é obrigatório" })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-white transition-all"
                  placeholder="(00) 00000-0000"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Serviço de Interesse *
              </label>
              <select
                {...register("service", { required: "Selecione um serviço" })}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-white transition-all"
              >
                <option value="">Selecione um serviço</option>
                <option value="landing-page">Landing Page</option>
                <option value="website">Site Institucional</option>
                <option value="ai-model">Modelo de IA Personalizado</option>
                <option value="ecommerce">E-commerce</option>
                <option value="automation">Automação de Processos</option>
                <option value="chatbot">Chatbot de Atendimento</option>
                <option value="custom">Solução Sob Medida</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Orçamento Estimado
              </label>
              <select
                {...register("budget")}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-white transition-all"
              >
                <option value="">Selecione uma faixa</option>
                <option value={BudgetRange.UP_TO_5K}>{BudgetRangeLabels[BudgetRange.UP_TO_5K]}</option>
                <option value={BudgetRange.FROM_5K_TO_10K}>{BudgetRangeLabels[BudgetRange.FROM_5K_TO_10K]}</option>
                <option value={BudgetRange.FROM_10K_TO_20K}>{BudgetRangeLabels[BudgetRange.FROM_10K_TO_20K]}</option>
                <option value={BudgetRange.ABOVE_20K}>{BudgetRangeLabels[BudgetRange.ABOVE_20K]}</option>
                <option value={BudgetRange.NOT_DEFINED}>{BudgetRangeLabels[BudgetRange.NOT_DEFINED]}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Conte-nos sobre seu projeto *
              </label>
              <textarea
                {...register("message", {
                  required: "Mensagem é obrigatória",
                  minLength: {
                    value: 10,
                    message: "Mensagem deve ter no mínimo 10 caracteres",
                  },
                })}
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-white transition-all resize-none"
                placeholder="Descreva suas necessidades, objetivos e qualquer informação relevante sobre o projeto..."
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
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
    </>
  );
}

