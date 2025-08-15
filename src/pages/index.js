import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import profilePic from '../../public/images/profile/face.png';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import ContactMe from '@/components/ContactMe';
import EffectTransition from '@/components/EffectTransition';

export default function Home() {
  return (
    <>
      <Head>
        <title>Rangga Saputra - Personal Website</title>
        <meta name="description" content="IT Manager" />
      </Head>

      <EffectTransition />
      <main className="flex w-full flex-col items-center justify-center text-dark dark:text-light">

        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="RanggaSaputra"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                size="(max-width: 768px) 100vw), (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="From Code to Launch, Start with Security"
                className="!text-6x1 !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Security has become an increasingly important issue in the
                digital era. This is the reason why I started focusing on
                security with a specialization in network infrastructure and
                programming.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/pages"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                    border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                    md:text-base"
                >
                  Pages <LinkArrow className="w-6 ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <ContactMe />
        </Layout>
      </main>
    </>
  );
}
