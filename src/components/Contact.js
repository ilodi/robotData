import React, { Component, Fragment } from 'react';
import Form from './contact/Form';
class Contact extends Component {
  //RENDER
  render() {
    return (
      <Fragment>
        <div id="contactArea" className="container">
          <div className="row">
            <div className="col s12 m7">
              <img src={this.props.bg_img_cont} alt="img contact Area" />
            </div>
            <div className="col s12 m5 FormArea">
              <Form />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contact;
