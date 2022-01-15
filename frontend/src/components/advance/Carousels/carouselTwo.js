import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require('../../../assets/images/c1.jpg'),
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src:require('../../../assets/images/c2.jpg'),
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src:require('../../../assets/images/c3.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const CarouselTwo = () => <UncontrolledCarousel items={items} />;

export default CarouselTwo;