import Carousel from "react-multi-carousel";

function CarouselImg({ children }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      arrows={true}
      infinite={true}
      autoPlay={true}
      showDots={false}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  );
}

export default CarouselImg;
