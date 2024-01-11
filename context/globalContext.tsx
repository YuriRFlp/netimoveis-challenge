"use client";
import { GlobalContextData, GlobalProviderData } from "@/interfaces";
import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext<GlobalContextData>({
  isMobile: false,
  showMobileMenu: false,
  menuHandler: () => {},
});

const GlobalProvider = ({ children }: GlobalProviderData) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.screen.width < 801);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isMobile,
        showMobileMenu,
        menuHandler: (value) => setShowMobileMenu(value),
      }}
    >
      { children }
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;