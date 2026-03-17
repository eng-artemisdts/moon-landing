"use client";

import Typewriter from "typewriter-effect";

export function TypewriterEffect() {
  return (
    <div className="relative w-full">
      <div className="glass-panel relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-2xl border border-white/20 p-8">
        <div className="relative z-10 text-center max-w-2xl">
          <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">Entregamos</h3>

          <div className="text-4xl md:text-5xl font-bold text-white min-h-[80px] flex items-center justify-center">
            <Typewriter
              options={{
                strings: [
                  "IA aplicada ao comercial",
                  "Automações ponta a ponta",
                  "Software sob medida",
                  "E-commerce escalável",
                  "Integrações críticas de negócio",
                  "Arquitetura para crescimento",
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
                cursor: "|",
              }}
            />
          </div>

          <p className="text-lg md:text-xl text-gray-400 mt-6">
            Tecnologia com clareza de escopo e foco em resultado
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-400">Time ativo</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="text-sm text-gray-400">
              Diagnóstico inicial em até 24h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

