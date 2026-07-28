import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ProjectsSlider from "../../components/ProjectsSlider";
import { fadeIn } from "../../variants";


export const serviceData = [];

const Projects = () => {
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
              className="h2 xl:mt-8"
            >
              Projects <span className="text-accent">.</span>
            </motion.h2>
          </div>


          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ProjectsSlider />
          </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Projects;
