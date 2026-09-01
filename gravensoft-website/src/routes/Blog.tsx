import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Block from '../components/Block';
import { HoverableElement, Panel } from '../components/Panel';
import Chip from '../components/Chip';
import { BLOG_POSTS } from '../data/blogs';

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    BLOG_POSTS.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  const filteredPosts = activeFilter 
    ? BLOG_POSTS.filter(post => post.tags.includes(activeFilter))
    : BLOG_POSTS;

  return (
    <main>
      <Block className="bg-[rgba(19,13,28,1)] min-h-[100svh]">
        <h1 className="text-4xl font-bold mb-6 text-white">Latest Posts</h1>
        
        <div className="flex flex-wrap gap-3 w-full max-w-3xl">
          <p className='font-bold'>Tags:</p>
          <button onClick={() => setActiveFilter(null)}>
             <Chip className='transition-all duration-75' colorOverride={activeFilter === null ? 'green' : 'gray'}>
               All
             </Chip>
          </button>
          {availableTags.map(tag => (
            <button key={tag} onClick={() => setActiveFilter(tag)}>
              <Chip className='transition-all duration-75' colorOverride={activeFilter === tag ? 'green' : 'gray'}>
                {tag}
              </Chip>
            </button>
          ))}
        </div>

        <hr className='border-gray-600 my-8'/>

        <div className="flex flex-wrap gap-8 w-full max-w-5xl">
          {filteredPosts.map((post) => (
            <Link 
              key={post.slug} 
              to={`/blogs/${post.slug}`}
              className="grow w-[calc(50%-1rem)] min-w-70" 
            >
              <HoverableElement>
                {(hoverClasses) => (
                <Panel className={`w-full h-full min-h-32 bg-gray-800 p-6 text-left ${hoverClasses}`}>
                  <h2 className="text-2xl font-bold4 text-purple-300">{post.title}</h2>
                  <p className="text-sm text-gray-400 mb-4">{post.date}</p>
                  <p className="text-gray-200 mb-4">{post.excerpt}</p>
                  
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <Chip key={tag} colorOverride="gray">{tag}</Chip>
                    ))}
                  </div>
                </Panel>
                )}
              </HoverableElement>
            </Link>
          ))}
          {filteredPosts.length === 0 && (
            <p className="text-gray-400">No posts found for this tag.</p>
          )}
        </div>
      </Block>
    </main>
  );
}