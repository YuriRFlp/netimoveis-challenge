import { Dispatch, ReactNode, SetStateAction } from "react";

export interface GlobalProviderData {
  children?: ReactNode;
};

export interface GlobalContextData {
  isMobile: boolean;
  showMobileMenu: boolean;
  menuHandler: Dispatch<SetStateAction<boolean>>;
  searchTypes: Array<{ label: string, active: boolean }>;
  searchTypesHandler: Dispatch<SetStateAction<{ label: string; active: boolean; }[]>>;
};

export interface BannerProps {
  mobile: boolean;
  menuOptions: Array<{ label: string, active: boolean }>;
  optionsHandler: Dispatch<SetStateAction<{ label: string; active: boolean; }[]>>;
}

export interface SearchProps {
  mobile: boolean;
}

export interface MenuProps {
  options: Array<{ label: string, active: boolean }>;
  optionsHandler: Dispatch<SetStateAction<{ label: string; active: boolean; }[]>>;
}

export interface CarouselProps {
  items: Array<any>;
  mobile: boolean;
}

export interface AdsProps {
  mobile: boolean;
}

export interface FlatCardProps {
  city: string;
  title: string;
  author: string;
  rooms: {bedroom: number, bathroom: number, park: number};
  tags: string[];
  price: number;
  image: any;
  showIcons?: boolean;
  mobile: boolean;
}

