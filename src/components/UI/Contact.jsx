import React from 'react'
import emailgif from "../../assets/images/email-gif1.gif";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setDone(false);
        emailjs.sendForm('service_s88abph', 'template_17swe28', formRef.current, 'gEj7o-0HbxEyU_gd4')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
    <section id="contact">
        <div className='container2'>
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-3'>
                Get in touch
            </h2>
            <div className='md:flex items-center justify-between'>
                <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg: items-centre bg-indigo-100 px-4 lg:px-8 py-8'>
                    
                    
                        <a className="text-smallTextColor font-[600] lg:ml-12" href="https://www.linkedin.com/in/suman-singh-435061170">
                        <button className= "bg-primaryColor text-white py-2 px-3 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                        <i class="ri-linkedin-box-fill"></i>
                        LinkedIn
                        </button>
                        </a>

                        <a className="text-smallTextColor  font-[600] ml-1 lg:ml-10" href="#contact">
                        <button className= "bg-primaryColor text-white py-2 px-3  rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300">
                        <i class="ri-mail-fill"></i>
                        suman21ab@gmail.com
                        </button>
                        </a>

                        <div className="basis=1/3 mt-1 sm:mt-8">
                         <figure className="flex items-center justify-center">
                            <img src={emailgif} alt="gif"  style={{ width: '500px', height: '310px' }} />
                         </figure>
                        </div>
                       
                   
                </div>    
                <div className='w-full md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-centre bg-indigo-100 px-4 lg:px-8 py-8'>
                    <form className='w-full' ref={formRef} onSubmit={handleSubmit}>
                        <div className='mb-5'>
                            <input 
                             type="text"
                             placeholder='Enter your name'
                             name="user_name"
                             className='w-full p-3 focus:outline-none rounded-[5px]'
                            />
                        </div>
                        <div className='mb-5'>
                            <input 
                             type="text"
                             placeholder='Enter your email'
                             name="user_email"
                             className='w-full p-3 focus:outline-none rounded-[5px]'
                            />
                        </div>
                        <div className='mb-5'>
                            <input 
                             type="text"
                             placeholder='Subject'
                             name="user_subject"
                             className='w-full p-3 focus:outline-none rounded-[5px]'
                            />
                        </div>

                        <div className='mb-5'>
                            <textarea 
                             type="text"
                             rows={3}
                             placeholder='Enter your message'
                             name="message"
                             className='w-full p-3 focus:outline-none rounded-[5px]'
                            />
                        </div>
                        <button className='w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-centre ease-linear duration-150'>
                            Send Message
                        </button>
                        <p className="text-center text-2xl text-green-700 font-black">
                            {done && <i class="ri-verified-badge-fill"></i>}
                            {done && "Message Sent Successfully"}
                            
                        </p>
                        
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
