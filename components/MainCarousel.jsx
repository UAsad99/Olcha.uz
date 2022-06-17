import { SplideSlide } from "@splidejs/react-splide";
import { SpliteSlider } from "components";
import { mainSlideImages } from "data";
import Image from "next/image";
import Link from "next/link";

export default function MainCarousel() {
  return (
    <div className="mb-10">
      <SpliteSlider images={mainSlideImages} options={{ rewind: true, loop: true, autoPlay: true, breakpoints: { 768: { arrows: false } } }}>
        {mainSlideImages.map((item, i) => (
          <SplideSlide key={`${item.destination}_${i}`}>
            <Link href={item.destination}>
              <a className='relative'>
                <Image
                  src={item.image}
                  alt={`Olcha Slider Image ${i}`}
                  width={item.width}
                  height={item.height}
                  className="rounded-xl"
                />
              </a>
            </Link>
          </SplideSlide>
        ))}
      </SpliteSlider>
    </div>
  );
}
