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
import { Info } from "lucide-react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  examples: string[];
}

export function ValueCard({
  icon,
  title,
  description,
  detailedDescription,
  benefits,
  examples,
}: ValueCardProps) {
  const [open, setOpen] = useState(false);

  const handleContactClick = () => {
    setOpen(false);
    // Pequeno delay para garantir que o modal feche antes do scroll
    setTimeout(() => {
      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-white/30 transition-all group relative">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>

        {/* Botão para abrir modal */}
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white hover:text-black transition-all"
          >
            <Info className="w-4 h-4 mr-2" />
            Saiba Mais
          </Button>
        </DialogTrigger>
      </div>

      {/* Modal com informações detalhadas */}
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-black border-white/20">
        <DialogHeader>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              {icon}
            </div>
            <DialogTitle className="text-3xl font-bold text-white">
              {title}
            </DialogTitle>
          </div>
          <DialogDescription className="text-gray-300 text-base leading-relaxed">
            {detailedDescription}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Benefícios */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>
              Por que é importante?
            </h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Exemplos práticos */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
              <span className="w-1 h-6 bg-white rounded-full"></span>
              Na prática
            </h4>
            <ul className="space-y-2">
              {examples.map((example, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <span className="text-white font-bold flex-shrink-0">
                    {index + 1}.
                  </span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to action */}
          <div className="pt-4 border-t border-white/10">
            <p className="text-sm text-gray-400 text-center">
              Quer saber como aplicamos {title.toLowerCase()} no seu projeto?
            </p>
            <Button
              onClick={handleContactClick}
              className="w-full mt-3 bg-white text-black hover:bg-gray-200"
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

