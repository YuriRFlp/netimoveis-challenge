"use client";
import Logo from '@/assets/images/logo-footer.png';
import Image from 'next/image';
import Instagram from '@/assets/images/instagram.png';
import Facebook from '@/assets/images/facebook.png';
import Linkedin from '@/assets/images/linkedin.png';
import Youtube from '@/assets/images/youtube.png';
import { GlobalContext } from '@/context/globalContext';
import { useContext } from 'react';

const Footer = () => {
  const {
    isMobile,
  } = useContext(GlobalContext);

  return (
    <footer className='bg-primary'>
      <div className={`min-[1600px]:mx-auto max-w-[1200px] min-[1600px]:px-0 flex ${isMobile ? 'p-4 items-center flex-col' : 'justify-between items-center px-32 py-3'}`}>
        <Image src={Logo} alt='Logotipo Netimóveis' loading="lazy" />
        <div className={`text-secondary text-xs text-center ${isMobile && 'w-[80%] my-8'}`}>
          <p className='mb-2'>© Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.</p>
          <ul className={`flex item-center ${isMobile && 'flex-wrap justify-center'}`}>
            <li className={`mr-6 cursor-pointer ${isMobile && 'mt-2'}`}>Política de privacidade</li>
            <li className={`mr-6 cursor-pointer ${isMobile && 'mt-2'}`}>Termos de uso</li>
            <li className={`mr-6 cursor-pointer ${isMobile && 'mt-2'}`}>LGPD</li>
            <li className={`cursor-pointer ${isMobile && 'mt-2'}`}>Versão: 25/10/2021</li>
          </ul>
        </div>
        <div className={`flex items-center ${isMobile && 'mb-6'}`}>
          <Image src={Instagram} alt='Logotipo instagram' loading='lazy' className='mr-5 cursor-pointer' />
          <Image src={Facebook} alt='Logotipo facebook' loading='lazy' className='mr-5 cursor-pointer' />
          <Image src={Linkedin} alt='Logotipo linkedin' loading='lazy' className='mr-5 cursor-pointer' />
          <Image src={Youtube} alt='Logotipo youtube' loading='lazy' className='cursor-pointer' />
        </div>
      </div>
    </footer>
  )
}

export default Footer;