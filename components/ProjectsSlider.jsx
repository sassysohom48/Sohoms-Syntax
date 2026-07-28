import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

const projectData = [
  {
    Icon: RxDesktop,
    title: "InvestIQ – AI-Powered NSE Stock Analysis Platform",
    techStack: "Python, Flask, Streamlit, Scikit-learn, XGBoost, CNN-LSTM, Pandas, NumPy, Matplotlib, Google Sheets API, Yahoo Finance API, Google Cloud Functions",
    link: "https://github.com/sassysohom48/InvestIQ",
  },
  {
    Icon: RxDesktop,
    title: "AURA – Autonomous Unified Reasoning Assistant",
    techStack: "Python, FastAPI, React, Next.js, TypeScript, LangGraph, PostgreSQL, pgvector, Tailwind CSS",
    link: "https://github.com/sassysohom48/AURA",
  },
  {
    Icon: RxDesktop,
    title: "BoviFace – AI-Based Cattle & Buffalo Breed Recognition",
    techStack: "React Native, Flask, PyTorch, YOLOv5, Supabase, OpenCV, Computer Vision",
    link: "https://github.com/sassysohom48/BoviFace",
  },
  {
    Icon: RxDesktop,
    title: "PM2.5 Ground-Level Detection using UNet",
    techStack: "Python, Streamlit, XGBoost, Pandas, NumPy, OpenAQ API, ERA5 Climate Data, Jupyter Notebook, Matplotlib",
    link: "https://github.com/r9jdp/PM2.5-Unet",
  },
];

const ProjectsSlider = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6 lg:gap-6 pb-20 xl:pb-0">
      {projectData.map((item, i) => (
        <a href={item.link} target="_blank" rel="noopener noreferrer" key={i} className="bg-transparent border border-white/10 h-full rounded-lg px-6 py-6 flex flex-col group cursor-pointer hover:bg-white/5 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
          <div className="flex flex-col h-full">
            {/* Title and Icon row */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-x-3">
                <div className="text-2xl text-accent">
                  <item.Icon aria-hidden />
                </div>
                <div className="text-xl font-bold">{item.title.split(' – ')[0]}</div>
              </div>
              
              {/* arrow */}
              <div className="text-2xl">
                <RxArrowTopRight
                  className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                  aria-hidden
                />
              </div>
            </div>

            {/* Subheading row */}
            {item.title.split(' – ')[1] && (
              <div className="text-sm italic text-white/60 mb-6">
                {item.title.split(' – ')[1]}
              </div>
            )}

            {/* Tech Stack */}
            <p className="text-sm leading-relaxed text-white/70 mt-auto pt-4 border-t border-white/5">
              <span className="font-semibold text-accent">Tech Stack:</span> {item.techStack}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectsSlider;
