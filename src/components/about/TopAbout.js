import React, { Component } from "react";

class TopAbout extends Component {
  render() {
    return (
      <>
        <div className="topAbout">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <p>
                  <span>Robot Data Co. Ltd. is a Hong Kong AI company,</span>
                  established as a Deep Learning Start-up to leverage the
                  untapped value of enterprise data by providing prescriptive
                  and predictive analytics, data model simulations.
                </p>
              </div>
              <div className="col s12 m6">
                <p>
                  We help our clients understand how Deep Computer Vision,
                  Artificial Intelligence, and Digitization could create new
                  forms of value. To create a more effective working
                  environment, a better company and smarter city.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TopAbout;
