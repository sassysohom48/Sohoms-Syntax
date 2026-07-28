import { motion } from "framer-motion";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaPython, FaJava, FaNodeJs, FaReact, FaGitAlt, FaDocker, FaBrain, FaRobot, FaChartLine, FaProjectDiagram, FaEye, FaComments
} from "react-icons/fa";
import {
  SiJavascript, SiC, SiCsharp, SiTensorflow, SiPytorch, SiScikitlearn, SiStreamlit, SiFlask, SiFastapi, SiExpress, SiDotnet, SiPostgresql, SiMysql, SiMongodb, SiMicrosoftsqlserver, SiPlotly
} from "react-icons/si";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          { Icon: FaPython, name: "Python" },
          { Icon: FaJava, name: "Java" },
          { Icon: SiJavascript, name: "JavaScript" },
          { Icon: SiC, name: "C" },
          { Icon: SiCsharp, name: "C#" },
        ],
      },
      {
        title: "ML/AI",
        icons: [
          { Icon: FaBrain, name: "Neural Networks" },
          { Icon: SiTensorflow, name: "TensorFlow" },
          { Icon: SiPytorch, name: "PyTorch" },
          { Icon: SiScikitlearn, name: "Scikit-learn" },
          { Icon: FaChartLine, name: "XGBoost" },
          { Icon: FaProjectDiagram, name: "LSTM" },
          { Icon: FaRobot, name: "BERT" },
          { Icon: FaEye, name: "YOLOv5" },
          { Icon: FaComments, name: "NLP" },
        ],
      },
      {
        title: "Web",
        icons: [
          { Icon: FaReact, name: "React" },
          { Icon: SiStreamlit, name: "Streamlit" },
          { Icon: SiFlask, name: "Flask" },
          { Icon: SiFastapi, name: "FastAPI" },
          { Icon: FaNodeJs, name: "Node.js" },
          { Icon: SiExpress, name: "Express.js" },
          { Icon: SiDotnet, name: "ASP.NET" },
        ],
      },
      {
        title: "Databases & Tools",
        icons: [
          { Icon: SiPostgresql, name: "PostgreSQL" },
          { Icon: SiMysql, name: "MySQL" },
          { Icon: SiMongodb, name: "MongoDB" },
          { Icon: SiMicrosoftsqlserver, name: "SQL Server" },
          { Icon: FaGitAlt, name: "Git" },
          { Icon: FaDocker, name: "Docker" },
          { Icon: FaProjectDiagram, name: "LangGraph" },
          { Icon: SiPlotly, name: "Plotly" },
        ],
      },
    ],
  },
  {
    title: "certifications",
    info: [
      {
        title: "7 Days of Data Science",
        stage: "Certificate",
        date: "August 2023",
        link: "https://drive.google.com/file/d/1ZSvby8ghjq6O1-IsvQVjtWYHrSSe0JNC/view",
      },
      {
        title: "Data Structures in C++",
        stage: "Certificate",
        date: "October 2024",
        link: "https://drive.google.com/file/d/14O2G3K9AWknSouGta22kQMwy0wbOV3ee/view",
      },
      {
        title: "Scientific Computing with Python",
        stage: "freeCodeCamp",
        date: "November 2024",
        link: "https://drive.google.com/file/d/12HSeiXj9AqVZFDGv5bq9qcPOU7xzGnw-/view",
      },
      {
        title: "EDA & Data Visualization",
        stage: "Scaler Topics",
        date: "April 2025",
        link: "https://drive.google.com/file/d/1iyuifBEGy6GL_1RVJkDFPDDcEE5TWnen/view",
      },
      {
        title: "First Steps in Making the Business Case for Sustainability",
        stage: "Certificate",
        date: "April 2026",
        link: "https://drive.google.com/file/d/1QIjOkhuRTuQ1eTd2-ofJf9NuzT1tpIF2/view",
      },
      {
        title: "Introduction to Applied Business Analytics",
        stage: "Certificate",
        date: "April 2026",
        link: "https://drive.google.com/file/d/1CaC4Pj9CJFOPWTolWew_d2aHpyE7WqQK/view",
      },
      {
        title: "Psychological Safety",
        stage: "Certificate",
        date: "April 2026",
        link: "https://drive.google.com/file/d/1ELg_A1v1LIzo8qK73vw0Jopb2AyCLqR5/view",
      },
    ],
  },
  {
    title: "leadership & activities",
    info: [
      {
        title: "Head of Public Relations",
        stage: "DataZen, Somaiya Vidyavihar University",
        date: "July 2025 - July 2026",
      },
      {
        title: "Volunteer",
        stage: "South Side Story, Red FM",
        date: "December 2024",
      },
      {
        title: "Core Member",
        stage: "Amra Sobai Probasi Seva Mandal (NGO)",
        date: "2020 - Present",
      },
      {
        title: "Organising Group",
        stage: "KJ Somaiya College of Engineering",
        date: "July 2023 - April 2024",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 relative">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px] z-10"
      >
        <Avatar />
      </motion.div>

      <div className="absolute top-[160px] xl:top-0 left-0 w-full h-[calc(100vh-160px)] xl:h-full overflow-y-auto overflow-x-hidden scrollbar-none xl:scrollbar xl:scrollbar-thin xl:scrollbar-thumb-accent xl:scrollbar-track-white/10 z-30">
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 pt-8 xl:pt-32 pb-32 xl:pb-32 text-center xl:text-left">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            className="h2 min-h-[96px] xl:min-h-0 mb-8"
          >
            I'm a <span className="text-accent">
              <TypeAnimation
                sequence={[
                  '',
                  1150,
                  'Student.',
                  500,
                  'Data Scientist.',
                  500,
                  'ML Engineer.',
                  500,
                  'AI Engineer.',
                  500,
                  'Software Developer.',
                  500,
                  'Data Engineer.',
                  500,
                  'Business Analyst.',
                  500,
                  'PR & Operations Specialist.',
                  500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="custom-type-animation"
              />
            </span>
            <style jsx global>{`
              .custom-type-animation::after {
                color: white;
              }
            `}</style>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I'm a <span className="text-accent">B.Tech student in Artificial Intelligence & Data Science</span> (Hons. in <span className="text-accent">Data Engineering</span>) at K.J. Somaiya College of Engineering. I enjoy creating products that combine AI, software engineering, and data to solve real-world problems. Outside of coding, I love leading communities, collaborating with people, and continuously exploring new experiences. Always open to connecting with fellow builders and learners.
          </motion.p>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-auto pb-40 xl:pb-0 xl:h-[480px] justify-center"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-8 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => {
              const rowContent = (
                <div
                  className={`flex-1 flex flex-col md:flex-row w-full gap-x-2 items-start text-left text-white/60 ${item.link && "cursor-pointer group"}`}
                >
                  {/* title */}
                  <div className={`font-light mb-2 md:mb-0 md:w-[250px] shrink-0 ${item.link && "group-hover:translate-x-1 group-hover:text-accent transition-all duration-300"}`}>{item.title}</div>
                  <div className="hidden md:flex shrink-0">-</div>
                  <div className="flex-1">
                    {(item.stage || item.date) ? (
                      <div className="leading-snug">
                        {item.stage && <span>{item.stage}</span>}
                        {item.stage && item.date && <span className="hidden md:inline mx-2">-</span>}
                        {item.date && (
                          <span className={`text-accent block md:inline mt-1 md:mt-0 ${item.link && "group-hover:text-white transition-colors duration-300"}`}>
                            {item.date}
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="flex gap-x-4 flex-wrap gap-y-4">
                        {item.icons?.map((iconObj, iconI) => {
                          const Icon = iconObj.Icon;
                          return (
                            <div key={iconI} className="group relative text-2xl text-white flex items-center justify-center cursor-pointer">
                              <Icon />
                              {/* tooltip */}
                              <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bottom-full mb-2 bg-white text-primary text-[10px] font-bold uppercase py-1 px-2 rounded w-max z-10 pointer-events-none shadow-lg">
                                {iconObj.name}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              );

              return item.link ? (
                <a key={itemI} href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full">
                  {rowContent}
                </a>
              ) : (
                <div key={itemI} className="w-full">
                  {rowContent}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default About;
