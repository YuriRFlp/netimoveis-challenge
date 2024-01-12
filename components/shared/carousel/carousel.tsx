import { CarouselProps } from "@/interfaces";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3.5,
    slidesToSlide: 3.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1.003,
    slidesToSlide: 1.003,
  },
};

const MultiCarousel = ({mobile, items} : CarouselProps) => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={!mobile}
      responsive={responsive}
      infinite={true}
      autoPlay={mobile}
      autoPlaySpeed={4000}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
    >
      {items.map(item => {
        return (
          <div key={item} >{ item }</div>
        )
      })}
    </Carousel>
  )
};

export default MultiCarousel;