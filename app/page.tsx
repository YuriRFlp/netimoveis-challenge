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
import Presentation from "@/components/presentantion/presentation";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";
import Portugal from '@/assets/images/portugal.png';
import PortugalMobile from '@/assets/images/portugal-mobile.png';
import { PLACE_IMAGES, NEWS } from "@/assets/data/data";
import NewsCard from "@/components/shared/newsCard/newsCard";
import { FaExternalLinkAlt } from "react-icons/fa";
import FacaParte from '@/assets/images/faca-parte.png';
import FacaParteMobile from '@/assets/images/faca-parte-mobile.png';
import Image from "next/image";
import Menu from "@/components/shared/menu/menu";
import List from "@/components/shared/list/list";
import Ios from '@/assets/images/app-store.png';
import Google from '@/assets/images/google-play.png';


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
    tips,
    tipsHandler
  } = useContext(GlobalContext);

  return (
    <main className="pt-14 bg-secondary">
      <Banner
        mobile={isMobile}
        menuOptions={searchTypes}
        optionsHandler={searchTypesHandler}
      />

      <FlatAds mobile={isMobile} />

      <section className={`flex pt-16 ${isMobile ? 'flex-col bg-[#F7F9FA] px-4 pb-12' : 'justify-between items-baseline bg-gradient-to-r from-secondary to-[#E1E5E9] px-32 pb-24'}`}>
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
          <section className="bg-[#F7F9FA] border-t-2 border-[#E1E5E9] pb-6 pt-12">
            <MenuCard
              mobile
              title={filtersContent.title}
              description={filtersContent.description}
              textButton={filtersContent.textButton}
              links={filtersContent.links}
              menuOptions={filtersTypes}
              optionsHandler={filtersTypesHandler}
            />
            <div style={{ backgroundImage: `url(${filtersContent.image})` }} className='h-[208px] bg-cover bg-top'></div>
          </section>
        :
          <section
            style={{ backgroundImage: `url(${filtersContent.image})` }}
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

      <section className={`py-16 ${isMobile ? 'bg-[#F7F9FA]' : 'px-32'}`}>
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

        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.75), transparent), url(${isMobile ? PortugalMobile.src : Portugal.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom right'
          }}
          className={`rounded-xl ${isMobile ? "mx-4 px-4 py-8" : "flex justify-between items-center py-7 px-10"}`}
        >
          <h1 className={`text-secondary font-bold leading-[40px] ${isMobile ? "text-2xl mb-4" : "text-[34px] w-[50%]"}`}>
            Encontre a oportunidade Perfeita em Portugal
          </h1>

          <button className="bg-secondary rounded-xl font-semibold text-primary p-3">
            Ver imóveis em Portugal
          </button>
        </div>
      </section>

      <Presentation
        mobile={isMobile}
        reasons={[
          {
            title: 'Motivo para negociar com a Netimóveis',
            text: 'Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
          },
          {
            title: 'Motivo para negociar com a Netimóveis',
            text: 'Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
          },
          {
            title: 'Motivo para negociar com a Netimóveis',
            text: 'Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit',
          }
        ]}
      />

      <section className={`bg-[#FAF9F7] ${isMobile ? 'px-4 pt-20' : 'pt-28 pb-20 px-32'}`}>
        <div className={`mb-8 ${isMobile ? '' : "flex justify-between item-end"}`}>
          <h1 className={`${isMobile ? "font-bold text-[20px] text-[#4E5254]" : "font-bold text-[34px] text-[#393B3D]"}`}>
            { 'Para compradores, vendedores ou curiosos  :)' }
          </h1>

          <div className={`mt-4 font-bold ${isMobile && 'mt-6 text-[#4E5254] mb-10'}`}>
            <Link href="#" className={`flex items-center ${isMobile ? 'text-[#2362AF]' : ''}`}>
              Ver mais no Blog
              {!isMobile && <MdOutlineArrowForward color="#4E5254" className="ml-1" />}
              {isMobile && <FaExternalLinkAlt color="#2362AF" size={12} className="ml-2" />}
            </Link>
          </div>
        </div>

        <div className={`${isMobile ? "" :  "flex items-start justify-between"}`}>
          {NEWS.map((news, index) => {
            return (
              <NewsCard
                key={index}
                image={news.image}
                time={news.time}
                type={news.type}
                title={news.title}
                mobile={isMobile}
              />
            )
          })}
        </div>
      </section>

      <div className={`${isMobile ? "" : "bg-[#FAF9F7] flex px-32 rounded-xl pb-20"}`}>
        <div className={`bg-[#1C2A39] ${isMobile ? "w-full px-4 pt-16" : " w-1/2 rounded-s-xl pl-10 pt-12 pb-12"}`}>
          <span className={`border-[1.5px] border-primary rounded-full cursor-default px-2 py-1 text-secondary ${isMobile && "text-sm"}`}>
            Parar Empresas
          </span>
          <h1 className={`text-secondary font-bold my-4 ${isMobile ? "text-2xl mt-6" : "text-[34px]"}`}>Faça parte da Netimóveis</h1>
          <p className="text-[20px] text-[#C0C7CA] my-5">É uma empresa ou rede de imobiliárias? Associe-se e alcance um próximo patamar de eficiência e tecnologia.</p>
          <div className={`${isMobile ? "mt-8 pb-8" : "flex items-end"}`}>
            <button className="rounded-md mr-6 bg-secondary text-primary font-semibold py-2 px-3">Mais Sobre se Associar</button>
            <button className={`text-sm text-secondary border-b border-secondary ${isMobile ? "mt-6" : "ml-6"}`}>
              Conheça Nossos Produtos
            </button>
          </div>
        </div>

        {isMobile
          ?
            <Image
              src={FacaParteMobile}
              alt="Faça parte da Netimóveis"
              loading="lazy"
              className="-translate-y-1"
            />
          :
            <div
              style={{ backgroundImage: `url(${FacaParte.src})` }}
              className="bg-cover w-1/2 rounded-e-xl"
            ></div>
        }
      </div>

      <section className={`${isMobile ? 'mt-16' : 'mx-32 mt-10'}`}>
        <Menu
          options={tips}
          optionsHandler={tipsHandler}
        />

        <div className={`${isMobile ? 'flex flex-wrap justify-between mx-4 mb-8' : 'flex items-start'}`}>
          <List
            title="Alugar"
            items={[
              'Apartamentos',
              'Casas',
              'Terrenos',
              'Lojas',
            ]}
            containerCustom={`${isMobile ? "mt-12" : "min-w-[230px] my-8"}`}
            titleCustom="text-[#555555] font-bold mb-3 cursor-default"
            textCustom="text-[#555555] text-sm mb-2 cursor-pointer"
          />
          <List
            title="Comprar"
            items={[
              'Casas à venda',
              'Imóv. em Condomínios',
              'Comprar terrenos',
              'Lançamentos',
            ]}
            containerCustom={`${isMobile ? "mt-12" : "min-w-[230px] my-8"}`}
            titleCustom="text-[#555555] font-bold mb-3 cursor-default"
            textCustom="text-[#555555] text-sm mb-2 cursor-pointer"
          />
          <List
            title="Comercial"
            items={[
              'Imóveis com escritório',
              'Prédio comercial',
              'Galpão de Armazenamento',
              'Salão de Eventos',
            ]}
            containerCustom={`${isMobile ? "mt-12" : "min-w-[230px] my-8"}`}
            titleCustom="text-[#555555] font-bold mb-3 cursor-default"
            textCustom="text-[#555555] text-sm mb-2 cursor-pointer"
          />
        </div>
      </section>

      <div className={`bg-[#EDF1F4] ${isMobile ? 'px-4 py-8' : 'flex items-start px-32'}`}>
        <List
          title="A Netimóveis"
          items={[
            'Quem somos',
            'Como funciona',
            'Seja um parceiro',
            'Quero me associar',
            'Acessoria de imprensa',
            'Soluções Corporativas',
            'Covid-19',
          ]}
          containerCustom={`${isMobile ? "" : "min-w-[230px] my-8"}`}
          titleCustom="text-[#063D7E] font-bold mb-3 cursor-default"
          textCustom="text-[#555555] text-sm mb-2 cursor-pointer"
        />
        <List
          title="Recursos"
          items={[
            'Comprar',
            'Alugar',
            'Lançamentos',
            'Anunciar Imóvel',
            'Simular Financiamento',
            'Imobiliárias',
            'Blog',
          ]}
          containerCustom={`${isMobile ? "mt-12" : "min-w-[230px] my-8"}`}
          titleCustom="text-[#063D7E] font-bold mb-3 cursor-default"
          textCustom="text-[#555555] text-sm mb-2 cursor-pointer"
        />
        <List
          title="Contato"
          items={[
            'Fale Conosco',
            'Perguntas Frequentes',
            'Suporte',
          ]}
          containerCustom={`${isMobile ? "mt-12" : "min-w-[230px] my-8"}`}
          titleCustom="text-[#063D7E] font-bold mb-3 cursor-default"
          textCustom="text-[#555555] text-sm mb-2 cursor-pointer"
        />
        <div>
          <List
            title="Nossos Aplicativos"
            items={[
              'Loc Fácil Netimóveis',
              'Pro Imob Netimóveis',
            ]}
            containerCustom={`${isMobile ? "mt-12" : "min-w-[230px] my-8"}`}
            titleCustom="text-[#063D7E] font-bold mb-3 cursor-default"
            textCustom="text-[#555555] text-sm mb-2 cursor-pointer"
          />

          <div className="flex items-center">
            <Image src={Ios} alt="Badge app store" loading="lazy" className="mr-3" />
            <Image src={Google} alt="Badge google play" loading="lazy" />
          </div>
        </div>
      </div>
    </main>
  )
}
