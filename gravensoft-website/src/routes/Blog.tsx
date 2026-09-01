import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Block from '../components/Block';
import { HoverableElement, Panel } from '../components/Panel';
import Chip from '../components/Chip';
import { BLOG_POSTS } from '../data/blogs';
import { useDocumentTitle } from '../shared/Utils';

export default function Blog() {
  useDocumentTitle(`Blog | GravenSoft`);
  
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    BLOG_POSTS.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);
  
  const filteredPosts = useMemo(() => {
    return activeFilter 
      ? BLOG_POSTS.filter(post => post.tags.includes(activeFilter))
      : BLOG_POSTS;
  }, [activeFilter]);

  return (
    <main>
      <Block className="bg-zinc-950 min-h-svh">
        <h1 className="text-4xl font-bold mb-6 text-white">Latest Posts</h1>
        
        <div className="flex flex-wrap gap-3 w-full max-w-3xl">
          <p className='font-bold'>Tags:</p>
          <button onClick={() => setActiveFilter(null)}>
             <Chip className={`transition-all duration-75`} colorOverride={activeFilter === null ? 'green' : 'gray'}>
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

        <hr className='border-zinc-600 my-8'/>

        <div className="flex flex-wrap gap-8 w-full max-w-5xl">
          {filteredPosts.map((post) => (
            <Link 
              key={post.slug} 
              to={`/blogs/${post.slug}`}
              className="grow w-[calc(50%-1rem)] min-w-70" 
            >
              <HoverableElement
                translate={false}
                highlight={true}
                highlightOverride='hover:border-white hover:bg-zinc-700/50'
                >
                {(hoverClasses) => (
                <Panel className={`group border border-zinc-600 w-full h-full min-h-32 bg-zinc-800/50 text-left ${hoverClasses} flex flex-row justify-between`}>
                  <div className='p-6'>
                    <h2 className="text-2xl font-bold text-zinc-100">{post.title}</h2>
                    <p className="text-sm italic text-zinc-400 mb-4">{post.date}</p>
                    <p className="text-zinc-200 mb-4">{post.excerpt}</p>
                    <div className="flex gap-2">
                      {post.tags.map(tag => (
                        <Chip key={tag} colorOverride="gray">{tag}</Chip>
                      ))}
                    </div>
                  </div>
                  <div className="w-full max-w-xs aspect-video overflow-hidden rounded-2xl">
                    <img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125" src={post.thumbnail}></img>
                  </div>
                </Panel>
                )}
              </HoverableElement>
            </Link>
          ))}
          {filteredPosts.length === 0 && (
            <p className="text-zinc-400">No posts found for this tag.</p>
          )}
        </div>
      </Block>
    </main>
  );
}