import Block from "../components/Block";
import Panel from "../components/Panel";
import { HOME } from "../data/routes/home"

export default function Home() {
  return (
    <main>
      <title>Home | Gravensoft</title>
      <Block classOverride={`relative bg-[rgba(19,13,28,1)] min-h-[100svh]`}>
        <h1 className="text-4xl font-bold">{HOME.heroTitle}</h1>
        <p style={{ whiteSpace: 'pre-line' }}>
            {HOME.heroSubtitle}
        </p>
      </Block>
      <Block classOverride={`bg-[rgba(69,60,82,1)]`}>
        <h1 className="text-4xl font-bold mb-8">{HOME.testTitle}</h1>
        <div className="flex flex-col sm:flex-row gap-8">
          <p>{HOME.testTest}</p>
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
        </div>
      </Block>
      <Block classOverride={`bg-[rgba(19,13,28,1)]`}>
        <h1 className="text-4xl font-bold mb-8">{HOME.testTitle}</h1>
        <div className="flex flex-col sm:flex-row gap-8">
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
          <p>
              {HOME.testTest}
          </p>
        </div>
      </Block>
      <Block classOverride={`bg-[rgba(69,60,82,1)]`}>
        <h1 className="text-4xl font-bold mb-8 text-center">{HOME.testTitle}</h1>
        <div className="flex flex-row gap-16">
          <p style={{ textAlign: "center" }}>
              {HOME.testTest}
          </p>
        </div>
      </Block>
      <Block classOverride={`bg-[rgba(19,13,28,1)]`} borderVisible={false}>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
            <p>{HOME.testTest}</p>
          </div>
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
        </div>
      </Block>
      <Block classOverride={`bg-[rgba(69,60,82,1)]`} borderVisible={false}>
        <div className="flex flex-col sm:flex-row gap-8">
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
            <p>{HOME.testTest}</p>
          </div>
        </div>
      </Block>
    </main>
  );
}