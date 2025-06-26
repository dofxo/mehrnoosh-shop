"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

const heroSlides = [
  {
    imageUrl: "/images/landing/hero/ps5.jpg",
    altText: "PlayStation 5",
  },

  {
    imageUrl: "/images/landing/hero/house.jpg",
    altText: "Modern house",
  },
  {
    imageUrl: "/images/landing/hero/watch.jpg",
    altText: "Smart watch",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <section className="relative h-[430px] w-full overflow-hidden">
      {/* Custom Navigation Arrows - Left Side */}
      <div className="absolute bottom-[50px] left-[3%] z-10 flex transform gap-4">
        <button className="button-prev rounded-[50%] bg-white p-2 transition-all hover:opacity-[50%]">
          <ChevronRight size={20} />
        </button>
        <button className="button-next rounded-[50%] bg-white p-2 transition-all hover:opacity-[50%]">
          <ChevronLeft size={20} />
        </button>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="h-full w-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {heroSlides.map((slide, idx) => (
          <SwiperSlide key={idx} className="!h-[430px] !w-full">
            <div
              className="h-full w-full rounded-[40px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
              role="img"
              aria-label={slide.altText}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Small slider with navigation buttons */}
      <div className="invisible absolute bottom-0 right-0 z-10 flex h-[80px] w-[250px] items-center justify-between rounded-[30px_0px_0px_0px] bg-background px-6 md:visible">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`w-[40px] rounded-[50%] transition-all ${activeIndex === index ? "border-primary/2 scale-125 border border-2 bg-white" : "bg-white"}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <Image
              src={`/images/landing/hero/s${index + 1}.jpg`}
              alt={index + 1}
              width={0}
              height={0}
              layout="responsive"
              className="rounded-[50%]"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
