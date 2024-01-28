import React from 'react';
//import heroImg from "../../assets/images/portfolio-01 (3).jpg";
import "./Hero.css";
import Pdf from './resume.pdf';


const Hero = () => {
  return (
<section className="pt-50" id="about">
  <div className="container pt-10 ">
    <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
        {/*=====hero left====*/}

        <div className="w-full md:basis-1/2">

            <h5 className="text-headingColor font-[600] text-[16px]"> Hollo Welcome</h5>
            <h1 className="text-headingColor font-[800] text-[20px] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 ">
              I'm Suman Kumar <br/> Full Stack Developer
            </h1>
            <h5>working at <a href={"https://teradata.com"} target="_blank" rel="noopener noreferrer" className="text-orange-500 font-[600] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">Teradata.</a>
            </h5>
        
            <div className="flex items-center gap-8 mt-5 ">
              <a href={Pdf} target="_blank" rel="noopener noreferrer" className="text-[20px] font-[550] p-1 hover:border-gray-700 border-transparent border-2">
                <i class="ri-download-cloud-line"></i> Resume
              </a>
              <a href={"https://github.com/achuara"} target="_blank" rel="noopener noreferrer" className="text-[22px] font-[400] hover:border-gray-700 border-transparent border-2">
                <i class="ri-github-fill"></i>
              </a>

              <a href={"https://www.codechef.com/users/sumankumar_21"} target="_blank" rel="noopener noreferrer" className="text-[22px] font-[400] hover:border-gray-700 border-transparent border-2">
                <i class="ri-code-s-slash-fill"></i>
              </a>

              <a href={"https://www.linkedin.com/in/suman-singh-435061170"} target="_blank" rel="noopener noreferrer" className="text-[22px] font-[400] hover:border-gray-700 border-transparent border-2">
                <i class="ri-linkedin-box-fill"></i>
              </a>
            </div>
            <div className="mt-5">
              <h5 className="text-headingColor font-[900] text-[15px]">Skills : System-Design DSA C++ JavaScript React.js Node.js Express.js MongoDB SQL HTML CSS Tailwind-CSS</h5>
            </div>
           

      <div className="flex gap-5 mt-5 text-[14px] font-[400]">
      <div>
        <div className="text-[22px] font-[400]"><i class="ri-briefcase-fill"></i></div>
        <div class="ml-2 h-[85%] bg-gray-500 w-[2px]"></div>
      </div>
      <div>
      <p className="mt-2 text-[0.9em] font-[500] text-orange-500">
        Sep 2021 - Present (2.5 years)
      </p>
      <h1 className="">Teradata.</h1>
      <div className=" flex gap-x-2">
        <h3>Project:- CIM Website for HSBC bank(UK, France, Mexico)</h3>
      </div>
      {/* Description  */}
      <div className="">
        <p>💻 CIM is used for management of campaign and communication with millions of customers through different mode of communication.</p>
	      <p>💻 Work for HSBC bank for upgrade and changes in website as per their bussiness requirement and in case of bug and defect. </p>
      </div>

      {/* Tech Stack  */}
      <div className="flex gap-x-3 gap-y-1 text-sm mt-1 flex-wrap">
            	<p className="bg-zinc-300 px-1 rounded-sm">
              	React.js
            	</p>
		          <p className="bg-zinc-300 px-1 rounded-sm">
                Express.js
           	  </p>
               <p className="bg-zinc-300 px-1 rounded-sm">
                Node.js
           	  </p>
		          <p  className="bg-zinc-300 px-1 rounded-sm">
              	Teradata SQL
            	</p>
              <p  className="bg-zinc-300 px-1 rounded-sm">
              	API
            	</p>
              <p  className="bg-zinc-300 px-1 rounded-sm">
              	Git & GitHub
            	</p>
              <p  className="bg-zinc-300 px-1 rounded-sm">
              	Jira
            	</p>

      </div></div>
      
</div>

        </div>

        {/*=====hero left end====*/}
        {/*=====hero img====*/}
        <div className="basis=1/3 mb-0 sm:mt-0">
         <figure className="flex items-center justify-center">
             <div className='blob'></div>
         </figure>
        </div>
        {/*=====hero img end====*/}
        
    </div>
  </div>  
</section>
);
};

export default Hero;
