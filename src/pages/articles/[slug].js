import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import rehypeHighlight from 'rehype-highlight';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { redis } from '@/lib/redis';
import ArticleBannerImage from '@/components/ArticleBannerImage';
import Link from 'next/link';
import Image from 'next/image';
import MDXComponents from '@/components/mdx/mdxComponents';
import { useEffect, useState } from 'react';
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTwitter,
  FaCopy,
} from 'react-icons/fa';
import EffectTransition from '@/components/EffectTransition';

export default function Article({
  frontmatter,
  mdxSource,
  popularPosts,
  prevPost,
  nextPost,
  views,
  allCategories,
}) {
  const [url, setUrl] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
      const toggleVisibility = () => setIsVisible(window.scrollY > 300);
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>{`${frontmatter.title} | Rangga Saputra`}</title>
        <meta name="description" content={frontmatter.description || 'Article by Rangga Saputra'} />
      </Head>

      <EffectTransition />
      <Layout>
        <div className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
          <div className="w-full max-w-4xl bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl border-r-4 border-b-4 p-6">

            <div className="top-0 bg-light dark:bg-dark z-10 py-4 mb-6">
              <h1 className="text-3xl font-bold mb-1">{frontmatter.title}</h1>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {frontmatter.date} &nbsp;|&nbsp; {views} views
              </div>
            </div>

            {frontmatter.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {frontmatter.tags.map((tag) => (
                  <span key={tag} className="bg-dark dark:bg-primaryDark text-white text-xs px-3 py-1 rounded-md font-medium">#{tag}</span>
                ))}
              </div>
            )}

            {frontmatter.description && (
              <p className="italic text-sm text-gray-600 dark:text-gray-400 mb-4">
                {frontmatter.description}
              </p>
            )}

            {frontmatter.coverImage && (
              <div className="mb-6">
                <ArticleBannerImage
                  src={frontmatter.coverImage}
                  alt={frontmatter.title}
                  priority
                  size="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-xl border border-gray-300 dark:border-gray-700"
                />
              </div>
            )}

            <div className="prose max-w-none text-sm sm:text-base dark:prose-invert">
              <MDXRemote {...mdxSource} components={MDXComponents} />


            </div>

{/* Share */}
            <div className="mt-10 border-t pt-6">
              <h3 className="text-lg font-semibold mb-4">Share this article</h3>
              <div className="flex flex-wrap gap-3 text-lg">
                <a href={`https://wa.me/?text=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                <a href={`https://t.me/share/url?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"><FaTelegramPlane /></a>
                <a href={`https://twitter.com/share?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                <button onClick={() => navigator.clipboard.writeText(url)} title="Copy link"><FaCopy /></button>
              </div>
            </div>

            {/* Author */}
            <div className="mt-10 flex items-center gap-4 p-4 border rounded-xl dark:border-gray-700 bg-gray-50 dark:bg-[#1e1e1e]">
              <Image src="/images/profile/dev-pict.png" alt="Rangga Saputra" width={60} height={60} className="rounded-full object-cover border border-gray-300 dark:border-gray-600" />
              <div>
                <h4 className="font-semibold">Rangga Saputra</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">IT Manager & Cybersecurity Enthusiast</p>
                <p className="text-xs text-gray-700 dark:text-gray-300 mt-1">
                  I love sharing practical insights on tech, cybersecurity, and infrastructure. 👨‍💻
                </p>
              </div>
            </div>

            {/* All Categories */}
            {allCategories && allCategories.length > 0 && (
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-2">📚 All Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/categories/${encodeURIComponent(cat.toLowerCase().replace(/\s+/g, '-'))}`}
                      className="bg-dark dark:bg-primaryDark text-white dark:text-black text-xs px-3 py-1 rounded-md font-medium"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Posts */}
            {popularPosts.length > 0 && (
              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">🔥 Popular Posts</h3>
                <ul className="space-y-4">
                  {popularPosts.map((post) => (
                    <li key={post.slug} className="flex items-center gap-3">
                      {post.frontmatter.coverImage && (
                        <div className="w-14 h-14 flex-shrink-0 rounded overflow-hidden">
                          <Image
                            src={post.frontmatter.coverImage}
                            alt={post.frontmatter.title}
                            width={56}
                            height={56}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <div>
                        <Link
                          href={`/articles/${post.slug}`}
                          className="text-sm font-medium hover:underline text-dark dark:text-light line-clamp-2"
                        >
                          {post.frontmatter.title}
                        </Link>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{post.frontmatter.date}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Pagination */}
            {(prevPost || nextPost) && (
              <div className="mt-10 flex justify-between items-center gap-4 border-t pt-6">
                {prevPost ? (
                  <Link
                    href={`/articles/${prevPost.slug}`}
                    className="group flex items-center gap-2 hover:translate-x-[-4px] transition-transform duration-300 text-sm"
                  >
                    <span className="text-lg">⬅️</span>
                    <div>
                      <div className="text-xs text-gray-500">Previous</div>
                      <div className="font-semibold group-hover:underline line-clamp-2">
                        {prevPost.frontmatter.title}
                      </div>
                    </div>
                  </Link>
                ) : <div />}

                {nextPost ? (
                  <Link
                    href={`/articles/${nextPost.slug}`}
                    className="group flex items-center gap-2 ml-auto hover:translate-x-[4px] transition-transform duration-300 text-sm"
                  >
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Next</div>
                      <div className="font-semibold group-hover:underline line-clamp-2">
                        {nextPost.frontmatter.title}
                      </div>
                    </div>
                    <span className="text-lg">➡️</span>
                  </Link>
                ) : <div />}
              </div>
            )}
          </div>
        </div>

        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-dark dark:bg-primaryDark text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            ↑
          </button>
        )}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'src/content/articles');
  const files = fs.readdirSync(dir);

  const paths = files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((filename) => ({
      params: { slug: filename.replace(/\.mdx?$/, '') },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesDir = path.join(process.cwd(), 'src/content/articles');
  
  let filePath = path.join(articlesDir, `${params.slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(articlesDir, `${params.slug}.md`);
  }

  if (!fs.existsSync(filePath)) {
    throw new Error(`Article not found for slug: ${params.slug}`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
 
  const mdxSource = await serialize(content, {
  scope: data,
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
    format: 'mdx',
  },
});

  const redisKey = `views:articles:${params.slug}`;
  await redis.incr(redisKey);
  const views = await redis.get(redisKey);

  const allFiles = fs.readdirSync(articlesDir);
  const postViews = await Promise.all(
    allFiles.map(async (file) => {
      const slug = file.replace(/\.mdx?$/, '');
      const key = `views:articles:${slug}`;
      const viewCount = parseInt((await redis.get(key)) || '0', 10);
      const content = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
      const { data } = matter(content);
      return { slug, frontmatter: data, views: viewCount };
    })
  );

  const popularPosts = postViews.sort((a, b) => b.views - a.views).slice(0, 5);

  const category = Array.isArray(data.category) ? data.category[0] : data.category;
  const sameCategory = postViews
    .filter((p) => {
      const cats = Array.isArray(p.frontmatter.category)
        ? p.frontmatter.category
        : [p.frontmatter.category];
      return cats.includes(category);
    })
    .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));

  const currentIndex = sameCategory.findIndex((p) => p.slug === params.slug);
  const prevPost = sameCategory[currentIndex + 1] || null;
  const nextPost = sameCategory[currentIndex - 1] || null;

  const allCategoriesSet = new Set();
  postViews.forEach((post) => {
    const cats = Array.isArray(post.frontmatter.category)
      ? post.frontmatter.category
      : [post.frontmatter.category];
    cats.forEach((cat) => cat && allCategoriesSet.add(cat));
  });
  const allCategories = Array.from(allCategoriesSet).sort();

  return {
    props: {
      frontmatter: data,
      mdxSource,
      views: views || 0,
      popularPosts,
      prevPost,
      nextPost,
      allCategories,
    },
  };
}
