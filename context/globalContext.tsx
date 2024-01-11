"use client";
import { GlobalContextData, GlobalProviderData } from "@/interfaces";
import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext<GlobalContextData>({
  isMobile: false,
  showMobileMenu: false,
  menuHandler: () => {},
  searchTypes: [],
  searchTypesHandler: () => {},
});

const GlobalProvider = ({ children }: GlobalProviderData) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [searchTypes, setSearchTypes] = useState<Array<{
    label: string;
    active: boolean;
  }>>([]);

  useEffect(() => {
    setIsMobile(window.screen.width < 801);
    setSearchTypes([
      { label: 'Alugar', active: true },
      { label: 'Comprar', active: false },
    ]);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isMobile,
        showMobileMenu,
        menuHandler: (value) => setShowMobileMenu(value),
        searchTypes,
        searchTypesHandler: (value) => setSearchTypes(value),
      }}
    >
      { children }
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;