import React, { Component } from 'react';
import Slider from 'react-slick';
class Hero extends Component {
  render() {
    var settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
        <div className="container-fluid">
          <div className="s12 m8">
            <Slider {...settings}>
              <div>
                <img
                  className="heroImgCarrucel"
                  src={this.props.hero_One}
                  alt="Hero Robot"
                />
              </div>
              <div>
                <img
                  className="heroImgCarrucel"
                  src={this.props.hero_Two}
                  alt="Robot data cover"
                />
              </div>
            </Slider>
          </div>

          <div>

            </div>
        </div>
      </>
    );
  }
}

export default Hero;
