"use client";
import bannerImage from '@/assets/images/banner_inicio.png';
import bannerImageMobile from '@/assets/images/banner_ inicio_mobile.png';
import Image from 'next/image';
import Search from '../shared/search/search';
import { BannerProps } from '@/interfaces';
import Menu from '../shared/menu/menu';

const Banner = ({ mobile, menuOptions, optionsHandler }: BannerProps) => {
  return (
    <div className='relative'>
      {mobile
        ?
          <>
            <Image src={bannerImageMobile} alt="Banner de busca de apartamentos" loading="lazy" />
            <h1 className='absolute top-[20%] left-[34%] -translate-x-2/4 -translate-y-2/4 text-2xl text-secondary w-1/3'>
              Vende. Aluga. Conecta.
            </h1>
            <Menu options={menuOptions} optionsHandler={optionsHandler} classContainer='mx-4 mt-8 mb-6' />
            <Search mobile={mobile} />
          </>
        :
          <div
            style={{backgroundImage: `url(${bannerImage.src})` }}
            className='bg-cover flex items-center justify-center h-[460px]'
          >
            <div className='w-3/6 text-center'>
              <h1 className='text-4xl text-secondary'>Vende. Aluga. Conecta.</h1>
              <Search mobile={mobile} />
            </div>
          </div>
      }
    </div>
  )
};

export default Banner;