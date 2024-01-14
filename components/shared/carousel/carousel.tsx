import { CarouselProps } from "@/interfaces";
import Carousel from "react-multi-carousel";


const MultiCarousel = ({mobile, items, desktopBreakPoint, mobileBreakPoint} : CarouselProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: desktopBreakPoint,
      slidesToSlide: desktopBreakPoint,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: mobileBreakPoint,
      slidesToSlide: mobileBreakPoint,
    },
  };

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