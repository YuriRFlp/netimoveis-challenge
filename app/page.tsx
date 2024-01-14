"use client";
import FlatAds from "@/components/flatAds/flatAds";
import Banner from "@/components/banner/banner";
import MenuCard from "@/components/shared/menuCard/menuCard";
import MenuCardMobile from "@/components/shared/menuCard/menuCardMobile";
import { GlobalContext } from "@/context/globalContext";
import { useContext } from "react";
import BusinessContentMobile from '@/assets/businessContentMobile.json';
import FreeAds from "@/components/freeAds/freeAds";
import MultiCarousel from "@/components/shared/carousel/carousel";
import Places from '@/assets/place.json';
import { Place } from "@/classes";
import PlaceCard from "@/components/shared/placeCard/placeCard";

import BA from '@/assets/images/BA.png';
import CE from '@/assets/images/CE.png';
import DF from '@/assets/images/DF.png';
import ES from '@/assets/images/ES.png';
import MG from '@/assets/images/MG.png';
import PB from '@/assets/images/PB.png';
import PT from '@/assets/images/PT.png';
import RJ from '@/assets/images/RJ.png';
import RS from '@/assets/images/RS.png';
import SC from '@/assets/images/SC.png';
import SP from '@/assets/images/SP.png';


const PLACE_IMAGES = {
  "BA.png": BA,
  "CE.png": CE,
  "DF.png": DF,
  "ES.png": ES,
  "MG.png": MG,
  "PB.png": PB,
  "PT.png": PT,
  "RJ.png": RJ,
  "RS.png": RS,
  "SC.png": SC,
  "SP.png": SP,
};


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

      <section className={`flex pt-16 ${isMobile ? 'flex-col bg-[#EDF1F4] px-4 pb-12' : 'justify-between items-baseline bg-gradient-to-r from-secondary to-[#E1E5E9] px-32 pb-24'}`}>
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
            <div style={{ backgroundImage: `url(${(filtersContent.image || [])[0]})` }} className='h-[208px] bg-cover bg-top'></div>
          </section>
        :
          <section
            style={{ backgroundImage: `url(${(filtersContent.image || [])[0]})` }}
            className='py-[58px] px-32 bg-top bg-no-repeat bg-cover'
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

      <section className={`py-16 ${isMobile ? 'bg-[#EDF1F4]' : 'px-32'}`}>
        <FreeAds mobile={isMobile} />

        <div className={`my-20 ${isMobile && 'mx-4'}`}>
          <h1 className={`font-bold mb-6 ${isMobile ? "text[#4E5254]" : "text-[#393B3D] text-[34px]"}`}>
            Prontos para te Receber em mais de 10 estados
          </h1>
          <MultiCarousel
            mobile={isMobile}
            desktopBreakPoint={3.003}
            mobileBreakPoint={1.003}
            items={
              Places.map((place, index) => {
                const place_instance = new Place(
                  place.name, place.state, place.placeId, place.image
                );
                return (
                  <PlaceCard
                    key={index}
                    name={place_instance.name}
                    state={place_instance.state}
                    placeId={place_instance.placeId}
                    image={PLACE_IMAGES[place_instance.image as keyof typeof PLACE_IMAGES]}
                    content={[
                      'Casas à venda em',
                      'Apto. à venda em',
                      'Casas para locação em',
                      'Apto. para locação em',
                    ]}
                    mobile={isMobile}
                  />
                )
              })
            }
          />
        </div>
      </section>
    </main>
  )
}
