import Block from "../components/Block";
import { useDocumentTitle } from "../shared/Utils";

export default function Contact() {
  useDocumentTitle(`Contact | GravenSoft`);

  return (
    <main>
      <Block className="bg-zinc-950 min-h-svh">
        <h1 className="text-4xl font-bold mb-6 text-white">Let's Build, <i>Together.</i></h1>
        <hr className='border-zinc-600 my-8'/>
      </Block>
    </main>
  );
}