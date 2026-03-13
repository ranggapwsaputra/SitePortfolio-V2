import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Head from 'next/head';
import EffectTransition from '@/components/EffectTransition';

export default function CategoryPage({ categoryName, posts }) {
  return (
    <>
      <Head>
        <title>{categoryName} Articles | Rangga Saputra</title>
        <meta name="description" content={`Articles under ${categoryName}`} />
      </Head>
      <EffectTransition />

      <Layout>
        <div className="max-w-4xl mx-auto w-full py-6 px-4 dark:text-light">
          <h1 className="text-3xl font-bold mb-6 capitalize">
            📚 {categoryName.replace(/-/g, ' ')} Articles
          </h1>

          {posts.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 italic">No articles found in this category.</p>
          ) : (
            <ul className="space-y-6">
              {posts.map(({ slug, frontmatter }) => (
                <li key={slug} className="p-4 rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-[#1e1e1e]">
                  <Link href={`/articles/${slug}`} className="text-xl font-semibold hover:underline">
                    {frontmatter.title}
                  </Link>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{frontmatter.date}</p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                    {frontmatter.description}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const dir = path.join(process.cwd(), 'src/content/articles');
  const files = fs.readdirSync(dir);

  const categories = new Set();

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(content);

    let cats = data.category;
    if (cats) {
      if (!Array.isArray(cats)) cats = [cats];
      cats.forEach((cat) => categories.add(cat.toLowerCase().replace(/\s+/g, '-')));
    }
  }

  const paths = [...categories].map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const dir = path.join(process.cwd(), 'src/content/articles');
  const files = fs.readdirSync(dir);

  const posts = [];

  for (const file of files) {
    const slug = file.replace(/\.mdx?$/, '');
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(content);

    let cats = data.category;
    if (cats) {
      if (!Array.isArray(cats)) cats = [cats];

      const matched = cats.some(
        (cat) => cat.toLowerCase().replace(/\s+/g, '-') === params.slug
      );

      if (matched) {
        posts.push({ slug, frontmatter: data });
      }
    }
  }

  return {
    props: {
      categoryName: params.slug,
      posts,
    },
  };
}
