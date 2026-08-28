import Block from "../components/Block";
import Panel from "../components/Panel";
import { HOME } from "../data/routes/home"

export default function Home() {
  return (
    <>
      <Block classOverride={`bg-gray-900 min-h-[100svh]`}>
        <h1 className="text-4xl font-bold">{HOME.heroTitle}</h1>
        <p style={{ whiteSpace: 'pre-line' }}>
            {HOME.heroSubtitle}
        </p>
      </Block>
      <Block classOverride={`bg-gray-800`}>
        <h1 className="text-4xl font-bold mb-8">{HOME.testTitle}</h1>
        <div className="flex flex-row gap-16">
          <p>
              {HOME.testTest}
          </p>
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
        </div>
      </Block>
      <Block classOverride={`bg-gray-900`}>
        <h1 className="text-4xl font-bold mb-8">{HOME.testTitle}</h1>
        <div className="flex flex-row gap-16">
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
          <p>
              {HOME.testTest}
          </p>
        </div>
      </Block>
      <Block classOverride={`bg-gray-800`} borderVisible={false}>
        <h1 className="text-4xl font-bold mb-8 text-center">{HOME.testTitle}</h1>
        <div className="flex flex-row gap-16">
          <p style={{ textAlign: "center" }}>
              {HOME.testTest}
          </p>
        </div>
      </Block>
    </>
  );
}