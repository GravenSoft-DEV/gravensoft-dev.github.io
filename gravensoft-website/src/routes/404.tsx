import Block from "../components/Block";

export default function NotFound() {
  return (
    <main>
      <title>Page not found! | GravenSoft</title>
      <div className='h-16' />
      <Block className={`relative bg-[rgba(19,13,28,1)] min-h-[50svh]`}>
        <h1 className="text-4xl font-bold">Nothing here but us</h1>
        <p>and these crickets...</p>
        <br></br>
        <p>The page you are looking for does not exist!</p>
      </Block>
    </main>
  );
}
