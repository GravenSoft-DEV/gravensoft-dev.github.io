import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselIndicator } from './motion-primitives/carousel';

interface CarouselProps {
  items: React.ReactNode[];
}

export default function ResponsivePanelLayout({ items }: CarouselProps) {
  return (
    <>
      <div className="xl:hidden relative mx-4 w-svw left-1/2 right-1/2 ml-[-50vw] mr-[-50vw]">
        <Carousel>
          <CarouselContent className="py-4">
            {items.map((element, index) => (
              <CarouselItem 
                key={React.isValidElement(element) && element.key ? element.key : index} 
                className="flex justify-center"
              >
                {element}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselIndicator />
        </Carousel>
      </div>

      <div className="hidden xl:flex flex-wrap xl:flex-row gap-8 justify-center items-center">
        {items.map((element, index) => (
          <div key={React.isValidElement(element) && element.key ? element.key : index}>
            {element}
          </div>
        ))}
      </div>
    </>
  );
}
