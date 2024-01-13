import { MenuCardProps } from "@/interfaces";
import Menu from "../menu/menu";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";

const MenuCard = ({
  title,
  description,
  textButton,
  menuOptions,
  optionsHandler,
  mobile=false,
  classCustom='',
  links = []
}: MenuCardProps) => {
  return (
    <div className={`${mobile ? 'bg-transparent' : 'bg-secondary pt-8 pb-4 rounded-xl'} ${!mobile && classCustom}`}>
      <Menu
        options={menuOptions}
        optionsHandler={optionsHandler}
        classContainer='mb-6'
        classContent="px-10 justify-between"
      />
      <div className="mx-10">
        <h1 className={`font-bold text-{#393B3D} text-[30px] mb-2 ${mobile ? 'mt-10 leading-10' : ''}`}>
          {title}
        </h1>
        <p className={`text-[#808587] mb-8 ${mobile ? 'text-base' : 'text-sm'}`}>
          {description}
        </p>
        <button className={`border rounded-lg border-[#8224CB] text-[#8224CB] font-semibold hover:text-secondary hover:bg-[#8224CB] px-4 ${mobile ? 'py-2' : 'py-1'}`}>
          {textButton}
        </button>
        <div className="my-6">
          {links.length > 0 &&
            links.map((link, index) => {
              return (
                <div key={index} className="text-[#393B3D] font-sm my-4 hover:text-[#8224CB]">
                  <Link
                    href={'#'}
                    className={`${textButton.includes('Anunciar') ? 'flex items-center font-bold text-[#4E5254]' : 'border-b border-[#C0C7CA] hover:border-[#8224CB]'}`
                  }>
                    {link}
                    {textButton.includes('Anunciar') && <MdOutlineArrowForward color="#4E5254" size={20} className="ml-1" />}
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
};

export default MenuCard;