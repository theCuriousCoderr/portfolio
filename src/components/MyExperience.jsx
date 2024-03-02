import React, { useEffect, useState } from "react";
import experienceData from "../utils/experience";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import CV from '../../Olalekan_Oladimeji_Resume.jpg'


function MyExperience({view, expLen}) {
  const [experience, setExperience] = useState('')

  useEffect(() => {
    setExperience(experienceData.slice(0,expLen))
  }, [expLen])


  
  return (
    <div id="myExperience" className="section text-white bg-blue-40 w-full mt-10 xl:mt-40">
      <p className={`xl:hidden font-medium font-inter  ${view === 'myExperience' ? 'sticky bg-slate-900 py-5 text-pink-500 xl:text-white -top-10 xl:relative z-10': 'relative my-5' }`}>CAREER EXPERIENCE</p>
      <ul className="space-y-10">
         {experience && experience.map((items, id) => {
          return (
            <li  key={items.company + items.role} id={id === experience.length-1 ? "last" : "none"} className="group space-y-2 xl:flex xl:items-start xl:space-y-0 bg-red-40  xl:hover:bg-teal-800 xl:hover:bg-opacity-10 xl:p-3 rounded-md">
              <div className="group-hover:text-white flex items-center gap-2 text-xs text-slate-500 xl:w-[35%] bg-red-40">
                <p>{items.period.start}</p>
                <hr className="w-3 text-slate-500" />
                <p>{items.period.end}</p>
              </div>
              <div className="xl:w-2/3 xl:space-y-3 bg-red-30">
              <div  onClick={() => window.open(items.link, '_blank')} className="group-hover:text-teal-200 text-slate-300 flex items-center gap-2">
                <p>{items.role}</p>
                <div className="w-[1px] h-4 bg-slate-200"></div>
                <p>{items.company}</p>
                {items.link && <a href={items.link} target='_blank' className="text-sm -rotate-45 hover:text-blue-600"><ArrowForward sx={{fontSize:20}} /></a> }
              </div>
              <p className="text-slate-500 text-sm group-hover:text-slate-300">{items.desc}</p>
              <ul className="flex flex-wrap w-full gap-2 items-center">
                {items.tools.map((skill) => (
                  <span key={skill} className=" text-emerald-300 text-xs bg-emerald-600 bg-opacity-10 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </ul>
              </div>
             
            </li>
          );
        })}
      </ul>

        <div className="my-5">
        <a href={CV} download='Olalekan Oladimeji Resume' className="font-bold text-base text-emerald-100 bg-emerald-400 bg-opacity-70 px-5 py-2 rounded-md"><span>Download Resume</span></a>
      </   div>
    </div>
  );
}

export default MyExperience;
