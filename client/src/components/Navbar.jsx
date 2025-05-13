import React, { useEffect, useState } from 'react'
import { navLinks } from '../../constants';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true)
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='mx-auto flex items-center justify-between'>
            <a className='text-gray-50 text-xl md:text-2xl font-semibold transition-transform duration-300 hover:scale-105' href="#hero">
                Siddharth Prajapati.
            </a>

            <nav className='hidden lg:flex items-center'>
                <ul className='flex space-x-8'>
                    {navLinks.map(({ link, name })=>(
                        <li key={name} className='text-gray-50 relative group'>
                            <a href={link}>
                                <span className='transition-colors duration-300 hover:text-white'>{name}</span>
                                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <a href="#contact" className='flex group'>
                <div className='px-5 py-2 rounded-lg bg-white text-black group-hover:bg-zinc-900 transition-colors duration-300'>
                    <span className='group-hover:text-white transition-colors duration-300'>Contact me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavBar;
