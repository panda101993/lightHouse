import React, { Component } from 'react'
import Carousel from 'react-multi-carousel'
import { Link } from 'react-router-dom';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Imageid = {
  Image1: require("../assets/images/Template-1.png"),

}

export class CoupontempleteImage extends Component {
  render() {
    return (
      <div>
        <section class="second">
          <div class="container-fluid border-with-radius img-slic">
            <h3 class="info_c3 chnge-pass coup-temp">Please select the coupon template for the creation of the coupon : </h3>
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={5000000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="top-slider"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              deviceType={this.props.deviceType}
              dotListClass="slider-item"
              itemClass="carousel-item-padding-40-px"
            >
              <div>
                <div class="main-coverslider">
                  <div class="cover-images">
                    <Link to='/CreateCouponform'>
                      <img style={{ width: "100%", height: "100%" }} src={Imageid.Image1} />
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <div class="main-coverslider">
                  <div class="cover-images">
                    <img style={{ width: "100%", height: "100%" }} src={Imageid.Image1} />
                  </div>
                </div>

              </div>
              <div>
                <div class="main-coverslider">
                  <div class="cover-images">
                    <img style={{ width: "100%", height: "100%" }} src={Imageid.Image1} />
                  </div>
                </div>
              </div>
              <div>
                <div class="main-coverslider">
                  <div class="cover-images">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={Imageid.Image1} />
                  </div>
                </div>
              </div>
              <div>
                <div class="main-coverslider">
                  <div class="cover-images">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={Imageid.Image1} />
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
      </div>
    )
  }
}

export default CoupontempleteImage
