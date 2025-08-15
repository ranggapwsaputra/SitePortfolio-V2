import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import AnimatedText from '../components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/Dev-Pict.png'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import EffectTransition from '@/components/EffectTransition'



const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000 })
const isInview = useInView(ref, {once: true});

useEffect(() => {
  if(isInview){
    motionValue.set(value);
  }
}, [isInview, value, motionValue])

useEffect(() => {
  springValue.on("change", (latest) => {
    if(ref.current && latest.toFixed(0) <= value ){
      ref.current.textContent = latest.toFixed(0);
    }
  })

}, [springValue, value])



  return <span ref={ref}></span>
}




const About = () => {
  return (
    <>
      <Head>
        <title>Rangga Saputra | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <EffectTransition />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText text="Nice to have you here buddy." className="mb-16 lg:!text-7xl sm=!text-6xl xs:!text-4xl sm:mb-8"  />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">I&apos;m Rangga</h2>

              <p className="font-medium">
                  I am a Head of IT with a specialization in network, programming, and cyber security.
              </p>

              <p className="my-4 font-medium">
                My passion has always been at the intersection of cyber security. I mostly work in hospitality companies
                to research IT requirements and create standard operational procedure and manage the internet network so
                that it can run smoothly without interruption and create beautiful digital products and web applications.
                Besides, I write regularly on my blog about information technologies to develop career.
              </p>
            </div>

            
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light
            xl:col-span-4 md:order-1 md:col-span-8">
  <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
  <Image
    src={profilePic}
    alt="Rangga Saputra"
    className="w-full h-auto rounded-2xl"
                  priority size="(max-width: 768px) 100vw), (max-width: 1200px) 50vw, 33vw"
                
  />
</div>

<div className='col-span-2 flex flex-col items-end  justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl  sm:text-5xl xs:text-4xl'>
              <AnimatedNumbers value={10}/>+ 
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg  sm:text-base xs:text-sm'>Years Of Experience</h2>
          </div>

                  <div className='flex flex-col items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold md:text-6xl  sm:text-5xl  xs:text-4xl'>
              <AnimatedNumbers value={8}/>+ 
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg  sm:text-base xs:text-sm'>Unit Hotels Experience</h2>
            </div>

          <div className='flex flex-col items-end justify-center xl:items-center'>
            <span className='inline-block text-7xl font-bold  md:text-6xl  sm:text-5xl  xs:text-4xl'>
              <AnimatedNumbers value={15}/>+ 
            </span>
            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg  sm:text-base xs:text-sm'>Projects  Completed</h2>
          </div>

          </div>

          </div>

            <Experience />
            <Education />
        </Layout>
      </main>
    </>
  )
}

export default About
