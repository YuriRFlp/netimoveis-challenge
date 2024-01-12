"use client";
import Ads from "@/components/ads/ads";
import Banner from "@/components/banner/banner";
import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";

export default function Home() {
  const { isMobile, searchTypes, searchTypesHandler } = useContext(GlobalContext);

  return (
    <main className="pt-14 bg-secondary">
      <Banner
        mobile={isMobile}
        menuOptions={searchTypes}
        optionsHandler={searchTypesHandler}
      />
      <Ads mobile={isMobile} />
    </main>
  )
}
