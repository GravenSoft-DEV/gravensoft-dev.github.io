import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Block from '../components/Block';
import { BLOG_POSTS } from '../data/routes-content/blogs';
import { useDocumentTitle } from '../shared/Utils';

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  
  const postMeta = BLOG_POSTS.find(p => p.slug === slug);
  
  useDocumentTitle(postMeta ? `${postMeta.title} | GravenSoft` : "GravenSoft");

  useEffect(() => {
    if (postMeta) {
      fetch(postMeta.file)
        .then(res => res.text())
        .then(text => setContent(text))
        .catch(err => console.error("Failed to load post", err));
    }
  }, [postMeta]);

  if (!postMeta) return <Navigate to="/404" replace />;

  return (
    <main>
      <Block className="bg-zinc-950 min-h-svh flex justify-center items-center py-0">
        <div className='lg:border h-full mt-16 lg:py-16 border-zinc-800'>
          <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto w-full">
            <div className='mb-8'>
              <Link to="/blogs">Back to Blog</Link>
            </div>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>{postMeta.title}</h1>
            <p className="text-zinc-400 mb-4"><i>Posted on {postMeta.date}</i></p>

            <p className='text-zinc-400 italic'>{postMeta.tags.length > 1 ? "Tags" : "Tag"}: { postMeta.tags.join(', ') }</p>
            <hr className="border-zinc-700 my-8" />
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </Block>
    </main>
  );
}