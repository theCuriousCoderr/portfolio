import { Email, GitHub, LinkedIn, X } from "@mui/icons-material";
import React, { useState } from "react";
import SendMail from "./SendMail";
import { NavLink } from "react-router-dom";

function MyInfo({ view, goTo }) {

  const [openEmail, setOpenEmail] = useState(false)
  const socialLinks = [
    { link: "https://github.com/Lambdola", icon: <GitHub /> },
    {
      link: "https://www.linkedin.com/in/oladimeji-olalekan-a24a58250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      icon: <LinkedIn />,
    },
    { link: "https://x.com/elijahdimeji549?s=09", icon: <X /> },
    { link: "email", icon: <Email /> },
  ];

  return (
    <header className="space-y-2 xl:space-y-5 mb-20 xl:w-1/2 xl:h-screen xl:p-20 bg-red-40">
      <h1 className="font-bold text-slate-300 text-3xl xl:text-[3rem] font-inter">
        Olalekan Oladimeji
      </h1>
      <h2 className="bg-clip-text font-medium text-transparent bg-gradient-to-r from-pink-500 from-10% to-violet-500 text-lg xl:text-[1.5rem] font-inter xl:font-semibold">
        <p>Full-Stack Web Developer</p>
      </h2>
      <p className="text-slate-500 xl:w-[80%] xl:text-xl">
        I build responsive, optimised pixel-perfect and scalable web
        applications.
      </p>

      <div className="text-slate-500 hidden xl:block w-1/3 text-sm">
        <ul className="space-y-5 my-20">
          {[
            { section: "aboutMe", text: "ABOUT" },
            { section: "myExperience", text: "EXPERIENCE" },
            { section: "myProjects", text: "PROJECTS" },
          ].map((items) => {
            return (
              <li
                key={items.text}
                onClick={() => goTo(items.section)}
                className="group flex items-center gap-2"
              >
                <div
                  className={`group-hover:w-16 group-hover:bg-white ${
                    view === items.section
                      ? "w-16 bg-white"
                      : "w-5 bg-slate-500"
                  } h-[.2px] transition-all`}
                ></div>
                <p
                  className={`group-hover:font-semibold group-hover:text-slate-300 ${
                    view === items.section
                      ? "font-semibold text-slate-300"
                      : "font-normal text-slate-500"
                  } transition-all`}
                >
                  {items.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <ul className="flex gap-3 xl:gap-5 items-center mt-5">
          {socialLinks.map((items) => (
            <li key={items.link} className="cursor-pointer">
              {items.link !== "email" ? (
                <NavLink target="_blank" href={items.link}>
                  <div className="text-slate-400 bg hover:text-pink-500 ">
                    {items.icon}{" "}
                  </div>{" "}
                </NavLink>
              ) : (
                <a href="mailto:elijahdimeji549@gmail.com">
                   <div className="text-slate-400 bg hover:text-pink-500 ">
                    {items.icon}{" "}
                  </div>{" "}
                </a>
                // Mail Icon Button
                // <button onClick={() => setOpenEmail(!openEmail)}>
                //   <div className={` hover:text-pink-500 ${openEmail ? "text-pink-500" : "text-slate-400"} `}>
                //     {items.icon}
                //   </div>
                // </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div>
        {openEmail && <SendMail />}
      </div>
    </header>
  );
}

export default MyInfo;
