import Block from "../components/Block";
import { HoverableElement, Panel } from "../components/Panel";
import VideoPlayer from "../components/VideoPlayer";
import { HOME } from "../data/routes/home"
import badApple from '../assets/background.mp4'
import Chip from "../components/Chip";
import MarqueeModule from "react-fast-marquee";
import Button from "../components/Buttons";
import Hero from "../components/Hero";
import { useDocumentTitle } from "../shared/Utils";
const Marquee = (MarqueeModule as any).default || MarqueeModule;

export default function Home() {
  useDocumentTitle(`Home | GravenSoft`);

  return (
    <main>
      <Hero className="flex flex-wrap justify-center lg:justify-start lg:max-w-5xl mx-8 lg:mx-0 xl:max-w-7xl gap-16" fade={true} background={
        <VideoPlayer url={badApple} containerClassOverride="absolute inset-0 z-0 w-full h-full" loop={true} />
      }>
        <div className="md:w-xl lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left">{HOME.heroTitle}</h1>
          <p className='whitespace-pre-line text-center md:text-left'>
            {HOME.heroSubtitle}
          </p>
          <div className="flex flex-wrap mt-16 gap-4 w-full justify-center md:justify-start">
            <Button className="transition-transform origin-center hover:scale-90 w-full sm:w-fit h-16 px-8 rounded-xl bg-white text-black font-bold hover:bg-zinc-950 hover:text-white" href="/contact"><p>Build with Us</p></Button>
            <Button className="transition-transform origin-center hover:scale-90 w-full sm:w-fit h-16 px-8 rounded-xl border border-white bg-white/20 text-white font-bold hover:bg-white hover:text-black" href="/portfolio"><p>Portfolio</p></Button>
          </div>
        </div>
      </Hero>
      <Block className={`bg-zinc-950`}>
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
      <Block className={`bg-zinc-950`}>
        <h1 className="text-4xl font-bold mb-8">{HOME.testTitle}</h1>
        <div className="flex flex-col sm:flex-row gap-8">
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
          <p>
              {HOME.testTest}
          </p>
        </div>
      </Block>
      <Block className={`bg-zinc-900`}>
        <h1 className="text-4xl font-bold mb-8 text-center">{HOME.testTitle}</h1>
        <div className="flex flex-row gap-16">
          <p style={{ textAlign: "center" }}>
              {HOME.testTest}
          </p>
        </div>
      </Block>
      <Block className={`bg-zinc-950 flex`}>
        <div className="flex flex-col sm:flex-row gap-8 mb-24">
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
            <p>{HOME.testTest}</p>
          </div>
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <Panel>KALDHWKJDHLWADHKJADHJHjkd</Panel>
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
            <p>{HOME.testTest}</p>
          </div>
        </div>
      </Block>
      <Block className={`bg-zinc-900`}>
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
      <Block className={`bg-zinc-950`}>
        <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
          <Marquee pauseOnHover={true} className="w-full">
            <div className="flex">
              <Panel className="h-100 w-180 bg-zinc-400 mx-2">Hey hey</Panel>
              <Panel className="h-100 w-180 bg-zinc-400 mx-2">Hey hey</Panel>
              <Panel className="h-100 w-180 bg-zinc-400 mx-2">Hey hey</Panel>
            </div>
          </Marquee>
        </div>
      </Block>
    </main>
  );
}