"use client";
import Ads from "@/components/ads/ads";
import Banner from "@/components/banner/banner";
import MenuCard from "@/components/shared/menuCard/menuCard";
import MenuCardMobile from "@/components/shared/menuCard/menuCardMobile";
import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";
import BusinessContentMobile from '@/assets/businessContentMobile.json';

export default function Home() {
  const {
    isMobile,
    searchTypes,
    searchTypesHandler,
    businessTypes,
    businessTypesHandler,
    businessContent,
  } = useContext(GlobalContext);

  return (
    <main className="pt-14 bg-secondary">
      <Banner
        mobile={isMobile}
        menuOptions={searchTypes}
        optionsHandler={searchTypesHandler}
      />

      <Ads mobile={isMobile} />

      <section className={`flex py-16 ${isMobile ? 'flex-col bg-[#E1E5E9] px-4' : 'justify-between items-baseline bg-gradient-to-r from-secondary to-[#E1E5E9] px-32'}`}>
        <div className={`text-left ${isMobile ? 'w-full' : 'w-[55%] max-w-[500px] mr-8'}`}>
          <h1 className={`font-bold text-[#4E5254] ${isMobile ? 'text-[34px]' : 'text-6xl'}`}>Encontre um lugar que é a sua cara</h1>
          {isMobile
            ?
              <p className="text-[#808587] text-xl mt-4">
                A Netimóveis te proporciona uma experiência ágil e segura neste momento tão importante
                que é decidir um lar.
              </p>
            :
              <p className="text-[#808587] text-xl mt-4">
                A Netimóveis te oferece uma experiência ágil e segura na hora de comprar ou
                alugar seu imóvel. Seja de maneira digital ou física, fazemos a diferença neste momento
                tão importante que é decidir um lar.
              </p>
          }
        </div>
        {isMobile
          ?
            <>
              {BusinessContentMobile.map(data => {
                return (
                  <MenuCardMobile
                    key={data.title}
                    title={data.title}
                    description={data.description}
                    textButton={data.textButton}
                    links={data.links}
                  />
                )
              })}
            </>
          :
            <MenuCard
              title={businessContent.title}
              description={businessContent.description}
              textButton={businessContent.textButton}
              links={businessContent.links}
              menuOptions={businessTypes}
              optionsHandler={businessTypesHandler}
            />
        }
      </section>
    </main>
  )
}
