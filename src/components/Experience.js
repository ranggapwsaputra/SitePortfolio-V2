import React, { useRef } from 'react'
import {motion, useScroll } from "framer-motion"
import LightExperience from './LightExperience'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
    
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        
        <LightExperience reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a> </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
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
        Experience
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
                position="IT Manager" 
                company="Novus Jiva - Villa, Resort & Spa"
                companyLink="www.novushotels.com/novusjiva"
                time="2021 - Present" address="Banten, Indonesia"
                 work="Led strategic IT initiatives to enhance operational efficiency across all hotel systems. Implemented cybersecurity protocols, disaster recovery plans, and standardized IT policies. Oversaw infrastructure upgrades, system integrations, and budget management. Ensured network reliability through regular monitoring, backups, and penetration testing, while delivering performance insights through monthly IT reports."                                
                />

                <Details
                position="Asst. IT Manager" 
                company="Aston Bellevue Radio Dalam"
                companyLink="/"
                time="Apr 2021 - Aug 2021" address="Sout Jakarta, Indonesia"
                 work="Technology Planning & Decision-Making Collaborated with IT Corporate Archipelago International Indonesia, and management to align IT strategy with operational and guest service goals, ensuring systems met brand standards. Implementation & Maintenance: Managed installation, configuration, and updates for property management systems (PMS), point-of-sale (POS) systems, guest Wi-Fi networks, and internal communication platforms."                                
                />

                <Details
                position="Asst. IT Manager" 
                company="Horison Grand Serpong"
                companyLink="/"
                time="Jan 2021 - Mar 2021" address="Sout Tangerang, Indonesia"
                 work="Main function is to provide technical service against any trouble shooting occurred on the computer servers and computer workstations that will cause collapse on the server management system."                                
                />

                <Details
                position="Asst. IT Manager" 
                company="All Sedayu Hotel Kelapa Gading "
                companyLink="/"
                time="Jan 2019 - Jan 2021" address="North Jakarta, Indonesia"
                 work="Led the development of the official website hotel. Designed and implemented “HR Sedayu,” a custom PHP-based HR application. Maintained strategic IT plans and policies to ensure reliable infrastructure. Conducted regular asset audits and delivered monthly IT reports to support transparency and operational improvement."                                
                />

                <Details
                position="IT Supervisor" 
                company="The BnB Jakarta Kelapa Gading "
                companyLink="/"
                time="Jan 2018 - Jan 2019" address="North Jakarta, Indonesia"
                 work="Completed the hotel's first IT Audit Self-Assessment, ensuring compliance with internal and regulatory standards. Implemented “WO Online” and “GLR” web-based systems to streamline maintenance and guest request handling. Managed IT planning, infrastructure, and system implementation across departments. Delivered performance reports and successfully led cross-functional IT projects."                                
                />

                <Details
                position="IT Supervisor" 
                company="Daily Inn Hotel "
                companyLink="/"
                time="Mar 2017 - Jan 2018" address="Central Jakarta, Indonesia"
                 work="Joined the Pre-Opening Team and led the setup of core IT infrastructure. Oversaw the successful implementation of Cakra PMS, POS, and Materials Control systems. Evaluated vendors to align technology with project goals and budget, and established standardized IT SOPs for secure and efficient operations."                                
                />

                <Details
                position="IT Support" 
                company="Novotel Lampung "
                companyLink="/"
                time="Apr 2016 - Nov 2016" address="Bandar Lampung, Indonesia"
                 work="Main function is to provide technical service against any trouble shooting occurred on the computer servers and computer workstations that will cause collapse on the server management system and to maintain all data base and information systems within the hotel at optimum efficiency by providing all information and data required rapidly and accurately."                                
                />

                <Details
                position="IT Supervisor" 
                company="Aston Cirebon Hotel & Convention Center "
                companyLink="/"
                time="Mar 2014 - Jun 2015" address="Cirebon, Indonesia"
                 work="Responsible for all IT administration users and report to Manager, provide technical service against any trouble shooting occurred on the computer servers and computer workstations that will cause collapse on the server management system."                                
                />

                <Details
                position="BSS Engineer" 
                company="PT. Trimba Engineering Telecommunication "
                companyLink="/"
                time="Nov 2012 - Oct 2013" address="South Sumatera, Indonesia"
                 work="Performed maintenance, troubleshooting, and commissioning of BTS for NSN, Huawei, and Ericsson systems. Ensured optimal network performance through preventive maintenance, rapid fault resolution, and system upgrades. Managed site integration in line with operator standards to support reliable mobile communication."                                
                />
                

            </ul>
        </div>
        </div>
  )
}

export default Experience