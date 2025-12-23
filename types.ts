import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  specifications: string[];
  warranty: string;
  availability: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}