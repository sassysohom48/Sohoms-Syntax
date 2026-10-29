import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { RxDesktop, RxArrowTopRight, RxChevronLeft, RxChevronRight } from "react-icons/rx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const projectData = [
  {
    Icon: RxDesktop,
    title: "AURA – Autonomous Unified Reasoning Assistant",
    techStack: "LangGraph, FastAPI, SQLite, PyWebView, Python, Multi-LLM, Desktop Automation",
    link: "https://github.com/sassysohom48/AURA",
  },
  {
    Icon: RxDesktop,
    title: "InvestIQ – AI-Powered NSE Stock Analysis Platform",
    techStack: "Python, Streamlit, Pandas, Scikit-learn, Linear Regression, XGBoost, CNN-LSTM",
    link: "https://github.com/sassysohom48/InvestIQ",
  },
  {
    Icon: RxDesktop,
    title: "HeatGuard AI – GenAI Heatwave Prediction & Early Warning System",
    techStack: "Python, Flask, Scikit-learn, Google Gemini, HistGradientBoosting, Pandas, XAI",
    link: "https://github.com/sassysohom48/HeatGuard-AI",
  },
  {
    Icon: RxDesktop,
    title: "JusticeRAG – Retrieval-Augmented Legal Precedent Discovery",
    techStack: "FastAPI, Next.js, Qdrant, BM25, bge-embeddings, Reciprocal Rank Fusion, Google Gemini",
    link: "https://github.com/sassysohom48/JusticeRAG",
  },
  {
    Icon: RxDesktop,
    title: "BoviFace – AI-Based Cattle & Buffalo Breed Recognition",
    techStack: "YOLOv5, Flask, React Native, PyTorch, Supabase, OpenCV, Computer Vision",
    link: "https://github.com/sassysohom48/BoviFace",
  },
  {
    Icon: RxDesktop,
    title: "Sohom's Syntax – Modern Interactive 3D Portfolio",
    techStack: "Next.js 14, React, Tailwind CSS, Framer Motion, tsparticles, Web3Forms",
    link: "https://github.com/sassysohom48/Sohoms-Syntax",
  },
];

const ProjectsSlider = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div className="w-full relative px-8 md:px-12">
      {/* Left Navigation Arrow (Disabled on first slide) */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        aria-label="Previous slide"
        className={`absolute -left-1 md:left-0 top-[115px] -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full border bg-[#131424]/90 flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-md ${
          isBeginning
            ? "opacity-20 border-white/5 cursor-not-allowed text-white/30 pointer-events-none"
            : "border-white/20 hover:bg-accent hover:border-accent text-white/80 hover:text-white group cursor-pointer"
        }`}
      >
        <RxChevronLeft
          className={`text-xl md:text-2xl ${
            !isBeginning ? "group-hover:-translate-x-0.5 transition-transform duration-200" : ""
          }`}
        />
      </button>

      {/* Swiper Slider */}
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onInit={(swiper) => {
          updateNavState(swiper);
        }}
        onSlideChange={(swiper) => {
          updateNavState(swiper);
        }}
        onBreakpoint={(swiper) => {
          updateNavState(swiper);
        }}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={18}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 22,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[285px] md:h-[295px] !pb-10 w-full"
      >
        {projectData.map((item, i) => (
          <SwiperSlide key={i} className="h-full !flex">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-white/10 w-full h-[235px] md:h-[245px] rounded-xl p-4 md:p-5 flex flex-col justify-between group cursor-pointer hover:bg-white/5 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Top row: Icon and Arrow */}
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xl text-accent">
                    <item.Icon aria-hidden />
                  </div>
                  <div className="text-xl">
                    <RxArrowTopRight
                      className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                      aria-hidden
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="text-[15px] md:text-[16px] font-bold text-white leading-tight group-hover:text-accent transition-colors duration-300">
                  {item.title.split(" – ")[0]}
                </div>

                {/* Subtitle */}
                {item.title.split(" – ")[1] && (
                  <div className="text-[11px] md:text-xs italic text-white/60 mt-1 mb-2 line-clamp-2 leading-snug">
                    {item.title.split(" – ")[1]}
                  </div>
                )}

                {/* Tech Stack */}
                <p className="text-[11px] md:text-[11px] leading-relaxed text-white/70 mt-auto pt-2.5 border-t border-white/10">
                  <span className="font-semibold text-accent">Tech Stack:</span>{" "}
                  {item.techStack}
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Navigation Arrow (Disabled on last slide) */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        aria-label="Next slide"
        className={`absolute -right-1 md:right-0 top-[115px] -translate-y-1/2 z-30 w-9 h-9 md:w-10 md:h-10 rounded-full border bg-[#131424]/90 flex items-center justify-center transition-all duration-300 shadow-2xl backdrop-blur-md ${
          isEnd
            ? "opacity-20 border-white/5 cursor-not-allowed text-white/30 pointer-events-none"
            : "border-white/20 hover:bg-accent hover:border-accent text-white/80 hover:text-white group cursor-pointer"
        }`}
      >
        <RxChevronRight
          className={`text-xl md:text-2xl ${
            !isEnd ? "group-hover:translate-x-0.5 transition-transform duration-200" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default ProjectsSlider;
