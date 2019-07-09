import React from 'react';

const Clients = ({ iconHK, imgClients, imgParthners, imgAuxParthners }) => (
  <div id="clientsArea">
    <div className="container-fluid lineBaner">
      <div className="container lineBaner">
        <h2>
          Clients y Partners <br /> <span>CREATE TRUST THROUGH SUCCESS</span>
        </h2>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="contenedorA">
            <div className="item">
              <img
                className="responsive-img"
                src={iconHK}
                alt="Artificial intelligence"
              />
            </div>
            <div className="item">
              <img
                className="responsive-img"
                src={imgClients}
                alt="Artificial intelligence"
              />
            </div>
            <div className="item">
              <h3>CLIENTS</h3>
            </div>
          </div>
        </div>
        <div className="col s12">
          <div className="contenedorB">
            <div className="item">
              <h3>PARTHNERS</h3>
            </div>
            <div className="item">
              <img
                className="responsive-img"
                src={imgAuxParthners}
                alt="Artificial intelligence"
              />
            </div>
            <div className="item">
              <img
                className="responsive-img"
                src={imgParthners}
                alt="Artificial intelligence"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Clients;
