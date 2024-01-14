import { PlaceCardProps } from '@/interfaces';
import Image from 'next/image';

const PlaceCard = ({ name, state, placeId, image, content, mobile } : PlaceCardProps) => {
  return (
    <div className='w-[294px] mb-8 cursor-pointer'>
      <div className='relative rounded-xl h-[192px] mb-6'>
        <Image src={image} alt='Imagem dos Estados' className='rounded-xl' />
        <h2 style={{ textShadow: '1px 1px #333' }} className='absolute bottom-2 left-4 font-bold text-secondary text-2xl'>
          { state.name }
        </h2>
      </div>

      {content.map((data, index) => {
        return (
          <div key={index} className={`flex items-center text-sm my-2 ml-4 ${mobile ? 'text-[#4E5254]' : 'text-[#808587]'}`}>
            <span className='block w-1.5 h-1.5 bg-primary rounded-full mr-2' />
            { `${data} ${name}` }
          </div>
        )
      })}
    </div>
  )
};

export default PlaceCard;