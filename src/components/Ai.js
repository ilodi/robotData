import React, { Component } from 'react';
import CardAi from './CardAi';

class Ai extends Component {
  //STATE
  state = {
    items: [
      {
        title: 'DEEP COMPUTER VISION',
        span: 'SAFETY/PREDICTION',
        about:
          'To provide both image and video recognition, including image classification and annotation, object recognition and image search, object detection, motion estimation, object tracking in video, human action recognition, and image stylization, editing and new image generation.'
      },
      {
        title: 'DEEP LEARNING CHATBOT',
        span: 'SAFETY/MANAGEMENT',
        about:
          'Save time for your customer service and engage your audience with a more effective, interactive and interesting user experience.'
      },
      {
        title: 'CLASSIFICATION AND OBJECT DETECTION',
        span: 'SAFETY/MANAGEMENT',
        about:
          'Advanced Computer Vision technologies can be used to monitor construction site environment continuously to spot exceptional behaviors and situations. This can help to ensure occupational health and safety, as well as compliance to laws and regulation. It can make practical use of IoT data across all their operations with a learning strategy to continuously improve system performance.'
      }
    ]
  };
  //RENDER
  render() {
    const { items } = this.state;
    return (
      <div id="aiArea" className="container">
        <h2>Artificial intelligence</h2>
        <div className="row">
          {items.map((elemt, idX) => (
            <div key={idX} className="col s12 m6">
              <CardAi cardAi={elemt} />
            </div>
          ))}
          <div className="col s12 m6 imgBlock">
            <img
              className="responsive-img"
              src={this.props.iconAi}
              alt="Artificial intelligence"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Ai;
