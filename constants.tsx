
import { Property, Stat, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#' },
  { label: 'Acerca de', href: '#acerca' },
  { label: 'Inversiones', href: '#inversiones' },
  { label: 'Referidos', href: '#referidos' },
  { label: 'Club de Inversores', href: '#club' },
  { label: 'Contacto', href: '#contacto' },
];

export const PROPERTIES: Property[] = [
  { 
    id: 'asuncion-centro', 
    name: 'ASUNCIÓN CENTRO', 
    location: 'Paraguay', 
    image: 'https://images.unsplash.com/photo-1594411130099-2313620953c8?auto=format&fit=crop&q=80&w=800', 
    link: '#' 
  },
  { 
    id: 'villa-morra', 
    name: 'VILLA MORRA', 
    location: 'Paraguay', 
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800', 
    link: '#' 
  },
  { 
    id: 'san-bernardino', 
    name: 'SAN BERNARDINO', 
    location: 'Paraguay', 
    image: 'https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800', 
    link: '#' 
  },
  { 
    id: 'santa-teresa', 
    name: 'AV. SANTA TERESA', 
    location: 'Paraguay', 
    image: 'https://images.unsplash.com/photo-1542362567-b051c63b975b?auto=format&fit=crop&q=80&w=800', 
    link: '#' 
  }
];

export const STATS: Stat[] = [
  { label: 'Acompañamiento Estratégico', value: '100', suffix: '%' },
  { label: 'Experiencia Comercial', value: '8', suffix: ' AÑOS' },
  { label: 'Aliados Internacionales', value: '10', prefix: '+', suffix: ' PAÍSES' },
];

export const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000'
];
