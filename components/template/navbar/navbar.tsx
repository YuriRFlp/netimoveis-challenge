"use client";
import Image from "next/image";
import logo from '../../../assets/images/logo.png';
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
import { useContext } from "react";
import { GlobalContext } from "@/context/globalContext";

const NavBar = () => {
  const { isMobile, showMobileMenu, menuHandler } = useContext(GlobalContext);

  return (
    <>
      {isMobile
        ?
          <header>
            <nav className="z-20 fixed w-screen flex justify-between items-center bg-secondary px-4 py-2 shadow">
              <Image src={logo} alt="Logo Netimóveis"	loading="lazy" />
              <MdMenu size={30} onClick={() => menuHandler(!showMobileMenu)} />
            </nav>
            {showMobileMenu &&
              <div className="z-10 flex flex-col items-center w-screen fixed top-14 bg-secondary shadow">
                <span className="py-2 px-4 text-grey cursor-pointer">Imobiliárias</span>
                <span className="py-2 px-4 text-grey cursor-pointer">Quero me associar</span>
                <span className="flex items-center py-2 px-4 text-grey cursor-pointer">Sobre</span>
                <span className="py-2 px-4 text-grey cursor-pointer">Blog</span>
              </div>
            }
          </header>
        :
          <header className="z-20 fixed w-full bg-secondary px-32 py-2 shadow">
            <div className="flex justify-between items-center max-w-[1200px] min-[1600px]:mx-auto">
              <nav className="flex">
                <Image src={logo} alt="Logo Netimóveis"	loading="lazy" />
                <div className="flex items-center ml-10">
                  <span className="mx-2 px-2 text-grey cursor-pointer">Imobiliárias</span>
                  <span className="mx-2 px-2 text-grey cursor-pointer">Quero me associar</span>
                  <span className="flex items-center mx-2 px-2 text-grey cursor-pointer">
                    Sobre
                    <MdKeyboardArrowDown />
                  </span>
                  <span className="mx-2 px-2 text-grey cursor-pointer">Blog</span>
                </div>
              </nav>
              <div>
                <button className="border rounded-full border-purple text-purple py-0.5 px-3">
                  Anunciar Imóvel
                </button>
                <button className="ml-4 pl-2">Entrar</button>
              </div>
            </div>
          </header>
      }
    </>
  )
};

export default NavBar;