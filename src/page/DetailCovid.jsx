import React from 'react';
import {useSelector} from 'react-redux'

const DetailCovid = (props) => {
  console.log(props.location.state)
  const stateRedux = useSelector(state => state)
  const covidReduce = stateRedux.covidReduce
  console.log(covidReduce)
  return (
    <div>
      <p className="text-danger">Deaths {covidReduce.deaths}</p>
    </div>
  );
}

export default DetailCovid;
