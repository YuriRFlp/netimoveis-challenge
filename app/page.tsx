"use client";
import FlatAds from "@/components/flatAds/flatAds";
import Banner from "@/components/banner/banner";
import MenuCard from "@/components/shared/menuCard/menuCard";
import MenuCardMobile from "@/components/shared/menuCard/menuCardMobile";
import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";
import BusinessContentMobile from '@/assets/businessContentMobile.json';
import Image from "next/image";

export default function Home() {
  const {
    isMobile,
    searchTypes,
    searchTypesHandler,
    businessTypes,
    businessTypesHandler,
    businessContent,
    filtersTypes,
    filtersTypesHandler,
    filtersContent,
  } = useContext(GlobalContext);

  return (
    <main className="pt-14 bg-secondary">
      <Banner
        mobile={isMobile}
        menuOptions={searchTypes}
        optionsHandler={searchTypesHandler}
      />

      <FlatAds mobile={isMobile} />

      <section className={`flex pt-16 pb-12 ${isMobile ? 'flex-col bg-[#EDF1F4] px-4' : 'justify-between items-baseline bg-gradient-to-r from-secondary to-[#E1E5E9] px-32'}`}>
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
              classCustom="w-[504px] min-h-[416px]"
            />
        }
      </section>

      {isMobile
        ?
          <section className="bg-[#EDF1F4] border-t-2 border-[#E1E5E9] pb-6 pt-12">
            <MenuCard
              mobile
              title={filtersContent.title}
              description={filtersContent.description}
              textButton={filtersContent.textButton}
              links={filtersContent.links}
              menuOptions={filtersTypes}
              optionsHandler={filtersTypesHandler}
            />
            <div style={{ backgroundImage: `url(${(filtersContent.image || [])[0]})` }} className='h-[208px] object-contain'></div>
          </section>
        :
          <section
            style={{ backgroundImage: `url(${(filtersContent.image || [])[0]})` }}
            className='py-[58px] px-32 bg-top bg-no-repeat'
          >
            <MenuCard
              title={filtersContent.title}
              description={filtersContent.description}
              textButton={filtersContent.textButton}
              links={filtersContent.links}
              menuOptions={filtersTypes}
              optionsHandler={filtersTypesHandler}
              classCustom="w-[488px]"
            />
          </section>
      }
    </main>
  )
}
