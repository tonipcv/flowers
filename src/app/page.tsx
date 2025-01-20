import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      {/* Logo e título */}
      <div className="text-center mb-16">
        <div className="mb-6">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-8">
            <circle cx="20" cy="20" r="19.5" stroke="white" strokeOpacity="0.3"/>
            <path d="M20 10C20 15.5228 15.5228 20 10 20" stroke="white"/>
            <path d="M20 30C20 24.4772 24.4772 20 30 20" stroke="white"/>
          </svg>
          <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl tracking-[0.2em] mb-3 uppercase">
            L'eau de Lily
          </h1>
          <p className="text-xs tracking-[0.4em] uppercase text-white/60">
            Atelier Floral
          </p>
        </div>

        {/* Linha decorativa */}
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/20 to-white/0 mx-auto mb-6"/>

        <p className="text-sm tracking-[0.3em] uppercase text-white/80 mb-16">
          Inauguração
        </p>

        {/* Countdown */}
        <CountdownTimer />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-white/10 to-transparent"/>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-t from-white/10 to-transparent"/>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40">
          © 2024 L'eau de Lily
        </p>
      </div>
    </div>
  );
}
