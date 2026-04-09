
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
    image: 'https://images.unsplash.com/photo-1775133535500-4125751ffcb7?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
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
    id: 'barrio-carmelitas', 
    name: 'BARRIO CARMELITAS', 
    location: 'Paraguay', 
    image: 'https://images.unsplash.com/photo-1775136221022-03b47dcb7739?q=80&w=866&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    link: '#' 
  },
  { 
    id: 'ycua-sati', 
    name: 'YCUA SATI', 
    location: 'Paraguay', 
    image: 'https://images.unsplash.com/photo-1775137063785-67c5ae516676?q=80&w=3178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
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
