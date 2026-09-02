import Block from "../components/Block";
import { useDocumentTitle } from "../shared/Utils";

export default function PrivacyPolicy() {
  useDocumentTitle(`Privacy Policy | GravenSoft`);

  return (
    <main>
      <Block className="bg-zinc-950 min-h-svh">
        <div className='border h-full mt-16 py-16 border-zinc-800'>
          <article className="prose prose-invert lg:prose-xl max-w-4xl mx-auto w-full">
            <h1 className='text-2xl font-bold'>Your privacy matters.</h1>
            <hr className="border-zinc-700 my-8" />
          </article>
        </div>
      </Block>
    </main>
  );
}