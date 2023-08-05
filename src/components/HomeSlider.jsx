import slides from "@/assets/SliderUrls";
import { useState } from "react";

const HomeSlider = () => {

      const [currentIndex , setCurrentIndex] = useState(0);
      const prevSlide =()=>{
        const isFirstSlide =currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
      };
      const nextSlide =()=>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      }


  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto  px-4 relative group'>
      <div>
        <h1 className="text-center text-black text-2xl">Hi,</h1>
      </div>
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}}
      className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
      </div>

        {/* left arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-xl rounded-full p-2 bg-black/20 text-slate-50 cursor-pointer">
        <button onClick={prevSlide}>prev</button>
      </div>

        {/* right arrow. if use icons then add size={30} after onclick function */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full p-2 bg-black/20 text-slate-50 cursor-pointer">
      <button onClick={nextSlide}>next</button>
      </div>

      {/* slide dots */}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <p className="text-3xl font-bold px-4">.</p>
          </div>
        ))}
      </div>
    </div>
        
  );
};

export default HomeSlider;
