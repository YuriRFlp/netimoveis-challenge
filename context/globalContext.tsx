"use client";
import { GlobalContextData, GlobalProviderData } from "@/interfaces";
import { createContext, useState, useEffect } from "react";
import {
  MdOutlineKey,
  MdAttachMoney,
  MdOutlineHomeWork,
  MdSunny,
  MdPets,
  MdDirectionsBus,
  MdBalcony,
  MdYard,
  MdSignalWifi4Bar
} from "react-icons/md";
import BussinesContentData from '@/assets/businessContent.json';
import FiltersContentData from '@/assets/filtersContent.json';
import SolManha from '@/assets/images/sol-da-manha.png';
import AceitaPet from '@/assets/images/aceita-pet.png';
import OnibusPerto from '@/assets/images/onibus-perto.png';
import Varanda from '@/assets/images/tem-varanda.png';
import Quintal from '@/assets/images/tem-quintal.png';
import Internet from '@/assets/images/boa-internet.png';

const IMAGES = [
  SolManha.src,
  AceitaPet.src,
  OnibusPerto.src,
  Varanda.src,
  Quintal.src,
  Internet.src,
];

export const GlobalContext = createContext<GlobalContextData>({
  isMobile: false,
  showMobileMenu: false,
  menuHandler: () => {},
  searchTypes: [],
  searchTypesHandler: () => {},
  businessTypes: [],
  businessTypesHandler: (value: {
    label: string;
    active: boolean;
    icon?: any;
  }[]) => {},
  filtersTypes: [],
  filtersTypesHandler: (value: {
    label: string;
    active: boolean;
    icon?: any;
  }[]) => {},
  businessContent: {
    title: "",
    description: "",
    textButton: "",
  },
  filtersContent: {
    title: "",
    description: "",
    textButton: "",
  },
});

const GlobalProvider = ({ children }: GlobalProviderData) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [searchTypes, setSearchTypes] = useState<Array<{
    label: string,
    active: boolean,
  }>>([]);
  const [businessTypes, setBusinessTypes] = useState<Array<{
    label: string,
    active: boolean,
    icon?: any,
  }>>([]);
  const [filtersTypes, setFiltersTypes] = useState<Array<{
    label: string,
    active: boolean,
    icon?: any,
  }>>([]);
  const [businessContent, setBusinessContent] = useState<{
    title: string,
    description: string,
    textButton: string,
    links?: string[],
    image?: any;
  }>({
    title: "",
    description: "",
    textButton: "",
  });
  const [filtersContent, setFiltersContent] = useState<{
    title: string,
    description: string,
    textButton: string,
    links?: string[],
    image?: any,
  }>({
    title: "",
    description: "",
    textButton: "",
  });

  useEffect(() => {
    setIsMobile(window.screen.width < 801);
    setSearchTypes([
      { label: 'Alugar', active: true },
      { label: 'Comprar', active: false },
    ]);
    setBusinessTypes([
      { label: 'Alugar Imóvel', active: true, icon: <MdOutlineKey size={20} color="#808587" /> },
      { label: 'Comprar Imóvel', active: false, icon: <MdAttachMoney size={20} color="#808587" /> },
      { label: 'Anunciar Imóvel', active: false, icon: <MdOutlineHomeWork size={20} color="#808587" /> },
    ]);
    setFiltersTypes([
      { label: 'Pega Sol', active: true, icon: <MdSunny size={20} color="#808587" /> },
      { label: 'Aceitam Pet', active: false, icon: <MdPets size={20} color="#808587" /> },
      { label: 'Ônibus Perto', active: false, icon: <MdDirectionsBus  size={20} color="#808587" /> },
      { label: 'Tem Varanda', active: false, icon: <MdBalcony size={20} color="#808587" /> },
      { label: 'Tem Quintal', active: false, icon: <MdYard size={20} color="#808587" /> },
      { label: 'Boa Internet', active: false, icon: <MdSignalWifi4Bar size={20} color="#808587" /> },
    ]);
    setBusinessContent(BussinesContentData[0]);
    setFiltersContent({...FiltersContentData[0], image: IMAGES[0]});
  }, []);

  const businessTypesHandler = (value: {
    label: string;
    active: boolean;
    icon?: any;
  }[]) => {
    setBusinessTypes((prevState) => {
      const currentMenuIndex = prevState.findIndex(type => type.active);
      setBusinessContent(BussinesContentData[currentMenuIndex]);
      return value;
    });
  };

  const filtersTypesHandler = (value: {
    label: string;
    active: boolean;
    icon?: any;
  }[]) => {
    setFiltersTypes((prevState) => {
      const currentMenuIndex = prevState.findIndex(type => type.active);
      setFiltersContent({...FiltersContentData[currentMenuIndex], image: IMAGES[currentMenuIndex]});
      return value;
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        isMobile,
        showMobileMenu,
        menuHandler: (value) => setShowMobileMenu(value),
        searchTypes,
        searchTypesHandler: (value) => setSearchTypes(value),
        businessTypes,
        businessTypesHandler,
        businessContent,
        filtersContent,
        filtersTypes,
        filtersTypesHandler,
      }}
    >
      { children }
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;