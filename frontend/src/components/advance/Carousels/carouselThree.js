import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    src:require('../../../assets/images/c1.jpg'),
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    id: 2,
    src:require('../../../assets/images/c2.jpg'),
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    id: 3,
    src:require('../../../assets/images/c3.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

export const Carsouselthree = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
        setActiveIndex(newIndex);
        if (animating) return;
    }
  return (
          <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
          >
              <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {items.map((item) => {
                  return (
                  <CarouselItem
                      onExiting={() => setAnimating(true)}
                      onExited={() => setAnimating(false)}
                      key={item.id}
                  >
                  <img src={item.src} alt={item.altText} />
                  <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
                  </CarouselItem>
                  );
              })}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
              <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
  );
}
export default Carsouselthree