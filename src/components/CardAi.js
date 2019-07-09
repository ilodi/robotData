import React, { Fragment } from 'react';

const CardAi = ({ cardAi }) => (
  <Fragment>
    <div className="boxAiStyle">
      <h3>{cardAi.title}</h3>
      <div className="inCard ">
        <p>
          <span>{cardAi.span}</span>
          <br />
          {cardAi.about}
        </p>
      </div>
    </div>
  </Fragment>
);

export default CardAi;
