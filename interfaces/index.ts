import { Dispatch, ReactNode, SetStateAction } from "react";

export interface GlobalProviderData {
  children?: ReactNode;
};

export interface GlobalContextData {
  isMobile: boolean;
  showMobileMenu: boolean;
  menuHandler: Dispatch<SetStateAction<boolean>>;
};