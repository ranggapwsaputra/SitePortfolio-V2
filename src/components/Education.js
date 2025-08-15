import React, { useRef } from 'react'
import {motion, useScroll } from "framer-motion"
import LightExperience from './LightExperience'

const Details = ({type, time, place, info, certificateLink}) => {
    const ref = useRef(null);
    return (
    
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        
        <LightExperience reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}
                 </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
                </span>
                <p className='font-medium w-full md:text-sm'>{info}</p>
                {certificateLink && (
          <a
            href={certificateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark underline mt-2 inline-block md:text-sm"
          >
            View Certificate
          </a>)}
        </motion.div>
    </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll (
        {
            target: ref,
            offset: ["start end", "center start"]
        }

    )

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Education & Course
        </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>


<motion.div
  style={{ scaleY: scrollYProgress }}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
  md:w-[2px] md:left-[30px] xs:left-[20px]
  "
/>


                <ul ref={ref} className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>

                
                <Details
                type="Informatics Engineering" 
                time="2010 - 2016" place="IBI Darmajaya"
                 info="I have a strong focus on IT infrastructure and cybersecurity. My academic background has equipped me with a solid understanding of enterprise network architecture, system administration, and information security best practices. With a deep interest in both the technical and strategic aspects of cybersecurity, I strive to bridge the gap between secure infrastructure design and practical risk mitigation."                                
                />

                <Details
                type="International Security Management" 
                time="Jul, 2023" place="Erasmus University Rotterdam – By Coursera"
                 info="I successfully completed the International Security Management online course offered by Erasmus University Rotterdam through Coursera, achieving a final grade of 83.55%. This program provided a comprehensive exploration of the global security landscape, emphasizing the intersection of governance, law enforcement, intelligence, and societal resilience. Key topics included international risk management principles, open-source intelligence (OSINT), serious and organized crime, and the global impact of illicit trade. I also gained strategic insights into leadership within security environments, including how to manage complex threats, design responsive security policies, and enhance public safety through proactive and collaborative approaches. This course has significantly strengthened my ability to assess global security challenges and apply structured, multidisciplinary solutions in both public and private sector contexts."                                
                certificateLink="https://www.coursera.org/verify/5UQDV9RAJWMG"
                />

                <Details
                type="International Cyber Conflicts" 
                time="Aug, 2023" place="The State University of New York – By Coursera"
                info="After completing the International Security Management course from Erasmus University Rotterdam, I advanced my knowledge in global cybersecurity by taking the International Cyber Conflicts course from the State University of New York on Coursera, achieving a final grade of 86%. This course deepened my understanding of cyber conflict dynamics between nations, covering topics such as cyber deterrence, international law, and digital sovereignty. It provided strategic insights into how countries manage, respond to, and prevent cyber threats within the global security landscape."                                
                certificateLink="https://coursera.org/verify/5DP9ZEU7XE3L"
                />

                

            </ul>
        </div>
        </div>
  )
}

export default Experience