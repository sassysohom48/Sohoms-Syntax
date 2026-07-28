import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import CodeEditor from "../components/CodeEditor";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* full screen gradient background */}
      <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-primary/10 via-black/30 to-black/10 z-0" />
      
      {/* text */}
      <div className="absolute top-[160px] xl:top-0 left-0 w-full h-[calc(100vh-160px)] xl:h-full overflow-y-auto scrollbar-none xl:scrollbar xl:scrollbar-thin xl:scrollbar-thumb-accent xl:scrollbar-track-white/10 z-30">
        <div className="text-center flex flex-col justify-start xl:justify-center xl:text-left min-h-full h-auto container mx-auto pt-8 xl:pt-32 pb-40 xl:pb-32">
          {/* title */}
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl xl:text-4xl font-bold leading-tight mb-8"
          >
            &ldquo;You only live once, but if you <br />{" "}
            <span className="text-accent">do it right, once is enough&rdquo;</span>
          </motion.h2>

          {/* Code Editor Mockup */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-8 xl:mb-0 w-full"
          >
            <CodeEditor />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[650px] max-h-[600px] absolute -bottom-32 lg:bottom-0 lg:right-[10%] z-40 pointer-events-none"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
