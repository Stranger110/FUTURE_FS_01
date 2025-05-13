import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { certifications } from '../../constants'
import GlowCard from '../components/GlowCard'

const Certifications = () => {
  return (
    <section id='certifications' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title="What I have Achieved?"
            sub="⭐ Achievements"
        />

        <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
            {certifications.map(({ imgPath , name, mentions, review})=> (
                <GlowCard card={{ name, mentions, imgPath }}>
                <div className="flex items-center gap-3 mb-4">
                        <img src={imgPath} alt={name} className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-bold">{name}</p>
                        <p className="text-gray-50 italic">{mentions}</p>
                    </div>
                </div>

                <p className="text-gray-50">
                    {review}
                </p>
                </GlowCard>
            ))}
        </div>
        
      </div>
    </section>
  )
}

export default Certifications
