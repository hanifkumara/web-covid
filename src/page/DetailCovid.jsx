import React from 'react';
import {useSelector} from 'react-redux'

const DetailCovid = (props) => {
  console.log(props.location.state)
  const stateRedux = useSelector(state => state)
  const dataCovid = stateRedux.covid
  console.log(dataCovid)
  return (
    <div>
      <p className="text-danger">Deaths {dataCovid.deaths}</p>
    </div>
  );
}

export default DetailCovid;
