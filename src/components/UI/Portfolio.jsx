import React from 'react';
import data from '../../assets/data/portfolioData';

const Portfolio = () => {
  return (
    <section id="portfolio">
        <div className="container1">

            <div className="flex items-center justify-between flex-wrap">
                <div className="mb-7 sm:mb-0">
                    <h3 className="text-headingColor font-[700] text-[2rem]">
                        My recent projects
                    </h3>
                </div>
            </div>

            <div className="flex items-center gap-4 flex-wrap mt-5">
                {
                    data?.map((portfolio)=>(
                    
                                    <div className= "group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%]   {/*z-[1]*/}">  
                                        <figure >
                                            <a  href={portfolio.siteUrl[0][1]} target="_blank" rel="noopener noreferrer">
                                                <img className="border-[5px] border-slate-400 h-[240px] w-[100%] rounded-[8px] cursor-pointer hover:shadow-2xl" src={portfolio.imgUrl} alt=" " />     
                                            </a>   
                                        </figure>
                                        <div>
                                                <h2 className="text-2xl text-headingColor font-[700] mt-5 mb-3"> 
                                                    {portfolio.title}
                                                </h2>

                                                <p className = "text-[15px] leading-7 text-smallTextColor"> 
                                                    {portfolio.description}
                                                </p>

                                                <div className = "mt-2 flex items-center gap-3 flex-wrap"> 
                                                    <h4 className= "text-headingColor text-[18px] text-[700]"> 
                                                        Tech:
                                                    </h4>
                                                    {portfolio.technologies.map((item, index)=> (
                                                        <span className= "bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0"
                                                        >
                                                            {item}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className= "mb-6">
                                                {portfolio.siteUrl.map((item, index)=> (
                                                    
                                                        <a href={item[1]} target="_blank" rel="noopener noreferrer" >
                                                            <button className= "bg-primaryColor text-white py-2 px-3 mx-1 mt-4 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                                                            {
                                                                index === 1 || index === 2?(<><i class="ri-github-fill"></i>{" "}{item[0]}</>):item[0]  
                                                            }
                                                            {
                                                                index === 3 ?(<><i class="ri-youtube-fill"></i></>):null
                                                            }
                                                            </button>
                                                        </a>          
                                                ))}
                                                </div> 
                                               
                                        </div>
                                    </div>
   
                    ))
                }
            </div>
        </div>
    </section>
  )
};

export default Portfolio;



