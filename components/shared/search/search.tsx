"use client";
import { SearchProps } from "@/interfaces";
import { MdOutlineLocationOn, MdOutlineBed, MdOutlineSearch  } from "react-icons/md";
import style from './search.module.css';
import { useContext, useState } from "react";
import { GlobalContext } from "@/context/globalContext";
import AddressData from '@/assets/address.json';

const SELECT = [
  { label: 'Apartamento', value: 'apartamento' },
  { label: 'Casa', value: 'casa' },
  { label: 'Comercial', value: 'comercial' },
  { label: 'Flat', value: 'flat' },
]

const Search = ({ mobile }: SearchProps) => {
  const [ addressList, setAddressList ] = useState<Array<any>>([]);
  const [ propType, setPropType ] = useState<string>('');
  const [ showLocationSelect, setShowLocationSelect ] = useState<boolean>(false);
  const [ showBedroomsSelect, setShowBedroomsSelect ] = useState<boolean>(false);
  const [ btns, setBtns ] = useState<Array<{text: string, active: boolean}>>([
    { text: 'Todos', active: true },
    { text: '1+', active: false },
    { text: '2+', active: false },
    { text: '3+', active: false },
    { text: '4+', active: false },
  ]);
  const {
    location,
    locationHandler,
    bedroomsQtd,
    bedroomsQtdHandler,
  } = useContext(GlobalContext);

  const changeLocationHandler = (value: any) => {
    value.length < 1 ? setShowLocationSelect(false) : setShowLocationSelect(true);
    const new_address = AddressData.filter(data => (data.street.toLowerCase()).includes(value.toLowerCase()));
    setAddressList(new_address);
    locationHandler(value);
  };

  const clickLocationHandler = (ad: any) => {
    locationHandler(`${ad.street}, ${ad.neighborhood}, ${ad.city} - ${ad.state}`);
    setShowLocationSelect(false);
  };

  const changeBedroomsHandler = (btn: {text: string; active: boolean}) => {
    setBtns(prevState => {
      prevState.forEach(prevBtn => {
        prevBtn.active = false;
        if (prevBtn.text == btn.text) prevBtn.active = true;
      });
      return prevState;
    });
    bedroomsQtdHandler(prevState => {
      let propType_value;
      if (prevState.includes(', ')) propType_value = prevState.split(', ')[1];

      if (propType_value)
        return `${btn.text}, ${propType_value}`
      else if (prevState.length > 0) {
        const btn_options = btns.map(btn => btn.text);
        const isBtn = btn_options.some(btn => prevState == btn)
        return isBtn ? btn.text : `${btn.text}, ${prevState}`;
      } else
        return btn.text;
    });
  };

  const changePropTypeHandler = (value: string) => {
    setPropType(value);
    bedroomsQtdHandler(prevState => {
      let bedrooms_value;
      if (prevState.includes(', ')) bedrooms_value = prevState.split(', ')[0];

      if (bedrooms_value)
        return bedrooms_value.concat(`, ${value}`);
      else if (prevState.length > 0) {
        const type_options = SELECT.map(item => item.value);
        const isPropType = type_options.some(type => prevState == type)
        return isPropType ? value : `${prevState}, ${value}`;
      } else
        return value;
    });
  };

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
          <div className="z-10 relative flex items-center bg-secondary rounded-full shadow mt-5">
            <div className={`relative rounded-full hover:bg-[#C0C7CA] cursor-pointer w-full text-left ${style.inputContainer}`}>
              <div className="flex items-center text-[#393B3D] text-sm font-bold absolute top-1 left-7">
                <MdOutlineLocationOn className="mr-1" size={20} color="#A1A7AA" />
                Localização
              </div>
              <input
                value={location}
                type="text"
                onChange={(value) => changeLocationHandler(value.target.value)}
                className={`mt-1 pl-8 text-[#808487] h-[64px] w-full rounded-full text-ellipsis whitespace-nowrap overflow-hidden ${style.input}`}
                placeholder="Qual é a Localização?"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-0.5 h-8 bg-[#D0D5D8]"></div>
            <div
              onClick={() => setShowBedroomsSelect(prevState => !prevState)}
              onKeyDown={() => setShowBedroomsSelect(prevState => !prevState)}
              className={`relative flex items-center justify-between hover:bg-[#C0C7CA] cursor-pointer rounded-full w-full ${style.bedroomsContainer}`}
            >
              <div className='text-left w-full'>
                <div className="flex items-center text-[#393B3D] text-sm font-bold absolute top-1 left-6">
                  <MdOutlineBed className="mr-2" size={20} color="#A1A7AA" />
                  Nº de Quartos
                </div>
                <input
                  value={bedroomsQtd}
                  type="text"
                  onChange={(value) => bedroomsQtdHandler(value.target.value)}
                  className={`mt-1 pl-6 text-[#808487] h-[64px] w-full rounded-full text-ellipsis whitespace-nowrap overflow-hidden ${style.inputSearch}`}
                  placeholder="Quantos Quartos?"
                />
              </div>
              <button className="flex text-secondary font-bold absolute top-3 right-2 bg-primary p-2 border border-primary rounded-full hover:bg-primaryHover">
                {location.length > 0 || bedroomsQtd.length > 0
                  ? <><MdOutlineSearch color="#FFF" size={26} className="mr-1" /> Buscar</>
                  : <MdOutlineSearch color="#FFF" size={26} />
                }
              </button>
            </div>

            {(location.length > 0 && showLocationSelect) &&
              <div className="z-10 absolute top-20 left-0 bg-secondary rounded-xl py-3 shadow cursor-default">
                <h2 className="text-sm text-[#A1A7AA] pb-3 px-3">Busque por cidade, região, bairro ou código</h2>
                {addressList.map(ad => {
                  return (
                    <button
                      key={ad.id}
                      className="flex hover:bg-[#F4F6F9] cursor-pointer px-3 w-full"
                      onClick={() => clickLocationHandler(ad)}
                    >
                      <MdOutlineLocationOn className="mr-1" size={20} color="#A1A7AA" />
                      <div className="text-left pb-3">
                        <h2 className="text-sm text-[#393B3D]">
                          { ad.street }
                        </h2>
                        <span className="text-xs text-[#4E5254] text-left">
                          {`${ad.neighborhood}, ${ad.city} - ${ad.state}`}
                        </span>
                      </div>
                    </button>
                  )
                })}
                {addressList.length < 1 && <div>Nenhum local foi encontrado</div>}
              </div>
            }

            {showBedroomsSelect &&
              <div className="text-left absolute top-20 right-[100px] bg-secondary rounded-xl p-3 shadow cursor-default">
                <h2 className="text-sm text-[#A1A7AA]">Número de Quartos</h2>
                <div className="border-b-2 border-[#E1E5E9] flex items-center justify-between py-2">
                  {btns.map(btn => {
                    return (
                      <button
                        key={btn.text}
                        className={`text-sm font-semibold py-1 px-2 rounded-full ${btn.active ? 'text-purple border border-purple bg-[#F7F4F9]' : 'text-[#555555]'}`}
                        onClick={() => changeBedroomsHandler(btn)}
                      >
                        { btn.text }
                      </button>
                    )
                  })}
                </div>

                <div>
                  <h2 className="text-sm text-[#A1A7AA] p-3 pl-0">Tipo de Propriedade</h2>
                    <select
                      value={propType}
                      onChange={(value) => changePropTypeHandler(value.target.value)}
                      className="border border-[#D0D5D8] w-full rounded-md py-1 text-[#4E5254] focus:border focus:shadow focus:outline-0"
                    >
                      <option value='' disabled className="bg-[#D0D5D8]">Todos os tipos</option>
                      {SELECT.map(item => {
                        return (
                          <option key={item.value} value={item.value}>
                            { item.label }
                          </option>
                        )
                      })}
                    </select>
                </div>
              </div>
            }
          </div>
      }
    </>
  )
};

export default Search;