import React, {useRef} from 'react';

const Header = () => {
    const menuRef = useRef(null);
  
    const toggleMenu = ()=> menuRef.current.classList.toggle('show_menu');
  return (

<header className="w-full h-[80px] leading-[80px] flex items-center fixed bg-white">
    <div className="container">
        <div className="flex items-center justify-between"> 
                {/*====logo=====*/ }
            <div className="flex items-center gap-[10px]"> 
                 <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] 
                 rounded-full flex items-center justify-center ">
                    S
                 </span>
                 <h2 className="text-xl text-smallTextColor font-[700]">Suman</h2>      
            </div>   
            
            <div className="menu hidden md:block" ref={menuRef} onClick={toggleMenu}>
                <ul className="flex items-center gap-10">
                    <li>
                    <a className="text-smallTextColor font-[600] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] " href="#about" >
                    About
                    </a>
                    </li>

                    {/*<li>
                    <a className="text-smallTextColor font-[600]" href="#services">
                    Services
                    </a>
                    </li>*/}

                    <li>
                    <a className="text-smallTextColor font-[600] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" href="#portfolio">
                    projects
                    </a>
                    </li>

                    <li>
                    <a className="text-smallTextColor font-[600] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]" href="#contact">
                    contact
                    </a>
                    </li>
                </ul>
            </div>

            <div onClick= {toggleMenu} className="text-2xl text-smallTextColor md:hidden cursor-pointer"> 
                <i className="ri-menu-line"></i>
            </div>

        </div>
    </div> 
</header>
);
};
   
 export default Header;

