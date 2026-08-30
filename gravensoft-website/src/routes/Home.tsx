import Block from "../components/Block";
import { HoverPanel, Panel } from "../components/Panel";
import VideoPlayer from "../components/VideoPlayer";
import { HOME } from "../data/routes/home"
import badApple from '../assets/background.mp4'
import Chip from "../components/Chip";
import MarqueeModule from "react-fast-marquee";
const Marquee = (MarqueeModule as any).default || MarqueeModule;

export default function Home() {
  return (
    <main>
      <title>Home | GravenSoft</title>
      <Block classOverride={`relative bg-[rgba(19,13,28,1)] min-h-[100svh]`}>
        <div className="relative z-10 text-white mix-blend-difference">
          <h1 className="text-4xl font-bold ">{HOME.heroTitle}</h1>
          <p style={{ whiteSpace: 'pre-line' }} className="mt-4">
            {HOME.heroSubtitle}
          </p>
        </div>
        <div className="pointer-events-none z-1 absolute left-0 bottom-0 w-full h-full bg-linear-to-b from-black/0 to-250% to-black flex items-center justify-center">
        </div>
        <VideoPlayer url={badApple} containerClassOverride="absolute inset-0 z-0 w-full h-full" loop={true} />
      </Block>
      <Block classOverride={`bg-[rgba(69,60,82,1)]`}>
        <h1 className="text-4xl font-bold mb-8">{HOME.testTitle}</h1>
        <div className="flex flex-col sm:flex-row gap-8 mb-8">
          <p>{HOME.testTest}</p>
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
        </div>
        <div className="flex flex-row gap-4">
          <Chip colorOverride={'red'}>Test</Chip>
          <Chip colorOverride={'blue'}>Test</Chip>
          <Chip colorOverride={'green'}>Test</Chip>
          <Chip colorOverride={'gray'}>Test</Chip>
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
      <Block classOverride={`bg-[rgba(19,13,28,1)]`}>
        <div className="flex flex-wrap xl:flex-row gap-8 justify-center items-center">
          <HoverPanel classOverride="not-md:w-full not-xl:order-1 transition-all min-w-xs min-h-100 bg-linear-to-br border-1 border-green-500 from-green-800/50 to-75% to-green-400/50" translate={true} highlight={true} highlightOverride="hover:shadow-green-300/50 hover:shadow-xl hover:from-green-800/50 to-75% hover:to-green-300/50">Basic</HoverPanel>
          <HoverPanel classOverride="not-md:w-full not-xl:order-3 transition-all min-w-xs min-h-110 bg-linear-to-br border-1 border-yellow-500 from-yellow-800/50 to-75% to-yellow-400/50" translate={true} highlight={true} highlightOverride="hover:shadow-yellow-200/50 hover:shadow-xl hover:from-yellow-800/50 to-75% hover:to-yellow-200/50">Premium</HoverPanel>
          <HoverPanel classOverride="not-md:w-full not-xl:order-2 transition-all min-w-xs min-h-100 bg-linear-to-br border-1 border-red-500 from-red-800/50 to-75% to-red-400/50" translate={true} highlight={true} highlightOverride="hover:shadow-red-300/50 hover:shadow-xl hover:from-red-800/50 to-75% hover:to-red-300/50">Pro</HoverPanel>
        </div>
      </Block>
      <Block classOverride={`bg-[rgba(69,60,82,1)]`}>
        <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
          <Marquee pauseOnHover={true} className="w-full">
            <div className="flex">
              <Panel classOverride="h-100 w-180 bg-gray-400 mx-2">Hey hey</Panel>
              <Panel classOverride="h-100 w-180 bg-gray-400 mx-2">Hey hey</Panel>
              <Panel classOverride="h-100 w-180 bg-gray-400 mx-2">Hey hey</Panel>
            </div>
          </Marquee>
        </div>
      </Block>
    </main>
  );
}