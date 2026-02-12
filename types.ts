
export interface Property {
  id: string;
  name: string;
  location: string;
  image: string;
  link: string;
}

export interface Stat {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
