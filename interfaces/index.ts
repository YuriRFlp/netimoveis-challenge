import { Dispatch, ReactNode, SetStateAction } from "react";

export interface GlobalProviderData {
  children?: ReactNode;
};

export interface GlobalContextData {
  isMobile: boolean;
  showMobileMenu: boolean;
  menuHandler: Dispatch<SetStateAction<boolean>>;
  searchTypes: Array<{ label: string, active: boolean }>;
  searchTypesHandler: Dispatch<SetStateAction<{ label: string, active: boolean }[]>>;
  businessTypes: Array<{ label: string, active: boolean, icon?: any }>;
  businessTypesHandler: (value: {
    label: string;
    active: boolean;
    icon?: any;
  }[]) => void;
  businessContent: { title: string, description: string, textButton: string, links?: string[] };
};

export interface BannerProps {
  mobile: boolean;
  menuOptions: Array<{ label: string, active: boolean }>;
  optionsHandler: Dispatch<SetStateAction<{ label: string, active: boolean }[]>>;
}

export interface SearchProps {
  mobile: boolean;
}

export interface MenuProps {
  options: Array<{ label: string, active: boolean, icon?: any }>;
  optionsHandler: (value: {
    label: string;
    active: boolean;
    icon?: any;
  }[]) => void;
  classContainer?: string;
  classContent?: string;
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

export interface MenuCardProps {
  title: string;
  description: string;
  textButton: string;
  menuOptions: Array<{ label: string, active: boolean, icon?: any }>;
  optionsHandler: (value: {
    label: string;
    active: boolean;
    icon?: any;
  }[]) => void;
  links?: string[];
}

export interface MenuCardMobileProps {
  title: string;
  description: string;
  textButton: string;
  links?: string[];
}

