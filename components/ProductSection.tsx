import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { X, Settings, Calendar, Check, ArrowRight } from 'lucide-react';

const ProductSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-tight">Nuestro Legado</h2>
          <p className="text-gray-500 mt-2 text-lg">Décadas nutriendo el catálogo y pasión integrales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white group hover:shadow-xl transition-shadow duration-300 rounded-sm overflow-hidden border border-gray-100 flex flex-col">
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 uppercase rounded-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>
                <button 
                  onClick={() => handleOpenModal(product)}
                  className="text-amber-600 font-bold text-sm hover:text-amber-700 uppercase tracking-wide border-b-2 border-amber-500 pb-1 self-start transition-colors"
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">¿Buscas algo específico?</p>
            <button className="bg-gray-800 text-white px-8 py-3 font-bold hover:bg-gray-700 transition-colors rounded-sm">
                VER CATÁLOGO COMPLETO
            </button>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-gray-100 text-gray-800 transition-colors z-20 shadow-sm"
            >
                <X className="w-6 h-6" />
            </button>
            
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100 flex-shrink-0">
                <img 
                  src={selectedProduct.imageUrl} 
                  alt={selectedProduct.title} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-0 left-0 bg-amber-500 text-white px-4 py-2 font-bold uppercase tracking-wider text-sm shadow-md">
                    {selectedProduct.category}
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">{selectedProduct.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed border-b border-gray-100 pb-6 text-lg">
                  {selectedProduct.description}
                </p>
                
                <div className="space-y-8 flex-grow">
                    {/* Specifications */}
                    <div>
                        <h4 className="flex items-center font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
                            <Settings className="w-5 h-5 mr-2 text-amber-500" />
                            Especificaciones Técnicas
                        </h4>
                        <ul className="space-y-3">
                            {selectedProduct.specifications.map((spec, index) => (
                                <li key={index} className="flex items-start text-gray-600 text-sm md:text-base">
                                    <span className="w-2 h-2 bg-gray-300 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {spec}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Warranty & Availability Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                         <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="flex items-center font-bold text-gray-800 mb-2 text-xs uppercase tracking-wider">
                                <Calendar className="w-4 h-4 mr-2 text-amber-500" />
                                Garantía
                            </h4>
                            <p className="text-sm text-gray-700 font-medium">{selectedProduct.warranty}</p>
                         </div>
                         <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="flex items-center font-bold text-gray-800 mb-2 text-xs uppercase tracking-wider">
                                <Check className="w-4 h-4 mr-2 text-green-600" />
                                Disponibilidad
                            </h4>
                            <p className="text-sm text-green-800 font-medium">{selectedProduct.availability}</p>
                         </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-10 pt-6">
                    <button 
                      onClick={() => {
                        handleCloseModal();
                        window.location.href = '#contact';
                      }}
                      className="w-full bg-[#b91c1c] hover:bg-red-800 text-white font-bold py-4 rounded-sm transition-all uppercase tracking-widest text-sm shadow-lg hover:shadow-xl flex items-center justify-center group"
                    >
                        Solicitar Cotización
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSection;