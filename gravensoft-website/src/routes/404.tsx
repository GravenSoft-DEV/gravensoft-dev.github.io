import Block from "../components/Block";

export default function NotFound() {
  return (
    <main>
      <title>Page not found! | Gravensoft</title>
      <Block classOverride={`relative bg-[rgba(19,13,28,1)] min-h-[100svh]`}>
        <h1 className="text-4xl font-bold">Nothing here but us.</h1>
        <p style={{ whiteSpace: 'pre-line' }}>
          The page you are looking for does not exist.
        </p>
      </Block>
    </main>
  );
}
