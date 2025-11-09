"use client";

import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

export function TypewriterEffect() {
  return (
    <div className="relative">
      {/* Container com altura fixa para evitar layout shift */}
      <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 overflow-hidden relative group">
        {/* Background com padrão de grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Efeito de brilho animado */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 animate-pulse"></div>
        
        {/* Conteúdo central */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="text-center max-w-2xl">
            {/* Título estático */}
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Desenvolvemos
            </h3>
            
            {/* Typewriter Effect */}
            <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white min-h-[80px] flex items-center justify-center">
              <Typewriter
                options={{
                  strings: [
                    "Landing Pages",
                    "Sites Institucionais",
                    "E-commerces",
                    "Automações",
                    "Chatbots",
                    "Soluções Sob Medida",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                  cursor: "|",
                }}
              />
            </div>
            
            {/* Subtítulo */}
            <p className="text-lg md:text-xl text-gray-400 mt-6">
              Para pequenos negócios que querem crescer
            </p>
            
            {/* Indicadores visuais */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Online</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <div className="text-sm text-gray-400">
                Resposta em até 24h
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/20 rounded-tl-2xl"></div>
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-white/20 rounded-tr-2xl"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-white/20 rounded-bl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/20 rounded-br-2xl"></div>
      </div>
      
      {/* Decorative elements externos */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
    </div>
  );
}

