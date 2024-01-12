import { MenuCardMobileProps } from "@/interfaces";
import Link from "next/link";

const MenuCardMobile = ({
  title,
  description,
  textButton,
  links=[]
}: MenuCardMobileProps) => {
  return (
    <div className="mt-10 text-left">
      <h1 className="font-bold text-{#4E5254} text-[24px] border-l-2 border-primary pl-4">
        {title}
      </h1>
      <p className="text-[#808587] mb-8 mt-2 pl-4">{description}</p>
      <button className="border rounded-lg border-[#8224CB] text-[#8224CB] py-3 px-4 ml-4 font-semibold hover:text-secondary hover:bg-[#8224CB]">
        {textButton}
      </button>
      <div className="my-6 pl-4">
        {links.length > 0 &&
          links.map((link, index) => {
            return (
              <div key={index} className="text-[#393B3D] font-[14px] my-4 hover:text-[#8224CB]">
                <Link
                  href={'#'}
                  className='border-b border-[#C0C7CA] hover:border-[#8224CB]'
                >
                  {link}
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
};

export default MenuCardMobile;