import { FlatCardProps } from "@/interfaces";
import Image from "next/image";
import { numberToMoney } from "@/utils/formatter";
import { MdVideocam, MdCameraAlt } from "react-icons/md";
import { BsGrid1X2 } from "react-icons/bs";

const FlatCard = ({ city, title, author, rooms, price, tags, image, mobile, showIcons=false } : FlatCardProps) => {
  return (
    <div className={`border border-[#D9D9D9] rounded-xl ${mobile ? 'max-w-[250px]' : 'max-w-[275px]'} cursor-pointer mb-8`}>
      <div className="relative">
        <Image src={image} alt="Imagem do flat" className="rounded-t-xl" />
        {showIcons &&
          <div className="flex items-center absolute top-2 left-2 p-1 rounded-full bg-secondary tex-[#652D91]">
            <MdVideocam className="mx-1" size={15} color="#652D91"  />
            <MdCameraAlt className="mx-1" size={15} color="#652D91"  />
            <BsGrid1X2 className="mx-1" size={10} color="#652D91"  />
          </div>
        }
      </div>
      <div>
        <h3 className="font-bold text-[#161616] mx-4 mt-4 text-ellipsis whitespace-nowrap overflow-hidden">{ title }</h3>
        <p className="text-[#848484] mx-4 mt-1 text-sm text-ellipsis whitespace-nowrap overflow-hidden">{ author }</p>
        <div className="flex items-center text-[#3A3A3A] text-sm mt-2 mx-4">
          <p className="mr-2">{ rooms.bedroom || 0 } Quartos</p>
          <span className="bg-[#CACACA] w-1 h-1 rounded-full mr-3"></span>
          <p className="mr-2">{ rooms.bathroom || 0 } Banheiros</p>
          <span className="bg-[#CACACA] w-1 h-1 rounded-full mr-3"></span>
          <p>{ rooms.park || 0 } Vagas</p>
        </div>
        <div className="flex items-center mx-4 mt-3">
          {tags.map(tag => {
            return (
              <div key={tag} className="bg-[#F3F3F3] text-[#48617E] text-xs mr-4 px-2 py-0.5 rounded">
                { tag }
              </div>
            )
          })}
        </div>
        <div className="text-xl text-primary my-2 font-bold mx-4 mb-4">
          { numberToMoney(price) }
        </div>
      </div>
    </div>
  )
};

export default FlatCard;