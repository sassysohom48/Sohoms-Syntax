import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ProjectsSlider from "../../components/ProjectsSlider";
import { fadeIn } from "../../variants";

const Projects = () => {
  return (
    <div className="h-full bg-primary/30 relative">
      <Circles />
      <Bulb />
      <div className="absolute top-[140px] xl:top-0 left-0 w-full h-[calc(100vh-140px)] xl:h-full overflow-y-auto scrollbar-none xl:scrollbar xl:scrollbar-thin xl:scrollbar-thumb-accent xl:scrollbar-track-white/10 flex items-start xl:items-center z-30">
        <div className="container mx-auto pt-6 xl:pt-24 pb-36 xl:pb-24 flex flex-col justify-center w-full">
          {/* Header above */}
          <div className="text-center xl:text-left mb-6 xl:mb-8">
            <motion.h2
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mb-0"
            >
              Projects <span className="text-accent">.</span>
            </motion.h2>
          </div>

          {/* 3 cards horizontally below with right/left navigation arrow */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full"
          >
            <ProjectsSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
