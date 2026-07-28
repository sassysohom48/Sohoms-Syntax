

import {
  RiPhoneLine,
  RiWhatsappLine,
  RiMailLine,
  RiLinkedinLine,
  RiGithubLine,
} from "react-icons/ri";

export const socialData = [
  {
    name: "WhatsApp",
    link: "https://wa.me/919967164411",
    Icon: RiWhatsappLine,
  },
  {
    name: "Phone",
    link: "tel:+919967164411",
    Icon: RiPhoneLine,
  },
  {
    name: "Personal Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=sohommallick69@gmail.com",
    Icon: RiMailLine,
  },
  {
    name: "Edu Email",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=sohom.m@somaiya.edu",
    Icon: RiMailLine,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sohom-mallick-245965292/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/sassysohom48",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <a
          key={i}
          title={social.name}
          href={social.link}
          target={social.link.startsWith("http") ? "_blank" : undefined}
          rel={social.link.startsWith("http") ? "noreferrer noopener" : undefined}
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Socials;
