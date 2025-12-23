import React from 'react';
import { SERVICES, CONTACT_INFO, SOCIALS, LOGO_URL, COMPANY_NAME } from '../constants';
import { MapPin } from 'lucide-react';

const ServiceFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-700 text-white relative overflow-hidden">
      {/* Services Grid Overlaying the Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
           <h2 className="text-2xl font-bold text-gray-100 flex items-center">
             <span className="text-amber-500 mr-2">LA VOZ</span> DE NUESTROS SOPORTES
           </h2>
           <p className="text-gray-400 mt-1">Soluciones integrales para el productor</p>
        </div>

        {/* The Icon Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-slate-600/50 hover:bg-slate-600 p-6 rounded-sm flex flex-col items-center justify-center text-center transition-colors group border border-slate-500/30">
              <service.icon className="w-10 h-10 mb-3 text-gray-300 group-hover:text-amber-500 transition-colors" />
              <h3 className="font-bold text-sm uppercase mb-1">{service.title}</h3>
              <p className="text-xs text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Footer Info Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-600 pt-12">
          
          {/* Left Column: Contact */}
          <div>
            <div className="mb-6">
                 <img 
                    src={LOGO_URL} 
                    alt={COMPANY_NAME} 
                    className="h-16 w-auto object-contain brightness-0 invert opacity-90"
                 />
            </div>
            <div className="space-y-4 text-sm text-gray-300">
               <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 text-amber-500 flex-shrink-0" />
                  <p>{CONTACT_INFO.address}</p>
               </div>
               <div className="flex items-center">
                   <span className="font-bold text-amber-500 w-5 mr-3 text-center">T</span>
                   <p>{CONTACT_INFO.phone}</p>
               </div>
               <div className="flex items-center">
                   <span className="font-bold text-amber-500 w-5 mr-3 text-center">@</span>
                   <p>{CONTACT_INFO.email}</p>
               </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
               {SOCIALS.map((social) => (
                   <a 
                    key={social.platform} 
                    href={social.url} 
                    className="bg-white text-slate-800 p-2 rounded-full hover:bg-amber-500 hover:text-white transition-colors"
                   >
                       <social.icon className="w-5 h-5" />
                   </a>
               ))}
            </div>
          </div>

          {/* Right Column: Mini Map & Links */}
          <div className="flex flex-col md:flex-row justify-between">
              <div className="mb-8 md:mb-0">
                  <h4 className="text-sm font-bold text-gray-200 mb-4 uppercase">Enlaces Rápidos</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                      <li><a href="#" className="hover:text-amber-500">Inicio</a></li>
                      <li><a href="#" className="hover:text-amber-500">Nuestra Historia</a></li>
                      <li><a href="#" className="hover:text-amber-500">Catálogo</a></li>
                      <li><a href="#" className="hover:text-amber-500">Servicios</a></li>
                  </ul>
              </div>
              
              <div className="bg-slate-800 p-4 rounded-sm border border-slate-600 max-w-xs w-full">
                 <p className="text-xs text-gray-400 mb-2">Visítanos en nuestra sucursal de Matorrales.</p>
                 <div className="w-full h-48 bg-gray-500 rounded-sm flex items-center justify-center relative overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.9140862899544!2d-63.51344008880145!3d-31.71824177401606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ccd6e9cf59e5d3%3A0x33af24bd53d53554!2sFernando%20Riffero%20Implementos%20Agr%C3%ADcolas!5e0!3m2!1ses-419!2ses!4v1765887200208!5m2!1ses-419!2ses" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de Riffero Maquinaria"
                    ></iframe>
                 </div>
              </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Riffero Maquinaria Agrícola. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default ServiceFooter;