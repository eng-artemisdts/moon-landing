"use client";

import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, DollarSign } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  process: string[];
  timeline: string;
  priceRange: string;
  idealFor: string[];
}

export function ServiceCard({
  icon,
  title,
  description,
  detailedDescription,
  features,
  benefits,
  process,
  timeline,
  priceRange,
  idealFor,
}: ServiceCardProps) {
  const [open, setOpen] = useState(false);

  const handleContactClick = () => {
    setOpen(false);
    // Pequeno delay para garantir que o modal feche antes do scroll
    setTimeout(() => {
      document
        .getElementById("contato")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="border-white/10 bg-black hover:bg-white/5 transition-all group h-full flex flex-col">
        <div className="p-6 flex-1 flex flex-col">
          <div className="mb-4 group-hover:scale-110 transition-transform">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-gray-400 text-base mb-6 flex-1">{description}</p>

          {/* Botão para abrir modal */}
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white hover:text-black transition-all"
            >
              Ver Detalhes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </DialogTrigger>
        </div>
      </div>

      {/* Modal com informações detalhadas */}
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto bg-black border-white/20">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
              {icon}
            </div>
            <div>
              <DialogTitle className="text-3xl font-bold text-white mb-1">
                {title}
              </DialogTitle>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {timeline}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  {priceRange}
                </span>
              </div>
            </div>
          </div>
          <DialogDescription className="text-gray-300 text-base leading-relaxed">
            {detailedDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* O que está incluído */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>O que está
              incluído
            </h4>
            <ul className="grid md:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefícios */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>
              Benefícios para seu negócio
            </h4>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300 bg-white/5 p-3 rounded-lg"
                >
                  <span className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Processo */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>
              Como funciona
            </h4>
            <div className="space-y-3">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 text-gray-300"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal para */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-semibold text-white mb-4">
              Ideal para:
            </h4>
            <div className="flex flex-wrap gap-2">
              {idealFor.map((item, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm text-white border border-white/20"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-4 border-t border-white/10 space-y-3">
            <p className="text-center text-gray-400">
              Pronto para começar seu projeto de{" "}
              <strong className="text-white">{title}</strong>?
            </p>
            <div className="flex gap-3">
              <Button
                onClick={handleContactClick}
                className="flex-1 bg-white text-black hover:bg-gray-200"
              >
                Solicitar Orçamento
              </Button>
              <Button
                onClick={handleContactClick}
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white hover:text-black"
              >
                Tirar Dúvidas
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
