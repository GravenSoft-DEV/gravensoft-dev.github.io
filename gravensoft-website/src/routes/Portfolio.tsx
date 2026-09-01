// import { Link } from 'react-router-dom';
import Block from '../components/Block';
// import { HoverPanel } from '../components/Panel';
// import Chip from '../components/Chip';

export default function Portfolio() {
   return (
    <main>
      <Block className="bg-[rgba(19,13,28,1)] min-h-svh">
        <h1 className="text-4xl font-bold mb-6 text-white">Our Work</h1>
        <hr className='border-gray-600 my-8'/>
      </Block>
    </main>
//     <main>
//       <div className='h-16' />
//       <Block className="bg-[rgba(19,13,28,1)] min-h-[100svh]">
//         <h1 className="text-4xl font-bold mb-6 text-white">Our Work</h1>
// 
//         <hr className='border-gray-600 my-8'/>
// 
//         <div className="flex flex-wrap gap-8 w-full max-w-5xl">
//           {filteredPosts.map((post) => (
//             <Link 
//               key={post.slug} 
//               to={`/blogs/${post.slug}`}
//               className="grow w-[calc(50%-1rem)] min-w-70" 
//             >
//               <HoverPanel className="w-full h-full min-h-32 bg-gray-800 p-6 text-left" translate={true}>
//                 <h2 className="text-2xl font-bold4 text-purple-300">{post.title}</h2>
//                 <p className="text-sm text-gray-400 mb-4">{post.date}</p>
//                 <p className="text-gray-200 mb-4">{post.excerpt}</p>
//                 
//                 <div className="flex gap-2">
//                   {post.tags.map(tag => (
//                     <Chip key={tag} colorOverride="gray">{tag}</Chip>
//                   ))}
//                 </div>
//               </HoverPanel>
//             </Link>
//           ))}
//         </div>
//       </Block>
//     </main>
  );
}