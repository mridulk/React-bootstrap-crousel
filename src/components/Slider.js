import React, { Component } from 'react'
import './Slider.css'
import image1 from './Mobile13.jpg'
import image2 from './Mobile14.jpg'
import image3 from './Mobile12.jpg'
import {Carousel,Container} from 'react-bootstrap'
class Slider extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          index: 0,
          direction: null,
        };
      }
    
      handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }
    
      render() {
        const { index, direction } = this.state;
    
        return (
            <Container>
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100 img-responsive center-block"
                src={image1}
                height="300px"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-responsive center-block"
                src={image2}
                height="300px"
                alt="Third slide"
              />
    
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-responsive center-block"
                src={image3}
                height="300px"
                alt="Third slide"
              />
    
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Container>
          
          
        );
      }
}

export default Slider
