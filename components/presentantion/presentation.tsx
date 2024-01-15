import PresentationImage from '@/assets/images/apresentacao.png';
import { PresentationProps } from '@/interfaces';
import Image from 'next/image';

const Presentation = ( { reasons, mobile } : PresentationProps ) => {
  return (
    <section className={`pt-8 ${mobile ? 'block bg-[#F7F9FA]' : 'flex max-h-[400px]'}`}>
      <div
        style={{ backgroundImage: `url(${PresentationImage.src})` }}
        className={`${mobile ? 'h-[208px] bg-cover' : 'h-[400px] w-1/2 bg-cover bg-top bg-no-repeat'}`}
      ></div>

      <div
        style={{ background: mobile ? '#F7F9FA' : 'linear-gradient(to left, #EDF1F4, #FFF)' }}
        className={`${mobile ? 'pt-10 px-4' : 'w-1/2 px-20 py-3 h-[400px]'}`}
      >
        <h1 className='font-bold text-2xl text-[#A1A7AA]'>Aqui vai uma frase de efeito</h1>

        {reasons.map((reason, index) => {
          return (
            <div key={index} className={`relative ${mobile ? 'py-8' : 'mt-4'}`}>
              <h1 className='font-bold text-[#4E5254] mb-4 flex items-center'>
                <span className={`rounded-full w-3 h-3 block bg-[#A1A7AA] mr-3 ${mobile ? '' : 'absolute top-1.5 -left-6'}`} />
                { reason.title }
              </h1>
              <p className={`${!mobile && 'text-sm text-[#4E5254] w-[85%]'}`}>{ reason.text }</p>
            </div>
          )
        })}
      </div>
    </section>
  )
};

export default Presentation;