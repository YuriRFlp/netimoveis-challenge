import { FaExternalLinkAlt } from "react-icons/fa";
import MultiCarousel from "@/components/shared/carousel/carousel";
import { FlatAdsProps } from "@/interfaces";
import flats from '@/assets/flats.json';
import FlatCard from "../shared/flatCard/flatCard";
import { Flat } from "@/classes";
import Flat1 from '@/assets/images/flat-1.png';
import Flat2 from '@/assets/images/flat-2.png';
import Flat3 from '@/assets/images/flat-3.png';

const FlatAds = ({ mobile }: FlatAdsProps) => {
  return (
    <section className={`${mobile ? 'mx-4' : 'mx-32'} my-14`}>
      <h2 className={`flex text-[#393B3D] font-bold ${mobile ? 'text-xl' : 'text-2xl'}`}>
        Novos Anúncios em
        <span className="text-primary font-bold ml-1">
          Belo Horizonte
        </span>
      </h2>
      <button className="flex items-center text-blue my-1 mb-6">
        Ver todos os imóveis <FaExternalLinkAlt className="ml-2" color="#2362AF" size={10} />
      </button>
      <MultiCarousel
        mobile={mobile}
        items={
          flats.map((flat, index) => {
            const flat_instance = new Flat(
              flat.City, flat.Title, flat.Author, flat.Rooms, flat.Tags, flat.Price
            );
            return (
              <FlatCard
                key={index}
                city={flat_instance.city}
                title={flat_instance.title}
                author={flat_instance.author}
                rooms={flat_instance.rooms}
                tags={flat_instance.tags}
                price={flat_instance.price}
                image={index % 2 > 0 ? Flat1 : index < 4 ? Flat3 : Flat2}
                showIcons={index % 2 == 0}
                mobile={mobile}
              />
            )
          })
        }
      />
    </section>
  )
};

export default FlatAds;