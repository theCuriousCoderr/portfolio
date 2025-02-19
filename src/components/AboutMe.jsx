import React, { useState } from "react";
import html from "../images/html.jfif";
import css from "../images/css.png";
import js from "../images/javascript.png";
import c from "../images/C.png";
import cpp from "../images/C++.png";
import python from "../images/python.jfif";
import react from "../images/react.png";
import angular from "../images/angular.png";
import next from "../images/next.png";
import tailwind from "../images/tailwind.png";
import mongo from "../images/mongo.jfif";
import sql from "../images/sql.jfif";
import node from "../images/nodejs.png";
import express from "../images/express.png";
import flask from "../images/flask.png";
import ts from "../images/typescript.png";
import SkillsCard from "./SkillsCard";

function AboutSummary() {
  const skills = [
    {
      lang: [
        { name: "HTML", icon: html },
        { name: "CSS", icon: css },
        { name: "JavaScript", icon: js },
        { name: "C", icon: c },
        { name: "C++", icon: cpp },
        { name: "Python", icon: python },
        { name: "TypeScript", icon: ts },
      ],
    },
    {
      front: [
        { name: "React.js", icon: react },
        { name: "Angular", icon: angular },
        { name: "Next.js", icon: next },
        { name: "Tailwind CSS", icon: tailwind },
      ],
    },
    {
      back: [
        { name: "Node.js", icon: node },
        { name: "Express.js", icon: express },
        { name: "Flask", icon: flask },
      ],
    },
    {
      database: [
        { name: "MongoDB", icon: mongo },
        { name: "SQLite3", icon: sql },
      ],
    },
    {
      cloud: [
        { name: "Git", icon: "lop" },
        { name: "GitHub", icon: "lop" },
        { name: "Vercel", icon: "lop" },
      ],
    },
  ];
  return (
    <div className="text-slate-500 space-y-5">
      <p className="text-slate-500 font-[Inter">
        I am a developer with {new Date().getFullYear() - 2022} years of
        practical experience and technical expertise in building responsive,
        optimized, and scalable web applications, specializing in both Frontend
        and Backend development.
      </p>
      <div className="space-y-5">
        <p className="font-inte">
          Listed below are the soft skills and hard skills I have gathered to
          learn and use over the years:{" "}
        </p>
        <div className="space-y-5">
          <ul className="flex flex-wrap w-full gap-2 border-r-4 border-slate-700 pr-2">
            {skills[0].lang.map((item) => (
              <li key={item.name}>
                <SkillsCard icon={item.icon} name={item.name} />
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap w-full gap-2 border-r-4 border-slate-700 pr-2">
            {skills[1].front.map((item) => (
              <li key={item.name}>
                <SkillsCard icon={item.icon} name={item.name} />
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap w-full gap-2 border-r-4 border-slate-700 pr-2">
            {skills[2].back.map((item) => (
              <li key={item.name} className="">
                <SkillsCard icon={item.icon} name={item.name} />
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap w-full gap-2 border-r-4 border-slate-700 pr-2">
            {skills[3].database.map((item) => (
              <li key={item.name}>
                <SkillsCard icon={item.icon} name={item.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function AboutFull() {
  return (
    <div className="space-y-5">
      {" "}
      <p className="text-slate-500">
        With{" "}
        <span className="text-slate-400">
          {" "}
          {new Date().getFullYear() - 2022} years
        </span>{" "}
        of hands-on experience and technical expertise in crafting robust and
        user-eccentric web applications. My journey in web development began
        with a fervent curiousity with how the web and internet works, which led
        me into the rabbit hole of front-end and back-end technologies .
      </p>
      <p className="text-teal-500">
        On the front-end, I excel in crafting intuitive and responsive user
        interfaces using HTML5, CSS3 and JavaScript, coupled with modern styling
        libraries such as TailwindCSS, MUI and also libraries and frameworks
        such as React.js, Next.js and Angular. I have a keen eye for design and
        usability, ensuring that the end products not only meets functional
        requirements but also delights users with its aesthetic appeal and
        seamless interaction.
      </p>
      <p className="text-slate-500">
        Completing my front-end skills, I possess a strong foundation in
        back-end development, specializing in server-side programming with
        languages like Node.js and Python. Leveraging frameworks like Express.js
        and Flask, I have built scalable and efficient APIs, integrated with
        databases such as MongoDB and SQLite3 to manage data effectively.
        Additionally, I prioritize security practices, implementing measures
        such as encryption, authentication and authorization to safeguard
        sensitive data and mitigate risks.
      </p>
      <p className="text-teal-500">
        My proficiency extends beyond traditional web development paradigms, as
        I am conversant with version control system using Git/Github, deploying
        and maintaining applications, files on cloud platforms like Vercel,
        Render, Netlify, Cloudinary.
      </p>
      <p className="text-slate-500">
        What sets me apart is my commitment to continuous learning and
        adaptations to emerging technologies and industry best practices. I
        thrive in dynaamic environments where collaboration and innovation drive
        success, leveraging agile methodologies to deliver high-quality
        solutions that exceeds client expectations.
      </p>
    </div>
  );
}

function AboutMe({ view }) {
  const [summary, setSummary] = useState(true);
  return (
    <div id="aboutMe" className={`section bg-yellow-40 line-clamp space-y-5`}>
      <div
        className={`z-50 relative flex justify-between w-full ${
          view === "aboutMe"
            ? "sticky bg-slate-900 xl:text-white -top-8 xl:top-0 xl:relative"
            : "relative text-white"
        } `}
      >
        <div className="w-52 z-10 flex justify-between relative">
          <div
            className={`absolute bg-gradient-to-r from-teal-500 to-pink-500 transition-all rounded-md w-24 top-2 bottom-2 ${
              summary ? "right-0" : "left-0"
            }  -z-10`}
          ></div>
          <button
            onClick={() => setSummary(!summary)}
            className={`font-medium font-inter w-24 text-center p-3 border ${
              summary
                ? "text-slate-400 border-slate-800 hover:text-slate-400"
                : "text-white border-slate-900"
            } `}
          >
            ABOUT
          </button>
          <button
            onClick={() => setSummary(!summary)}
            className={`w-24 text-center bg-red-80 border ${
              !summary
                ? "text-slate-400 border-slate-800 hover:text-slate-400"
                : "text-white border-slate-900"
            } `}
          >
            SUMMARY
          </button>
        </div>
      </div>

      {summary ? <AboutSummary /> : <AboutFull />}
    </div>
  );
}

export default AboutMe;
