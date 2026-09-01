import Block from "../components/Block";
import { HoverableElement, Panel } from "../components/Panel";
import VideoPlayer from "../components/VideoPlayer";
import { HOME } from "../data/routes/home"
import badApple from '../assets/background.mp4'
import Chip from "../components/Chip";
import MarqueeModule from "react-fast-marquee";
import Button from "../components/Buttons";
import Hero from "../components/Hero";
const Marquee = (MarqueeModule as any).default || MarqueeModule;

export default function Home() {
  return (
    <main>
      <Hero className="flex flex-wrap justify-center sm:justify-start lg:mx-0 lg:max-w-5xl xl:mx-0 xl:max-w-7xl gap-16" fade={true} background={
        <VideoPlayer url={badApple} containerClassOverride="absolute inset-0 z-0 w-full h-full" loop={true} />
      }>
        <div className="md:max-w-[45%] sm:pl-8 xl:px-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center sm:text-left">{HOME.heroTitle}</h1>
          <p className='whitespace-pre-line text-center sm:text-left'>
            {HOME.heroSubtitle}
          </p>
          <div className="flex flex-wrap mt-16 gap-4 w-full justify-center sm:justify-start">
            <Button className="w-full sm:w-fit h-16 px-8 rounded-xl bg-white text-black font-bold" href="/portfolio"><p>Portfolio</p></Button>
            <Button className="w-full sm:w-fit h-16 px-8 rounded-xl border border-white bg-white/20 text-white font-bold" href="/contact"><p>Build with Us</p></Button>
          </div>
        </div>
      </Hero>
      <Block className={`bg-[rgba(69,60,82,1)]`}>
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
      <Block className={`bg-[rgba(19,13,28,1)]`}>
        <h1 className="text-4xl font-bold mb-8">{HOME.testTitle}</h1>
        <div className="flex flex-col sm:flex-row gap-8">
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
          <p>
              {HOME.testTest}
          </p>
        </div>
      </Block>
      <Block className={`bg-[rgba(69,60,82,1)]`}>
        <h1 className="text-4xl font-bold mb-8 text-center">{HOME.testTitle}</h1>
        <div className="flex flex-row gap-16">
          <p style={{ textAlign: "center" }}>
              {HOME.testTest}
          </p>
        </div>
      </Block>
      <Block className={`bg-[rgba(19,13,28,1)]`}>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
            <p>{HOME.testTest}</p>
          </div>
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
        </div>
      </Block>
      <Block className={`bg-[rgba(69,60,82,1)]`}>
        <div className="flex flex-col sm:flex-row gap-8">
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
            <p>{HOME.testTest}</p>
          </div>
        </div>
      </Block>
      <Block className={`bg-[rgba(19,13,28,1)]`}>
        <div className="flex flex-wrap xl:flex-row gap-8 justify-center items-center">
          <HoverableElement
            className="not-md:w-full not-xl:order-1 transition-all min-w-xs min-h-100 bg-linear-to-br border border-green-500 from-green-800/50 to-75% to-green-400/50"
            highlight={true}
            highlightOverride="hover:shadow-green-300/50 hover:shadow-xl hover:from-green-800/50 to-75% hover:to-green-400/75">
            {(hoverClasses) => (
              <Panel className={hoverClasses}>

              </Panel>
            )}
          </HoverableElement>
          <HoverableElement
            className="not-md:w-full not-xl:order-3 transition-all min-w-xs min-h-100 bg-linear-to-br border border-yellow-500 from-yellow-800/50 to-75% to-yellow-400/50"
            highlight={true}
            highlightOverride="hover:shadow-yellow-200/50 hover:shadow-xl hover:from-yellow-800/50 to-75% hover:to-yellow-300/75">
            {(hoverClasses) => (
              <Panel className={hoverClasses}>

              </Panel>
            )}
          </HoverableElement>
          <HoverableElement
            className="not-md:w-full not-xl:order-2 transition-all min-w-xs min-h-100 bg-linear-to-br border border-red-500 from-red-800/50 to-75% to-red-400/50"
            highlight={true}
            highlightOverride="hover:shadow-red-300/50 hover:shadow-xl hover:from-red-800/50 to-75% hover:to-red-400/75">
            {(hoverClasses) => (
              <Panel className={hoverClasses}>

              </Panel>
            )}
          </HoverableElement>
        </div>
      </Block>
      <Block className={`bg-[rgba(69,60,82,1)]`}>
        <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
          <Marquee pauseOnHover={true} className="w-full">
            <div className="flex">
              <Panel className="h-100 w-180 bg-gray-400 mx-2">Hey hey</Panel>
              <Panel className="h-100 w-180 bg-gray-400 mx-2">Hey hey</Panel>
              <Panel className="h-100 w-180 bg-gray-400 mx-2">Hey hey</Panel>
            </div>
          </Marquee>
        </div>
      </Block>
    </main>
  );
}