import Block from "../components/Block";
import { HoverPanel, Panel } from "../components/Panel";
import VideoPlayer from "../components/VideoPlayer";
import { HOME } from "../data/routes-content/home"
import badApple from '../assets/background.mp4'
import Chip from "../components/Chip";
import MarqueeModule from "react-fast-marquee";
import Button from "../components/Buttons";
import Hero from "../components/Hero";
import { useDocumentTitle } from "../shared/Utils";
import { GlowEffect } from "@/components/motion-primitives/glow-effect";
//import Carousel from "@/components/Carousel";
//import type { JSX } from "react";
const Marquee = (MarqueeModule as any).default || MarqueeModule;

//const panels:JSX.Element[] = [
//  <HoverPanel className="w-xs order-1 transition-all min-w-xs min-h-100 bg-linear-to-br border border-green-500 from-green-800/50 to-75% to-green-400/50" translate={false} highlight={true} highlightOverride="md:hover:shadow-green-300/50 md:hover:shadow-xl md:hover:from-green-800/50 to-75% md:hover:to-green-300/50"></HoverPanel>,
//  <HoverPanel className="w-xs order-3 transition-all min-w-xs min-h-100 bg-linear-to-br border border-red-500 from-red-800/50 to-75% to-red-400/50" translate={false} highlight={true} highlightOverride="md:hover:shadow-red-300/50 md:hover:shadow-xl md:hover:from-red-800/50 to-75% md:hover:to-red-300/50"></HoverPanel>,
//  <HoverPanel className="w-xs order-2 transition-all min-w-xs min-h-100 xl:min-h-110 bg-linear-to-br border border-yellow-500 from-yellow-800/50 to-75% to-yellow-400/50" translate={false} highlight={true} highlightOverride="md:hover:shadow-yellow-200/50 md:hover:shadow-xl md:hover:from-yellow-800/50 to-75% md:hover:to-yellow-200/50"></HoverPanel>,
//]

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
            <div className="z-10 group relative transition-transform origin-center hover:scale-95 w-full sm:w-fit rounded-xl">
              <GlowEffect
                className={`absolute inset-0 group-hover:hidden pointer-events-none z-0`}
                colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                mode="colorShift"
                blur="soft"
                duration={2}
                scale={1.01}
              />
              <Button 
                href="/contact"
                className="relative z-10 w-full sm:w-fit h-16 px-8 rounded-xl bg-white text-black font-bold hover:bg-zinc-950 hover:text-white"
              >
                Build with Us
              </Button>
            </div>
            <Button className="transition-transform origin-center hover:scale-95 w-full sm:w-fit h-16 px-8 rounded-xl border border-white bg-white/20 text-white font-bold hover:bg-white hover:text-black" href="/portfolio"><p>Portfolio</p></Button>
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
          <div className="flex flex-col gap-8">
            <h1 className="text-4xl font-bold">{HOME.testTitle}</h1>
            <p>{HOME.testTest}</p>
          </div>
        </div>
      </Block>
      <Block className={`bg-zinc-900`}>
        <div className="flex flex-col xl:flex-row w-full gap-8 justify-center items-center">
          <HoverPanel className="w-full xl:w-xs xl:order-2 mx-8 xl:mx-auto transition-all min-h-100 xl:min-h-110 bg-linear-to-br border border-yellow-500 from-yellow-800/50 to-75% to-yellow-400/50" translate={false} highlight={true} highlightOverride="md:hover:shadow-yellow-200/50 md:hover:shadow-xl md:hover:from-yellow-800/50 to-75% md:hover:to-yellow-200/50"></HoverPanel>
          <HoverPanel className="w-full xl:w-xs xl:order-3 mx-8 xl:mx-auto transition-all min-h-100 bg-linear-to-br border border-red-500 from-red-800/50 to-75% to-red-400/50" translate={false} highlight={true} highlightOverride="md:hover:shadow-red-300/50 md:hover:shadow-xl md:hover:from-red-800/50 to-75% md:hover:to-red-300/50"></HoverPanel>
          <HoverPanel className="w-full xl:w-xs xl:order-1 mx-8 xl:mx-auto transition-all min-h-100 bg-linear-to-br border border-green-500 from-green-800/50 to-75% to-green-400/50" translate={false} highlight={true} highlightOverride="md:hover:shadow-green-300/50 md:hover:shadow-xl md:hover:from-green-800/50 to-75% md:hover:to-green-300/50"></HoverPanel>
        </div>
      </Block>
      <Block className={`bg-zinc-950`}>
        <div className="relative w-screen left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
          <Marquee pauseOnHover={true} className="w-full flex justify-between">
            <Panel className="h-100 w-lg bg-zinc-400 scale-96">Hey hey</Panel>
            <Panel className="h-100 w-lg bg-zinc-400 scale-96">Hey hey</Panel>
            <Panel className="h-100 w-lg bg-zinc-400 scale-96">Hey hey</Panel>
            <Panel className="h-100 w-lg bg-zinc-400 scale-96">Hey hey</Panel>
          </Marquee>
        </div>
      </Block>
    </main>
  );
}