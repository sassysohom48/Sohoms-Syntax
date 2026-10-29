import Image from "next/image";


import { HiArrowRight } from "react-icons/hi2";

const ResumeBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 scale-75 xl:scale-[0.80] transform origin-center xl:origin-left">
      <a
        href="https://drive.google.com/file/d/1JIQfpP7GF3uf9OVri9eR9COVGuLknbEm/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <svg
          viewBox="0 0 200 200"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] pointer-events-none select-none"
        >
          <path
            id="textPath"
            d="M 100, 100 m -65, 0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
            fill="transparent"
          />
          <text fill="white" fontSize="24" fontWeight="bold">
            <textPath href="#textPath" startOffset="0%" textLength="395" lengthAdjust="spacing">
              RESUME . RESUME .
            </textPath>
          </text>
        </svg>
        <HiArrowRight
          className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </a>
    </div>
  );
};

export default ResumeBtn;
