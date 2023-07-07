
import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          My Experience
        </h1>
        <div className="flex flex-wrap m-4">
          {experience.map((experience) => (
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <span className="leading-relaxed mb-6 items-center font-medium text-white">{experience.company}</span><br></br>
                <span>({experience.duration})</span>
                <div className="inline-flex items-center">
                  
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium ">
                      {experience.tech}
                    </span>
                    
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}