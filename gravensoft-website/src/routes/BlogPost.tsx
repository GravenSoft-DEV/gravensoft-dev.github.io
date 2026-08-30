import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Block from '../components/Block';
import { BLOG_POSTS } from '../data/blogs';

export default function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  
  const postMeta = BLOG_POSTS.find(p => p.slug === slug);

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
      <div className='h-16' />
      <Block classOverride="bg-[rgba(19,13,28,1)] min-h-[100svh]">
        <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto w-full">
          <div className='my-10'>
            <Link to="/blogs">Back to Blog</Link>
          </div>
          <h1>{postMeta.title}</h1>
          <p className="text-gray-400">{postMeta.date}</p>
          <hr className="border-gray-600 my-8" />
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </Block>
    </main>
  );
}