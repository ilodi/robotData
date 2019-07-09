import React, { Component, Fragment } from 'react';

class Form extends Component {
  //RENDER
  render() {
    return (
      <Fragment>
        <h2>Contact US</h2>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input type="text" id="name" className="validate" placeholder="full Name:" />
            </div>
            <div className="input-field col s12">
              <input type="email" id="email" className="validate" placeholder="Email:" />
            </div>
            <div className="input-field col s12">
              <input type="text" id="text" className="validate" placeholder="Subject:" />
            </div>
            <div className="input-field col s12">
              <textarea className="form-control materialize-textarea" name="messages" placeholder="Messages:" data-length="300">
              </textarea>
            </div>
          </div>
          {/* End Input */}
          <input type="submit" className="btn " value="Send Message"></input>

        </form>
      </Fragment>
    );
  }
}

export default Form;
