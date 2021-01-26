import React from 'react';
import arrowUp from '../assets/image/arrow-up-icon-99080.png'

const CardCovid = (props) => {
  return (
    <div className="wrapper-card-covid">
        {props.data.map((value, index) =>
          <div className={`${value.model} ${value.background}`} key={index}>
            <div className="d-flex justify-content-between">
              <div className="card-covid-left">
                <p>{value.title}</p>
                <h2>{value.total}</h2>
              </div>
              <div className="card-covid-right">
                <div className="icon-arrow-up">
                  <img src={arrowUp} alt="arrow up"/>
                </div>
                <h6 className="mt-4">+20</h6>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default CardCovid;
