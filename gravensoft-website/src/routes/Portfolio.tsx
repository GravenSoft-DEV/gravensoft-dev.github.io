// import { Link } from 'react-router-dom';
import Block from '../components/Block';
import { useDocumentTitle } from '../shared/Utils';
// import { HoverPanel } from '../components/Panel';
// import Chip from '../components/Chip';

export default function Portfolio() {
  useDocumentTitle(`Portfolio | GravenSoft`);

   return (
    <main>
      <Block className="bg-zinc-950 min-h-svh">
        <h1 className="text-4xl font-bold mb-6 text-white">Our Work</h1>
        <hr className='border-zinc-600 my-8'/>
      </Block>
    </main>
  );
}