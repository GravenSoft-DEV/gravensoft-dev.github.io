import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Block from '../components/Block';
import { BLOG_POSTS } from '../data/blogs';
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
      <title>{postMeta.title} | GravenSoft</title>
      <Block className="bg-black min-h-svh">
        <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto w-full">
          <div className='my-10'>
            <Link to="/blogs">Back to Blog</Link>
          </div>
          <h1 className='text-2xl font-bold'>{postMeta.title}</h1>
          <p className="text-zinc-400">Posted on {postMeta.date}</p>
          <hr className="border-zinc-600 my-8" />
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </Block>
    </main>
  );
}