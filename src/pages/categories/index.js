import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Head from 'next/head';
import EffectTransition from '@/components/EffectTransition';

export default function CategoriesIndex({ categories }) {
  return (
    <>
      <Head>
        <title>All Categories | Rangga Saputra</title>
        <meta name="description" content="Browse all blog categories by Rangga Saputra" />
      </Head> <EffectTransition />

      <Layout>
        <div className="max-w-4xl mx-auto w-full py-6 px-4 dark:text-light">
          <h1 className="text-3xl font-bold mb-6">📚 All Categories</h1>

          {categories.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400 italic">No categories found.</p>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categories/${cat.slug}`}
                    className="block w-full bg-primary dark:bg-primaryDark text-white dark:text-black px-4 py-3 text-sm font-medium rounded-lg text-center hover:opacity-90 transition-all"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'src/content/articles');
  const files = fs.readdirSync(dir);

  const categoryMap = new Map();

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(content);

    let cats = data.category;
    if (cats) {
      if (!Array.isArray(cats)) cats = [cats];
      cats.forEach((cat) => {
        const slug = cat.toLowerCase().replace(/\s+/g, '-');
        if (!categoryMap.has(slug)) {
          categoryMap.set(slug, cat);
        }
      });
    }
  }

  const categories = [...categoryMap.entries()].map(([slug, name]) => ({ slug, name }));

  return {
    props: { categories },
  };
}
