import Block from "../components/Block";
import Panel from "../components/Panel";
import VideoPlayer from "../components/VideoPlayer";
import { HOME } from "../data/routes/home"
import badApple from '../assets/background.mp4'

export default function Home() {
  return (
    <main>
      <title>Home | Gravensoft</title>
      <Block classOverride={`relative bg-[rgba(19,13,28,1)] min-h-[100svh]`}>
        <div className="relative z-10 text-white mix-blend-difference">
          <h1 className="text-4xl font-bold ">{HOME.heroTitle}</h1>
          <p style={{ whiteSpace: 'pre-line' }} className="mt-4">
            {HOME.heroSubtitle}
          </p>
        </div>
        <div className="pointer-events-none z-1 absolute left-0 bottom-0 w-full h-full bg-linear-to-b from-black/0 to-250% to-black flex items-center justify-center">
        </div>
        <VideoPlayer url={badApple} containerClassOverride="absolute inset-0 z-0 w-full h-full"/>
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
      <Block classOverride={`bg-[rgba(19,13,28,1)]`}>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
            <p>{HOME.testTest}</p>
          </div>
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
        </div>
      </Block>
      <Block classOverride={`bg-[rgba(69,60,82,1)]`}>
        <div className="flex flex-col sm:flex-row gap-8">
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
            <p>{HOME.testTest}</p>
          </div>
        </div>
      </Block>
      <Block classOverride={`bg-[rgba(19,13,28,1)]`} borderVisible={false}>
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          <Panel classOverride="min-w-xs min-h-100">Basic</Panel>
          <Panel classOverride="min-w-xs min-h-100">Premium</Panel>
          <Panel classOverride="min-w-xs min-h-100">Pro</Panel>
        </div>
      </Block>
    </main>
  );
}