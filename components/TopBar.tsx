import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const TopBar: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-600 text-xs py-2 hidden md:block border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex space-x-6">
          <span className="flex items-center hover:text-amber-600 cursor-pointer transition-colors">
            <MapPin className="w-3 h-3 mr-1" />
            {CONTACT_INFO.address}
          </span>
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center hover:text-amber-600 transition-colors">
            <Mail className="w-3 h-3 mr-1" />
            {CONTACT_INFO.email}
          </a>
        </div>
        <div className="flex space-x-6">
           <a href={`https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`} className="flex items-center font-semibold hover:text-amber-600 transition-colors">
            <Phone className="w-3 h-3 mr-1" />
            {CONTACT_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;