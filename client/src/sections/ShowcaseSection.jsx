import React, { useRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react'; 

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1 = useRef(null);
    const project2 = useRef(null);
    const project3 = useRef(null);


    useGSAP(()=>{
        const projects = [project1.current, project2.current, project3.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
    
                }
    
            )
        });


        gsap.fromTo(
            sectionRef.current, 
            {opacity: 0},
            {opacity: 1, duration: 1.5}
        )
    }, []);

  return (
    <section id="work" ref={sectionRef} className='w-full mt-20 px-5 md:px-20 py-10 md:py-20 flex items-center justify-center'>
        <div className='w-full'>
            <div className='flex xl:flex-row flex-col gap-10 justify-between'>
                {/* {LEFT} */}
                <div ref={project1} className="h-full flex flex-col justify-between xl:w-[60%]">
  <div className="xl:h-[70vh] md:h-[50vh] h-96 relative group">
    <img
      className="w-full h-full object-cover rounded-xl absolute inset-0 transition-opacity duration-300 group-hover:opacity-50"
      src="../../public/images/project1.webp"
      alt="Project1"
    />
    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
      <div className="flex flex-row gap-3">
        <img src="../../public/images/source_code.webp" alt="github" width={20}/> Source Code
      </div>
    </button>
  </div>

  <div className="space-y-5 mt-5">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
      In generation of Ai, Introducing DALL-E. An Ai that can generate everything from memes and art to beautiful UI/UX designs!
    </h2>
    <p className="text-gray-50 md:text-xl">
      An app built with React, Express & TailwindCSS for a fast, user-friendly experience.
    </p>
  </div>
</div>

                {/* {RIGHT} */}
                <div className='flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[40%] overflow-hidden'>
                    <div ref={project2} className='project group'>
                        <div className='xl:h-[37vh] md:h-52 lg:h-72 h-64 relative py-0'>
                            <img className='w-full h-full rounded-xl transition-opacity duration-300 group-hover:opacity-50' 
                            src="../../public/images/project2.png" 
                            alt="project2" />

                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                         <div className="flex flex-row gap-3">
                         <img src="../../public/images/source_code.webp" alt="github" width={20}/> Source Code
                          </div>
                        </button>
                        </div>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-semibold mt-5'>Spotify Clone</h2>
                    </div>

                    
                    <div ref={project3} className='project group'>
                        <div className='xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0 bg-[#ffffff]'>
                            <img className='w-full h-full object-contain rounded-xl transition-opacity duration-300 group-hover:opacity-50' 
                            src="../../public/images/project3.png" 
                            alt="project3" />

                      <a href="https://github.com/Stranger110/Payment-Gateway.git">
                        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-6 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                         <div className="flex flex-row gap-3">
                         <img src="../../public/images/source_code.webp" alt="github" width={20}/> Source Code
                          </div>
                        </button>
                      </a>
                        </div>
                        <h2 className='text-lg md:text-xl lg:text-2xl font-semibold mt-5'>Payment Gateway</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default ShowcaseSection;
