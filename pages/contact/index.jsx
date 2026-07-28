import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const object = Object.fromEntries(formData);

    let newErrors = {};
    if (!object.name.trim()) newErrors.name = "Name is required";
    if (!object.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(object.email)) newErrors.email = "Please enter a valid email";
    if (!object.subject.trim()) newErrors.subject = "Subject is required";
    if (!object.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsLoading(true);

    object.access_key = "350d6005-7f82-4c6c-83f0-49a5244cb7f7";
    const json = JSON.stringify(object);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    })
      .then(async (response) => {
        const jsonRes = await response.json();
        if (response.status === 200) {
          alert("Thank you! I will get back to you ASAP.");
          event.target.reset();
        } else {
          console.log(jsonRes);
          alert(jsonRes.message || "Something went wrong! Please try again.");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong! Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  
  return (
    <div className="h-full bg-primary/30 relative">
      <div className="absolute top-[160px] xl:top-0 left-0 w-full h-[calc(100vh-160px)] xl:h-full overflow-y-auto scrollbar-none xl:scrollbar xl:scrollbar-thin xl:scrollbar-thumb-accent xl:scrollbar-track-white/10 z-30">
        <div className="container mx-auto pt-8 xl:pt-32 pb-40 xl:pb-32 text-center xl:text-left flex items-start xl:items-center justify-center min-h-full">
          {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
            noValidate
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <div className="w-full flex flex-col relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`input pr-6 ${errors.name ? 'border-accent' : 'border-white/20'}`}
                  disabled={isLoading}
                />
                <span className="absolute right-4 top-3 text-accent text-xl">*</span>
                {errors.name && <span className="text-accent text-xs absolute -bottom-5 left-2">{errors.name}</span>}
              </div>
              <div className="w-full flex flex-col relative">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className={`input pr-6 ${errors.email ? 'border-accent' : 'border-white/20'}`}
                  disabled={isLoading}
                />
                <span className="absolute right-4 top-3 text-accent text-xl">*</span>
                {errors.email && <span className="text-accent text-xs absolute -bottom-5 left-2">{errors.email}</span>}
              </div>
            </div>

            <div className="flex gap-x-6 w-full">
              <div className="w-full flex flex-col relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (Optional)"
                  className="input border-white/20"
                  disabled={isLoading}
                />
              </div>
              <div className="w-full flex flex-col relative">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={`input pr-6 ${errors.subject ? 'border-accent' : 'border-white/20'}`}
                  disabled={isLoading}
                />
                <span className="absolute right-4 top-3 text-accent text-xl">*</span>
                {errors.subject && <span className="text-accent text-xs absolute -bottom-5 left-2">{errors.subject}</span>}
              </div>
            </div>

            <div className="w-full flex flex-col relative">
              <textarea
                name="message"
                placeholder="Message..."
                className={`textarea pr-6 ${errors.message ? 'border-accent' : 'border-white/20'}`}
                disabled={isLoading}
              />
              <span className="absolute right-4 top-3 text-accent text-xl">*</span>
              {errors.message && <span className="text-accent text-xs absolute -bottom-5 left-2">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>

              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
