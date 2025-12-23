import { Facebook, Instagram, Phone, Mail, MapPin, Wrench, Settings, DollarSign, ShoppingCart, Truck } from 'lucide-react';
import { NavItem, Product, ServiceItem, SocialLink } from './types';

export const COMPANY_NAME = "RIFFERO";
export const COMPANY_SUB = "MAQUINARIA AGRÍCOLA";
// Using lh3.googleusercontent.com for reliable direct image rendering without download headers
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1VmodcOICF5kZoMJno3d-r0Gp9vdfxZPQ";

export const CONTACT_INFO = {
  address: "RP10, Matorrales, Córdoba, Argentina. CP: X5965",
  phone: "+54 9 3573 40-4878",
  email: "rifferomaquinaria@gmail.com",
  socialHandle: "@rifferomaquinarias"
};

export const NAV_ITEMS: NavItem[] = [
  { label: "INICIO", href: "#home" },
  { label: "EMPRESA", href: "#about" },
  { label: "PRODUCTOS", href: "#products" },
  { label: "SERVICIOS", href: "#services" },
  { label: "CONTACTO", href: "#contact" },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Tolvas Autodescargables",
    category: "Cosecha",
    description: "Máxima eficiencia en la logística de granos. Diseñadas para soportar las exigencias del campo argentino.",
    imageUrl: "https://www.maquinasombu.com.ar/wp-content/uploads/1.jpg",
    specifications: [
      "Capacidad: 25.000 litros",
      "Sistema de descarga: Tubo de 500mm",
      "Rodado: Alta flotación para menor compactación",
      "Ejes: Tubulares reforzados de alta resistencia"
    ],
    warranty: "2 años de garantía oficial",
    availability: "Entrega inmediata"
  },
  {
    id: 2,
    title: "Tractores Alta Potencia",
    category: "Tracción",
    description: "Potencia y tecnología para las labores más pesadas. Confort en cabina y bajo consumo de combustible.",
    imageUrl: "https://www.maquinasombu.com.ar/wp-content/uploads/DJI_20250512151744_0032_D-600x600.jpg",
    specifications: [
      "Motor: 6 cilindros Turbo Intercooler",
      "Potencia: 240 HP",
      "Transmisión: PowerShift 16x16",
      "Hidráulico: Centro cerrado load sensing"
    ],
    warranty: "1 año o 1000 horas (lo que ocurra primero)",
    availability: "Consultar stock"
  },
  {
    id: 3,
    title: "Sembradoras de Precisión",
    category: "Siembra",
    description: "Tecnología de punta para una siembra uniforme. Adaptable a diferentes tipos de suelo y semillas.",
    imageUrl: "https://www.maquinasombu.com.ar/wp-content/uploads/FOTO-1-134-600x600.jpg",
    specifications: [
      "Líneas: Configurable a 52cm o 35cm",
      "Dosificación: Neumática o mecánica de precisión",
      "Tolva: Gran capacidad con opción de monotolva",
      "Monitor de siembra: Incluido de serie"
    ],
    warranty: "1 año de garantía extendida",
    availability: "A pedido (60 días)"
  }
];

export const SERVICES: ServiceItem[] = [
  { id: 1, title: "VENTA", icon: ShoppingCart, description: "Asesoramiento especializado" },
  { id: 2, title: "TALLER", icon: Wrench, description: "Servicio técnico oficial" },
  { id: 3, title: "REPUESTOS", icon: Settings, description: "Originales y alternativos" },
  { id: 4, title: "FINANCIACIÓN", icon: DollarSign, description: "Planes a medida" },
  { id: 5, title: "LOGÍSTICA", icon: Truck, description: "Entrega en campo" },
];

export const SOCIALS: SocialLink[] = [
  { platform: "Instagram", url: "https://www.instagram.com/rifferomaquinarias/", icon: Instagram },
  { platform: "Facebook", url: "https://www.facebook.com/RifferoMaquinarias", icon: Facebook },
];