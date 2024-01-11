import { SearchProps } from "@/interfaces";
import { MdOutlineLocationOn, MdOutlineBed, MdOutlineSearch  } from "react-icons/md";

const Search = ({ mobile }: SearchProps) => {
  return (
    <>
      {mobile
        ?
          <div className="m-4">
            <div className="my-4 border border-[#E1E5E9] p-4 rounded-xl cursor-pointer text-left">
              <div className="flex items-center text-[#393B3D] text-sm font-bold">
                <MdOutlineLocationOn className="mr-1" size={20} color="#A1A7AA" />
                Localização
              </div>
              <p className="mt-1 text-[#808487]">Qual é a Localização?</p>
            </div>
            <div className="text-left my-4 border border-[#E1E5E9] p-4 rounded-xl cursor-pointer text-left">
              <div className="flex items-center text-[#393B3D] text-sm font-bold">
                <MdOutlineBed className="mr-2" size={20} color="#A1A7AA" />
                Nº de Quartos
              </div>
              <p className="mt-1 text-[#808487]">Quantos Quartos?</p>
            </div>
            <button className="flex align-center justify-center bg-primary w-full mt-1 p-3 border border-primary rounded-xl hover:bg-primaryHover text-secondary font-semibold">
              <MdOutlineSearch className="mr-1" color="#FFF" size={26} />
              Buscar Imóveis
            </button>
          </div>
        :
          <div className="relative flex items-center bg-secondary rounded-full shadow mt-5">
            <div className="p-2 pl-6 rounded-full hover:bg-[#C0C7CA] cursor-pointer w-full text-left">
              <div className="flex items-center text-[#393B3D] text-sm font-bold">
                <MdOutlineLocationOn className="mr-1" size={20} color="#A1A7AA" />
                Localização
              </div>
              <p className="mt-1 text-[#808487]">Qual é a Localização?</p>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-0.5 h-8 bg-[#D0D5D8]"></div>
            <div className="flex items-center justify-between hover:bg-[#C0C7CA] cursor-pointer rounded-full w-full p-2 pl-6">
              <div className="text-left">
                <div className="flex items-center text-[#393B3D] text-sm font-bold">
                  <MdOutlineBed className="mr-2" size={20} color="#A1A7AA" />
                  Nº de Quartos
                </div>
                <p className="mt-1 text-[#808487]">Quantos Quartos?</p>
              </div>
              <button className="bg-primary p-2 border border-primary rounded-full hover:bg-primaryHover">
                <MdOutlineSearch color="#FFF" size={26} />
              </button>
            </div>
          </div>
      }
    </>
  )
};

export default Search;