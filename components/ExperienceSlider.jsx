import Image from "next/image";
import { RxArrowTopRight } from "react-icons/rx";

export const experienceData = [
  {
    title: "VibeCopilot",
    location: "Malad, Mumbai",
    path: "/vibecopilot.png",
    role: "Summer Tech Intern",
    description: "(Full Stack Development & Database Engineering)",
    date: "May 2026 – July 2026",
    details: [
      "Developed and deployed production-ready full-stack web applications and interactive dashboards using React, Django, and PostgreSQL for enterprise use cases.",
      "Designed relational database schemas, optimized SQL queries, and integrated backend services to improve application scalability and data management.",
      "Built and integrated secure RESTful APIs, enabling seamless communication between frontend interfaces, backend services, and databases.",
      "Developed and deployed machine learning models within web applications to automate workflows and deliver intelligent, data-driven features.",
      "Collaborated with cross-functional teams to deliver software solutions for high-profile clients including Horizon and Arkade Developers, contributing to scalable dashboards, automation tools, and client-specific features."
    ]
  },
  {
    title: "TMSL",
    location: "BKC, Mumbai",
    path: "/tmsl.png",
    role: "Technical Intern",
    description: "(Web Development, Data Analytics & Database Management)",
    date: "May 2025 – July 2025",
    details: [
      "Developed 15+ web development and database projects using React, Node.js, and Microsoft SQL Server, translating business requirements into production-ready solutions.",
      "Built interactive dashboards and internal management tools to improve business workflows and operational efficiency.",
      "Designed and optimized SQL queries, stored procedures, and relational database schemas for efficient data storage and retrieval.",
      "Collaborated with development teams during planning meetings, contributing technical ideas, feature improvements, and sprint deliverables."
    ]
  },
  {
    title: "Somaiya Research",
    location: "K. J. Somaiya College of Engineering, Mumbai",
    path: "/kjsce.png",
    role: "Stock Analysis & Research Intern",
    description: "(Machine Learning & Financial Data Analytics)",
    date: "Dec 2024 – Feb 2025",
    details: [
      "Developed InvestIQ, an AI-powered stock analysis platform using Python, Streamlit, Pandas, and Scikit-learn.",
      "Built ML pipelines for preprocessing, feature engineering, and forecasting using Linear Regression, XGBoost, and CNN-LSTM.",
      "Integrated technical indicators, sentiment analysis, portfolio optimization, and backtesting."
    ]
  },
  {
    title: "Somaiya Creative",
    location: "K. J. Somaiya College of Engineering, Mumbai",
    path: "/kjsce.png",
    role: "Creative Team Intern",
    description: "(Design & Communications)",
    date: "Jan 2024",
    details: [
      "Designed brochures, banners, and promotional material for admission campaigns.",
      "Maintained branding and communication assets with faculty."
    ]
  },
];

export const ExperienceCard = ({ item, onClick, isSelected }) => (
  <div
    onClick={onClick}
    className={`bg-transparent border ${isSelected ? 'border-accent bg-white/5' : 'border-white/10'} h-full rounded-lg px-6 py-6 flex flex-col group cursor-pointer hover:bg-white/5 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm`}
  >
    <div className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-x-4">
          <div className="w-[72px] h-[72px] bg-white rounded-lg flex items-center justify-center p-2 shrink-0">
            <Image
              src={item.path}
              alt={item.title}
              width={64}
              height={64}
              className="object-contain max-h-full"
            />
          </div>
          <div className="flex flex-col text-left">
            <div className="text-xl font-bold leading-tight">{item.title}</div>
            <div className="text-xs text-white/60 mt-0.5">{item.location}</div>
            <div className="text-sm font-semibold text-accent mt-1.5">{item.date}</div>
          </div>
        </div>
        {!isSelected && (
          <div className="text-2xl mt-1">
            <RxArrowTopRight
              className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
              aria-hidden
            />
          </div>
        )}
      </div>
      <div className="flex flex-col flex-grow text-left">
        <div className="text-lg font-semibold text-white/90">{item.role}</div>
        <div className="text-sm italic text-accent mt-1 leading-snug">
          {item.description}
        </div>
      </div>
    </div>
  </div>
);

const ExperienceSlider = ({ onSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-6 lg:gap-6 pb-20 xl:pb-0">
      {experienceData.map((item, i) => (
        <ExperienceCard key={i} item={item} onClick={() => onSelect(item)} />
      ))}
    </div>
  );
};

export default ExperienceSlider;
