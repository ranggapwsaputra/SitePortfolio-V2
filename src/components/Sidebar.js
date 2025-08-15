import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ categories = [], popularPosts = [] }) => (
  <aside className="space-y-10">



{/* Categories */}
    {Array.isArray(categories) && categories.length > 0 && (
      <div>
        <h3 className="text-lg font-semibold mb-4 text-dark dark:text-light border-b pb-2">📚 Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/categories/${encodeURIComponent(cat.toLowerCase().replace(/\s+/g, '-'))}`}
              className="bg-primary dark:bg-primaryDark dark:text-black text-white text-xs px-3 py-1 rounded-md font-medium"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
    )}

    {/* Popular Posts */}
    {popularPosts.length > 0 && (
      <div>
        <h3 className="text-lg font-semibold mb-4 text-dark dark:text-light border-b pb-2">🔥 Popular Posts</h3>
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

    

  </aside>
);

export default Sidebar;
