import React, { Component } from "react";
import BoxImages from './BoxImages';

class Advanced extends Component {
  render() {
    return (
      <>
        <div className="container-fluid lineBaner">
          <div className="container lineBaner">
            <h2>
              Advanced Computer Vision <br />
              <span>technologies can be used to monito</span>
            </h2>
          </div>
        </div>
        {/*  */}

        <div className="container ">
          <div className="row">
            <div className="col advanceBoxCont" >
            <BoxImages />
            <p>
            Advanced Computer Vision technologies can be used to monitor construction site environment continuously to spot exceptional behaviors and situations. This can help to ensure occupational health and safety, as well as compliance to laws and regulation It can make practical use of IoT data across all their operations with a learning strategy to continuously improve system performance.
            </p>
              </div>
          </div>
        </div>

        {/*  */}
      </>
    );
  }
}

export default Advanced;
