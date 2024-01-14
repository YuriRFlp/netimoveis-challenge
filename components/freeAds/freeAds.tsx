import Image from "next/image";
import Link from "next/link";
import AnuncieGratis from '@/assets/images/anuncie-gratis.png';
import { FreeAdsProps } from "@/interfaces";
import { MdOutlineArrowForward } from "react-icons/md";

const FreeAds = ({ mobile } : FreeAdsProps) => {
  return (
    <>
      <div className={`${mobile ? 'px-4' : "flex items-center justify-between border border-[#D0D5D8] rounded-xl"}`}>
        {!mobile && <Image src={AnuncieGratis} alt="Anúncio grátis" className="rounded-s-xl" />}
        <div className={`${!mobile && 'mx-6' }`}>
          <h1 className="font-bold text-primary mb-3">
            { mobile ? 'Quer vender?' : 'Quer Vender ou Alugar?' }
          </h1>
          <h2 className="font-bold text-[34px] text-[#393B3D] mb-12 leading-[40px]">
            Anuncie grátis para mais de 100 mil pessoas todos os dias.
          </h2>
          <button className={`border rounded-lg border-[#8224CB] text-[#8224CB] font-semibold hover:text-secondary hover:bg-[#8224CB] px-4 ${mobile ? 'py-2' : 'py-1'}`}>
            Anunciar Imóvel
          </button>
          <div className={`mt-4 font-bold ${mobile && 'mt-6 text-sm text-[#393B3D] mb-10'}`}>
            <Link href="#" className={`${mobile ? 'border-b border-[#A1A7AA]' : 'flex items-center'}`}>
              Saiba quanto vale seu imóvel
              {!mobile && <MdOutlineArrowForward color="#4E5254" className="ml-1" />}
            </Link>
          </div>
        </div>
      </div>
      {mobile && <Image src={AnuncieGratis} alt="Anúncio grátis" />}
    </>
  )
};

export default FreeAds;