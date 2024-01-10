import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    
    const links = [
        { id: 1, link: 'About' },
        { id: 2, link: 'Qualifications' },
        { id: 3, link: 'Experience' },
        { id: 4, link: 'Projects' },
        { id: 5, link: 'Contact' }
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-teal-100 fixed">
            <div>
                <h1 className="text-3xl ml-2">
                    Mohamammed Irfanul Haque
                </h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-700 hover:scale-110 duration-200"
                    >
                        {link}
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-700 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul
                className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-teal-100 to-white text-black"
            >
                {links.map(({id,link}) =>(
                    <li
                        key={id}
                        className='px4 cursor-pointer capitalize py-6 text-4xl'
                    >
                        {link}

                    </li>
                ))}
            </ul>
            )}
            
        </div>
    );
};

export default NavBar;
