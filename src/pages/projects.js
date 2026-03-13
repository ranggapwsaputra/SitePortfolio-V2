import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/dummy-projects.png"
import EffectTransition from '@/components/EffectTransition';

const FramerImage = motion(Image);


const FeaturedProject = ({ type, title, summary, img, link, githublink }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl dark:bg-dark dark:border-light p-12
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    ">
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light dark:text-light  rounded-br-3xl
        xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
        ' />
      

      <Link href={link} target="_blank" className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full
      ">
        <FramerImage src={img} alt={title} className="w-full h-auto" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
        />
      </Link>


      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={githublink} target="_blank" className="w-10">
            <GithubIcon className="w-full" />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({title, type, img, link, githublink}) => {

    return(

        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark
         dark:border-light xs:p-4'>
            
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light dark:border-light  
            rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
            ' />
            
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage src={img} alt={title} className="w-full h-auto" priority size="(max-width: 768px) 100vw), (max-width: 1200px) 50vw, 33vw"
                          whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
        />
      </Link>


      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>


        <div className="w-full mt-2 flex items-center justify-between">
            
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={githublink} target="_blank" className="w-8 md:w-6">
            <GithubIcon />{" "}
          </Link>

        </div>
      </div>
        </article>
    )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>Rangga Saputra | Projects Page</title>
        <meta name="description" content="A showcase of development and cybersecurity-focused projects." />
      </Head>
      <EffectTransition />

      <main className="flex w-full flex-col items-center dark:text-light">
        <Layout className="pt-10">
          <AnimatedText text="Every Project Starts with Curiosity" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          " />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="🚧 This project is currently being updated. Stay tuned!"
                summary="App using React, Tailwind CSS, Context API, React Router, and Recharts.."
                img={project1}
                link="/"
                githublink="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
                <Project
                title="🚧 This project is currently being updated. Stay tuned!"
                summary="App using React, Tailwind CSS, Context API, React Router, and Recharts.."
                img={project1}
                link="/"
                githublink="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                title="🚧 This project is currently being updated. Stay tuned!"
                summary="App using React, Tailwind CSS, Context API, React Router, and Recharts.."
                img={project1}
                link="/"
                githublink="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
                <FeaturedProject
                title="🚧 This project is currently being updated. Stay tuned!"
                summary="App using React, Tailwind CSS, Context API, React Router, and Recharts.."
                img={project1}
                link="/"
                githublink="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                title="🚧 This project is currently being updated. Stay tuned!"
                summary="App using React, Tailwind CSS, Context API, React Router, and Recharts.."
                img={project1}
                link="/"
                githublink="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
                <Project
                title="🚧 This project is currently being updated. Stay tuned!"
                summary="App using React, Tailwind CSS, Context API, React Router, and Recharts.."
                img={project1}
                link="/"
                githublink="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Projects
