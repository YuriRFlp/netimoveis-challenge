"use client";
import { MenuProps } from "@/interfaces";
import { SetStateAction, useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft   } from "react-icons/md";

const Menu = ({ options, optionsHandler, classContainer='', classContent='' }: MenuProps) => {
  const [currentTypes, setCurrentTypes] = useState<Array<any>>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const activeHandler = (item : { label: string, active: boolean }) => {
    const newOptions : SetStateAction<{ label: string; active: boolean; }[]> = options.map(op => {
      op.active = false;
      if (op.label == item.label) op.active = item.active ? item.active : !item.active;
      return op;
    });

    optionsHandler(newOptions);
  };

  const changeTypes = (step: number) => {
    setCurrentIndex(prevState => {
      const newIndex = prevState + step;
      activeHandler(currentTypes[newIndex][0]);
      return newIndex;
    });
  };

  useEffect(() => {
    const newArray = [];
    const loops = options.length > 2 ? Math.floor(options.length/3) : 1;
    let steps = [0, 3];
    for (let i=0; i < loops; i++) {
      const subarray = options.slice(steps[0], steps[1]);
      newArray.push(subarray);
      steps = steps.map(step => step + 3);
    };
    setCurrentTypes(newArray);
  },[options]);

  return (
    <div className={`${classContainer} relative border-b-2 border-[#E1E5E9]`}>
      <div className={`${classContent} flex items-center`}>
        {(options.length > 3 && currentIndex > 0) &&
          <MdKeyboardArrowLeft
            onClick={() => changeTypes(-1)}
            color="3A3A3A"
            size={30}
            className="cursor-pointer absolute left-1"
          />
        }
        {(currentTypes[currentIndex] || []).map((op: any) => {
            return (
              <div
                key={op.label}
                onClick={() => activeHandler(op)}
                onKeyDown={() => activeHandler(op)}
                className='flex flex-col items-center text-center cursor-pointer mr-4 min-w-[60px]'
              >
                {op.icon && op.icon}
                <p className={`${op.active ? 'text-[#393B3D]' : 'text-[#808587]'} px-2 hover:text-[#393B3D]`}>{ op.label }</p>
                { op.active && <div className="bg-primary w-full h-1"></div> }
              </div>
            )
        })}
        {(options.length > 3 && currentIndex != currentTypes.length - 1) &&
          <MdKeyboardArrowRight
            onClick={() => changeTypes(1)}
            color="3A3A3A"
            size={30}
            className="cursor-pointer absolute right-1"
          />
        }
      </div>
    </div>
  )
};

export default Menu;