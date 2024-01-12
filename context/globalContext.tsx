"use client";
import { GlobalContextData, GlobalProviderData } from "@/interfaces";
import { createContext, useState, useEffect, SetStateAction, Dispatch } from "react";
import { MdOutlineKey, MdAttachMoney, MdOutlineHomeWork   } from "react-icons/md";
import BussinesContentData from '@/assets/businessContent.json';

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
  businessContent: {
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
  const [businessContent, setBusinessContent] = useState<{
    title: string,
    description: string,
    textButton: string,
    links?: string[],
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
    setBusinessContent(BussinesContentData[0]);
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
      }}
    >
      { children }
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;