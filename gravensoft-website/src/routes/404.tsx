import Block from "../components/Block";
import { useDocumentTitle } from "../shared/Utils";

export default function NotFound() {
  useDocumentTitle(`Page Not Found | GravenSoft`);
  return (
    <main>
      <div className='h-16' />
      <Block className={`relative bg-black min-h-[50svh]`}>
        <h1 className="text-4xl font-bold">Nothing here but us</h1>
        <p>and these crickets...</p>
        <br></br>
        <p>The page you are looking for does not exist!</p>
      </Block>
    </main>
  );
}
