import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <>
        <div className="bgBanner">
          <div className="container">
            <div className="row">
              <div className="col s12 m8 offset-m2">
                <h3>AI, Deep Learning and Analystic Solutions.</h3>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="container infoBanner">
          <div className="row">
            <div className="col s12 m7">
              <p>
                <span>In robot data we are experts in the following areas:</span> Security,
                Storage, Efficiency, Parking, Shopping Center, etc… <br /> Not only
                are we experts, but we are also dedicated to finding the best
                solution for you and your problems. <br /> Making use of the technology
                in our favor you will be able to see and perceive great changes
                in your assembly line, production, storage, distribution and
                business logic.
              </p>
            </div>
            <div className="s12 m3">
              <p>
                <strong>
                  Big changes can be small actions, both internal and external.
                  What better way to make these changes than with the help of
                  technology?
                </strong>
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </>
    );
  }
}
export default Banner;
