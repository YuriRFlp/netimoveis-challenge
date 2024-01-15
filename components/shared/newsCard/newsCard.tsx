import { NewsCardProps } from "@/interfaces";
import Image from "next/image";
import { MdAccessTime } from "react-icons/md";

const NewsCard = ({ image, time, type, title, mobile } : NewsCardProps) => {
  return (
    <div className={`${mobile ? "w-full pb-12" : "max-w-[284px]"}`}>
      {mobile
        ? <Image src={image} alt="Notícias Netimóveis" loading="lazy" className="rounded-xl" />
        :
          <div
            style={{ backgroundImage: `url(${image.src})` }}
            className={`rounded-xl bg-cover ${mobile ? "h-{282px}" : "h-[182px]"}`}
          ></div>
      }

      <div className="flex items-center my-4">
        <span className="flex items-center text-sm text-[#848484] mr-5">
          <MdAccessTime color="848484" size={16} className="mr-1" />
          { time } Min de Leitura
        </span>
        <span className="text-primary text-sm">{ type }</span>
      </div>

      <h1 className="font-bold text-[18px] text-[#3A3A3A] leading-[26px]">{ title }</h1>
    </div>
  )
};

export default NewsCard;