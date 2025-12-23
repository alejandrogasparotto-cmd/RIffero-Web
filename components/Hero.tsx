import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[650px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://media.istockphoto.com/id/801261066/es/foto/cosechadora-cosechadora-cosechando-trigo-en-campo-agr%C3%ADcola.jpg?s=612x612&w=0&k=20&c=lk6_2RiKWZXVohgxA9A76ugwrZV7quA-p64ZlBxjg88=" 
          alt="Cosechadora en campo de trigo" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay specifically tuned for readability over bright sky/wheat */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="max-w-3xl border-l-4 border-[#b91c1c] pl-8">
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-2xl tracking-tight">
            POTENCIA<br />
            QUE RINDE<br />
            <span className="text-amber-400">EN EL CAMPO</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 font-medium drop-shadow-lg max-w-2xl">
            Soluciones integrales en maquinaria agrícola para maximizar tu producción en cada campaña.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#products"
              className="inline-block bg-[#b91c1c] hover:bg-red-800 text-white font-bold text-lg px-10 py-4 rounded-sm shadow-xl transition-all transform hover:scale-105 uppercase tracking-wide text-center"
            >
              Ver Maquinaria
            </a>
            <a 
              href="#contact"
              className="inline-block bg-white hover:bg-gray-100 text-[#b91c1c] font-bold text-lg px-10 py-4 rounded-sm shadow-xl transition-all uppercase tracking-wide text-center"
            >
              Consultar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;