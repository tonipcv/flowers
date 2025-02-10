import CountdownTimer from '@/components/CountdownTimer';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#E7EDDE] text-[#545B4F] flex flex-col items-center justify-center p-8">
      {/* Logo e título */}
      <div className="text-center mb-16">
        <div className="mb-6">
          <img 
            src="/logo.webp" 
            alt="Floralier Logo" 
            width={60} 
            height={60} 
            className="mx-auto mb-8 object-contain"
          />
          <h1 className="font-['Montserrat'] font-[200] text-4xl sm:text-5xl tracking-[0.2em] mb-3 uppercase">
            Floralier
          </h1>
          <p className="text-xs tracking-[0.4em] uppercase text-[#545B4F]/60">
            LONDON
          </p>
        </div>

        {/* Linha decorativa */}
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#545B4F]/0 via-[#545B4F]/20 to-[#545B4F]/0 mx-auto mb-6"/>

        <p className="text-sm tracking-[0.3em] uppercase text-[#545B4F]/80 mb-16">
          Inauguração
        </p>

        {/* Countdown */}
        <CountdownTimer />
      </div>

      {/* Galeria de Produtos */}
      <div className="w-full max-w-6xl mx-auto mb-24">
        <h2 className="text-center text-sm tracking-[0.3em] uppercase text-[#545B4F]/80 mb-12">
          Nossas Coleções
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {[
            { name: 'Peônia', image: '/peonia.png' },
            { name: 'Purity', image: '/purity.png' },
            { name: 'Purple', image: '/purple.png' },
            { name: 'Roses', image: '/roses.png' },
            { name: 'Spring', image: '/spring.png' },
            { name: 'White', image: '/white.png' },
          ].map((product) => (
            <div key={product.name} className="group relative aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#545B4F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-[#E7EDDE] text-sm tracking-[0.2em] uppercase">
                  {product.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-[#545B4F]/10 to-transparent"/>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-t from-[#545B4F]/10 to-transparent"/>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#545B4F]/40">
          © 2024 Floralier
        </p>
      </div>
    </div>
  );
}
