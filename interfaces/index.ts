import { StaticImageData } from "next/image";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface GlobalProviderData {
  children?: ReactNode;
};

export interface GlobalContextData {
  isMobile: boolean;
  showMobileMenu: boolean;
  menuHandler: Dispatch<SetStateAction<boolean>>;
  location: string;
  locationHandler: Dispatch<SetStateAction<string>>;
  bedroomsQtd: string;
  bedroomsQtdHandler: Dispatch<SetStateAction<string>>;
  searchTypes: Array<{ label: string, active: boolean }>;
  searchTypesHandler: Dispatch<SetStateAction<{ label: string, active: boolean }[]>>;
  businessTypes: Array<{ label: string, active: boolean, icon?: any }>;
  businessTypesHandler: (value: {
    label: string;
    active: boolean;
    icon?: any;
  }[]) => void;
  filtersTypes: { label: string, active: boolean, icon?: any }[];
  filtersTypesHandler: (value: {
    label: string;
    active: boolean;
    icon?: any;
  }[]) => void;
  businessContent: { title: string, description: string, textButton: string, links?: string[] };
  filtersContent: { title: string, description: string, textButton: string, links?: string[], image?: any; };
  tips: Array<{ label: string, active: boolean }>;
  tipsHandler: Dispatch<SetStateAction<{ label: string, active: boolean }[]>>;
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
  desktopBreakPoint: number;
  mobileBreakPoint: number;
}

export interface FlatAdsProps {
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
  mobile?: boolean;
  links?: string[];
  classCustom?: string;
}

export interface MenuCardMobileProps {
  title: string;
  description: string;
  textButton: string;
  links?: string[];
}

export interface FreeAdsProps {
  mobile: boolean;
}

export interface PlaceCardProps {
  name: string;
  state: {name: string, shortname: string};
  placeId: number;
  image: any;
  content: string[];
  mobile: boolean;
}

export interface PresentationProps {
  reasons: Array<{ title: string, text: string }>;
  mobile: boolean;
}

export interface NewsCardProps {
  image: StaticImageData;
  time: number;
  type: string;
  title: string;
  mobile: boolean;
}

export interface ListProps {
  title: string;
  items: Array<string>;
  containerCustom?: string;
  titleCustom?: string;
  textCustom?: string;
}
