import Block from "../components/Block";

export default function Portfolio() {
  return (
    <main>
      <title>Portfolio | GravenSoft</title>
      <div className='h-16' />
      <Block classOverride={`bg-[rgba(69,60,82,1)]`}>
        <h1 className="text-4xl font-bold mb-8">Made by GravenSoft</h1>
        <div className="flex flex-col sm:flex-row gap-8">
          <p>nexsplit</p>
        </div>
      </Block>
    </main>
  );
}