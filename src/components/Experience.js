
import React from "react";
import {  BriefcaseIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container px-5 py-10 mx-auto text-center">
        <div className="text-center mb-20">
          <BriefcaseIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Experience
          </h1>
        </div> 
        <div className="flex flex-wrap flex-center justify-center -m-4">
        <ul class="list-none m-0 p-0"> 
        {experience.map((experience) => (
           <li class="mb-5 ">
           <div class="flex group items-center ">
               <div class="bg-gray-800 group-hover:bg-green-700 z-10 rounded-full border-4 border-black  h-5 w-5">
                   <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
               </div>
               <div class="flex ml-4 z-10 lg:w-4/5 font-medium">
                   <div class="  space-y-2 bg-gray-800 rounded-lg shadow-only transition-ease lg:w-11/12 px-6 py-4">
                       <h3 class="mb-3 font-bold text-white text-2xl">{experience.company}</h3>
                       <p class="pb-4 text-sm text-gray-100">{experience.duration}</p>
                       <hr />
                       <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">{experience.tech}</p>
                   </div>
               </div>
           </div>
       </li>                  
            
          ))}
          </ul>
        </div>
      </div>
    </section>
  );
}