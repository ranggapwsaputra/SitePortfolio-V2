import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name, x, y}) => {
    return(
<motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute 
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
    xs:font-bold
    '
    whileHover={{scale:1.05}}
    initial={{x:0,y:0}}
    whileInView={{x:x, y:y, transition: {duration: 1.5}  }}
    viewport={{once: true}}
    >
        {name}
    </motion.div>

    )
}

const Skills = () => {
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>What Can I Do</h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    '>

    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    p-8 shadow-dark cursor-pointer absolute lg:p-6 md:p-4 xs:text-xs xs:p-2
    '
    whileHover={{scale:1.05}}
    >
        Skills
    </motion.div>

    <Skill name="Networking" x="-14vw" y="-3vw"/>
    <Skill name="Fortinet" x="-30vw" y="-5vw"/> 
    <Skill name="Juniper" x="-19vw" y="-12vw"/>
    <Skill name="Cisco" x="-23vw" y="5vw"/>
    <Skill name="MikroTik" x="-35vw" y="-14vw"/>

    <Skill name="Security" x="14vw" y="-3vw"/>
    <Skill name="OWASP" x="37vw" y="12vw"/>
    <Skill name="Burp Suite" x="32vw" y="-5vw"/>
    <Skill name="Wazuh" x="24vw" y="5vw"/>
    <Skill name="Azure" x="19vw" y="-12vw"/>
    <Skill name="Splunk" x="32vw" y="-20vw"/>

    <Skill name="Website" x="1vw" y="13vw"/>    
    <Skill name="NextJs" x="-10vw" y="18vw"/>
    <Skill name="GatsbyJS" x="12vw" y="17vw"/>
    <Skill name="Tailwind CSS" x="2vw" y="27vw"/>
    <Skill name="Github" x="-20vw" y="30vw"/>
    <Skill name="Wordpress" x="20vw" y="30vw"/>

    <Skill name="PMS" x="1vw" y="-13vw"/>    
    <Skill name="VHP" x="-10vw" y="-18vw"/>
    <Skill name="Opera" x="12vw" y="-17vw"/>
    <Skill name="PowerPro" x="18vw" y="-30vw"/>
    <Skill name="Realta" x="-18vw" y="-30vw"/>

    </div>
</>
  )
}

export default Skills