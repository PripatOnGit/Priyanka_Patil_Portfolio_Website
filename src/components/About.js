import React from "react";
export default function About(){
    return(
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Priyanka Patil.
            <br></br>
            Full-Stack Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            <ul className = "list-disc">
              <li>I have worked for a couple of years with Infosys,Hyderabad.primarily on UI development(ReactJs), Core Java.</li>
              <li>Being On career-break(Pregnancy and Full-time parenting), to brush up and upgrade relevant technical skills, pursuing training in Full-stack Application development (ReactJs + JAVA).</li>
              <li>Excellent teamwork skills and the ability to thrive in fast-paced environments. </li>
              <li>Good problem-solving and analytical approach with exceptional time management skills.</li>
              <li>Right now, looking to resume my career and ready to be an asset to any development team.</li>
            </ul>
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              My Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> 
              <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./Priyanka_Patil.jpg"
              />
        </div>
        </div>
    </section>
    );
}