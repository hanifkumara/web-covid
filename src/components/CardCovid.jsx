import React from 'react';
import arrowUp from '../assets/image/arrow-up-icon-99080.png'
import CountUp from 'react-countup';

const CardCovid = (props) => {
  return (
    <div className="wrapper-card-covid mt-4">
        {props.data.map((value, index) =>
          <div className={`${value.model} ${value.background}`} key={index}>
            <div className="d-flex justify-content-between">
              <div className="card-covid-left">
                <p>{value.title}</p>
                <h3><CountUp
                  start={0}
                  end={value.total}
                  duration={3.5}
                  separator=","
                />
                </h3>
              </div>
              <div className="card-covid-right">
                <div className="icon-arrow-up">
                  <img src={arrowUp} alt="arrow up"/>
                </div>
                <h6 className="mt-3">
                  <CountUp
                    start={0}
                    end={value.newTotal}
                    duration={2.75}
                    separator=","
                  />
                </h6>
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default CardCovid;
