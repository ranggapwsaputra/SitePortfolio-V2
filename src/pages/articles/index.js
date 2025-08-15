import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import EffectTransition from '@/components/EffectTransition';


const Article = ({ title, date, link, img }) => {
  const [hovered, setHovered] = useState(false);
  return (
    
    <motion.li
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center 
      justify-between bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark
      dark:border-light border-r-4 border-b-4 sm:flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={link} className="flex-1">
        <h2 className="capitalize text-2xl font-bold hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>

      {hovered && img && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0, y:-10 }}
          whileInView={{ opacity: 1, transition: { duration: 0.25, ease: 'easeOut' } }}
          className="absolute full right-0 overflow rounded-md shadow-lg md:!hidden border border-dark/10 dark:border-light/10 bg-white dark:bg-dark"
        >
          <Image
            src={img}
            alt={title}
            width={370}
            height={270}
            className="w-full h-full object-cover"
            priority size="(max-width: 768px) 100vw), (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      )}
    </motion.li>
  );
};

function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function getStaticProps() {
  const articlesDir = path.join(process.cwd(), 'src/content/articles');
  const files = fs.readdirSync(articlesDir);

  const articles = files
    .filter((filename) => filename.endsWith('.md') || filename.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, '');
      const fileContent = fs.readFileSync(path.join(articlesDir, filename), 'utf-8');
      const { data, content } = matter(fileContent);
      const readingTime = calculateReadingTime(content);

      return {
        slug,
        frontmatter: {
          ...data,
          readingTime,
        },
      };
    });

  const sorted = articles.sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  return {
    props: {
      articles: sorted,
    },
  };
}


export default function ArticlesPage({ articles }) {
  const latestArticles = articles.slice(0, 2);
  const allArticles = articles.slice(2);

  return (
    <>
    <Head>
        <title>Rangga Saputra | Articles Page</title>
        <meta
          name="description"
          content="List of articles written by Rangga Saputra on technology, security, and development."
        />
      </Head>
      <EffectTransition />

    <Layout className="pt-10">
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
          <AnimatedText text="Sharing What I Learn in Tech" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl" />

        {/* Latest Articles */}
        <div className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          {latestArticles.map(({ slug, frontmatter }) => (
            <div
              key={slug}
              className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl border-r-4 border-b-4"
              >

  

              {frontmatter.coverImage && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={frontmatter.coverImage}
                    alt={frontmatter.title}
                    width={600}
                    height={300}
                    className="w-full object-cover rounded-xl border border-gray-200 dark:border-gray-700"
                  />
                </motion.div>
              )}
              <div className="mt-4">
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mb-2">
                  <span>{frontmatter.date}</span>
                  <span>{frontmatter.readingTime}</span>
                </div>

                <Link href={`/articles/${slug}`} className="hover:underline underline-offset-2">
                  <h2 className="text-xl font-semibold text-dark dark:text-light mb-1">
                    {frontmatter.title}
                  </h2>
                </Link>

                {frontmatter.category && (
                  <p className="text-xs text-primary dark:text-primaryDark font-medium mb-1">
                    Category: {frontmatter.category}
                  </p>
                )}

                {frontmatter.author && (
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">
                    By {frontmatter.author}
                  </p>
                )}

                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                  {frontmatter.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="font-bold text-3xl mt-20 mb-6 text-dark dark:text-light text-center">
          All Articles
        </h2>

        <ul className="relative w-full">
  {allArticles.map(({ slug, frontmatter }) => (
    <Article
      key={slug}
      title={frontmatter.title}
      date={frontmatter.date}
      link={`/articles/${slug}`}
      img={frontmatter.coverImage}
    />
            ))}
          </ul>
        </main>
      </Layout>
    </>
  );
}