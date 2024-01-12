import { MenuProps } from "@/interfaces";
import { SetStateAction } from "react";

const Menu = ({ options, optionsHandler, classContainer='', classContent='' }: MenuProps) => {
  const activeHandler = (item : { label: string, active: boolean }) => {
    const newOptions : SetStateAction<{ label: string; active: boolean; }[]> = options.map(op => {
      op.active = false;
      if (op.label == item.label) op.active = item.active ? item.active : !item.active;
      return op;
    });

    optionsHandler(newOptions);
  };

  return (
    <div className={`${classContainer} border-b border-[#E1E5E9]`}>
      <div className={`${classContent} flex`}>
        {options.map((op) => {
          return (
            <div
              key={op.label}
              onClick={() => activeHandler(op)}
              className='flex flex-col items-center text-center cursor-pointer mr-4 w-[60px]'
            >
              {op.icon && op.icon}
              <p className={`${op.active ? 'text-[#393B3D]' : 'text-[#808587]'} px-2 hover:text-[#393B3D]`}>{ op.label }</p>
              { op.active && <div className="bg-primary w-full h-1"></div> }
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Menu;