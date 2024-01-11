import { MenuProps } from "@/interfaces";
import { SetStateAction } from "react";

const Menu = ({ options, optionsHandler }: MenuProps) => {
  const activeHandler = (item : { label: string, active: boolean }) => {
    const newOptions : SetStateAction<{ label: string; active: boolean; }[]> = options.map(op => {
      op.active = false;
      if (op.label == item.label) op.active = item.active ? item.active : !item.active;
      return op;
    });

    optionsHandler(newOptions);
  };

  return (
    <div className="mx-4 mt-8 mb-6 flex border-b border-[#E1E5E9]">
      {options.map((op) => {
        return (
          <div
            key={op.label}
            onClick={() => activeHandler(op)}
            className='cursor-pointer mr-4'
          >
            <p className={`${op.active ? 'text-[#393B3D]' : 'text-[#808587]'} px-2`}>{ op.label }</p>
            { op.active && <div className="bg-primary w-full h-1"></div> }
          </div>
        )
      })}
    </div>
  )
};

export default Menu;