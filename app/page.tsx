"use client";
import Banner from "@/components/banner/banner";
import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";

export default function Home() {
  const { isMobile, searchTypes, searchTypesHandler } = useContext(GlobalContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-14 bg-secondary">
      <Banner
        mobile={isMobile}
        menuOptions={searchTypes}
        optionsHandler={searchTypesHandler}
      />
    </main>
  )
}
