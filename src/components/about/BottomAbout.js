import React, { Component } from "react";

class BottomAbout extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {/*  */}
            <div className="col s12 m4 boxAbout">
              <div className="LogoAbout">
                <img src={this.props.iconAboutA} alt="Unify all you Data Sources" />
              </div>
              <div className="titleLogoAbout">
                <p>
                  {"Unify all you"} <br /> {"Data Sources"}
                </p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="col s12 m4">
              <div className="LogoAbout">
                <img src={this.props.iconAboutB}  alt="Analyze &amp; Build you Data" />
              </div>
              <div className="titleLogoAbout">
                <p>
                  {"Analyze & Build"} <br /> {"You Data"}
                </p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="col s12 m4">
              <div className="LogoAbout">
                <img src={this.props.logo}  alt="Develop Optimized Solutions" />
              </div>
              <div className="titleLogoAbout">
                <p>
                  {"Develop Optimized"} <br /> {"Solutions"}
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </>
    );
  }
}

export default BottomAbout;
