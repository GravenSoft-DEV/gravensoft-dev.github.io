import Block from "../components/Block";
import { HOME } from "../data/routes/home"

export default function Home() {
  return (
    <>
      <Block classOverride={`bg-gray-900 min-h-[100svh]`}>
        <h1 className="text-4xl font-bold">{HOME.heroTitle}</h1>
        <p>
            {HOME.heroSubtitle}
        </p>
      </Block>
      <Block classOverride={`bg-gray-800`}>
        <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
        <p>
            {HOME.testTest}
        </p>
      </Block>
      <Block classOverride={`bg-gray-900`} borderVisible={false}>
        <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
        <p>
            {HOME.testTest}
        </p>
      </Block>
    </>
  );
}