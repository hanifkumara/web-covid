import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllStatusCountry, getStatusCountry } from '../config/redux/actions/covid';
import CardCovid from '../components/CardCovid'
import { Bar } from 'react-chartjs-2'

const DetailCovid = (props) => {
  const [chartBarData, setChartBarData] = useState([])
  const dispatch = useDispatch()
  const stateRedux = useSelector(state => state)
  const dataStatusCountry = stateRedux.covid.statusCountry
  const datByCountry = stateRedux.covid.statusByCountry
  console.log(dataStatusCountry)
  const chartBar = () => {
    const province = []
    const deaths = []
    const recovered = []
    const confirmed = []
    for(const dataObj of dataStatusCountry) {
      province.push(dataObj.Province)
      deaths.push(dataObj.Deaths)
      recovered.push(dataObj.Recovered)
      confirmed.push(dataObj.Confirmed)
    }
    setChartBarData({
      labels: province,
      datasets: [
        {
          label: "confirmed",
          data: confirmed,
          backgroundColor: "rgb(72, 72, 255)",
          borderWidth: 4
        },
        {
          label: "deaths",
          data: deaths,
          backgroundColor: "rgb(248, 68, 68)",
          borderWidth: 4
        },
        {
          label: "recovered",
          data: recovered,
          backgroundColor: "rgb(39, 252, 39)",
          borderWidth: 4
        }
      ]
    });
  }
  useEffect(() => {
    dispatch(getStatusCountry(props.location.state))
    dispatch(getAllStatusCountry(props.location.state))
    chartBar()
  }, []);
  return (
    <div>
      <p className="text-danger">Deaths</p>
      <CardCovid data={datByCountry}/>
      <Bar
          data={chartBarData}
          options={{
            responsive: true,
            title: { text: "THICCNESS SCALE", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
    </div>
  );
}

export default DetailCovid;
