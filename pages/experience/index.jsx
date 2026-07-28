import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ExperienceSlider, { ExperienceCard } from "../../components/ExperienceSlider";
import { fadeIn } from "../../variants";
import { FaChevronLeft } from "react-icons/fa";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <div className="h-full bg-primary/30 relative">
      <Circles />
      <Bulb />
      <div className="absolute top-[160px] xl:top-0 left-0 w-full h-[calc(100vh-160px)] xl:h-full overflow-y-auto scrollbar-none xl:scrollbar xl:scrollbar-thin xl:scrollbar-thumb-accent xl:scrollbar-track-white/10 flex items-start xl:items-center z-30">
        <div className="container mx-auto pt-8 xl:pt-36 pb-40 xl:pb-36">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Professional <br /> Experience <span className="text-accent">.</span>
            </motion.h2>

            <AnimatePresence>
              {selectedExperience && (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="mt-8 flex flex-col items-center lg:items-start"
                >
                  <button 
                    onClick={() => setSelectedExperience(null)} 
                    className="flex items-center gap-x-2 text-white/60 hover:text-accent transition-all duration-300 mb-6 text-sm uppercase tracking-[2px]"
                  >
                    <FaChevronLeft /> Back to all
                  </button>
                  <div className="w-full max-w-[400px]">
                     <ExperienceCard item={selectedExperience} isSelected={true} onClick={() => {}} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* slider or details */}
          <div className="w-full xl:max-w-[65%]">
            <AnimatePresence mode="wait">
              {selectedExperience ? (
                <motion.div 
                  key="details"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="bg-transparent rounded-2xl h-full xl:min-h-[480px] overflow-y-auto pr-4"
                >
                  <div className="flex items-center gap-x-6 mb-6">
                     <div className="w-[100px] h-[100px] bg-white rounded-lg flex items-center justify-center p-2 shrink-0">
                        <Image src={selectedExperience.path} width={80} height={80} alt="logo" className="object-contain" />
                     </div>
                     <div className="flex flex-col">
                        <div className="text-4xl md:text-5xl font-bold">{selectedExperience.title}</div>
                        <div className="text-lg text-white/60 mt-1">{selectedExperience.location}</div>
                     </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-6 mb-6 gap-y-2">
                     <div className="text-2xl font-semibold text-white">{selectedExperience.role}</div>
                     <div className="text-lg font-bold text-accent">{selectedExperience.date}</div>
                  </div>
                  <ul className="list-none space-y-4">
                    {selectedExperience.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-x-4 text-white/80 leading-relaxed text-base md:text-lg">
                        <span className="text-accent mt-1.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="slider"
                  variants={fadeIn("down", 0.6)}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  <ExperienceSlider onSelect={setSelectedExperience} />
                </motion.div>
              )
              }
            </AnimatePresence>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Experience;
