import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import CarouselDetails from "src/modules/home/components/carouselDetails";
import ChevronRight from "src/assets/images/carouselleft.svg";
import Chevronleft from "src/assets/images/carouselright.svg";
import "./index.scss";

function LandingCheckPlan() {
  const [index, setIndex] = useState(0);

  const carousel = {
    direction: null,
    prevIcon: <img src={ChevronRight} alt='ChevronRight' />,
    nextIcon: <img src={Chevronleft} alt='Chevronleft' />,
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='customer-review'>
      <p className='customer-review-heading text-center mt-5'>
        What Our Customers Says
      </p>
      <Carousel
        nextIcon={carousel.nextIcon}
        prevIcon={carousel.prevIcon}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <Carousel.Item className='carousel-item'>
          <Carousel.Caption>
            <CarouselDetails
              name='Marina T.'
              comment='If you are looking for home cooked food then Zesty is the
                place. Personalized service to help you plan your meals. I
                personally love the breakfast menu and the non veg lunch
                preparations. Me and my husband have been ordering from Zesty
                for a month now. Zesty has made my life so easy!!'
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <Carousel.Caption>
            <CarouselDetails
              name='Vibhana C.'
              comment='Zesty has literally changed my life. I’ve struggled with
            managing work and eating healthy home cooked meals. I would
            either not get time to cook or not have the patience to invest
            in cooking meals. The food at zesty can be ordered weekly , lots
            of choices , delivered to your door step . If I had to sum it
            up- I save time , money and energy while eating fresh home
            cooked nutritious meals every single day.'
            />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item'>
          <Carousel.Caption>
            <CarouselDetails
              name='Nick C.'
              comment='Zesty helps me take off the conscious stress of deciding what
            to eat for my next meal everyday. Knowing that I have someone
            else to take care of having a good variety from the choices I
            like at the same time being affordable is what I love.'
            />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default LandingCheckPlan;
