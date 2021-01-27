const initialCovid ={
  allStatusCovid: [],
  summaryCovid: [],
  statusCountry: [],
  statusByCountry: []
}

const covidReducer = (state = initialCovid, action) => {
  if (action.type === 'SET_COVID') {
    return {
      ...state,
      allStatusCovid: [
        {
          title: 'Confirm',
          total: action.payload.Global.TotalConfirmed,
          newTotal: action.payload.Global.NewConfirmed,
          background: 'blue',
          model: 'card-covid'
        },
        {
          title: 'Deaths',
          total: action.payload.Global.TotalDeaths,
          newTotal: action.payload.Global.NewDeaths,
          background: 'red',
          model: 'card-covid'
        },
        {
          title: 'Recovered',
          total: action.payload.Global.TotalRecovered,
          newTotal: action.payload.Global.NewRecovered,
          background: 'green',
          model: 'card-covid'
        }
      ],
      summaryCovid: action.payload.Countries
    }
  } else if (action.type === 'SET_STATUS_COUNTRY') {
    return {
      ...state,
      statusCountry: action.payload
    }
  } else if (action.type === 'SET_STATUS_BY_COUNTRY') {
    return {
      ...state,
      statusByCuntry: [
        {
          title: 'Confirm',
          total: action.payload.Confirmed,
          newTotal: 0,
          background: 'blue',
          model: 'card-covid'
        },
        {
          title: 'Deaths',
          total: action.payload.Deaths,
          newTotal: 0,
          background: 'red',
          model: 'card-covid'
        },
        {
          title: 'Recovered',
          total: action.payload.Recovered,
          newTotal: 0,
          background: 'green',
          model: 'card-covid'
        }
      ],
    }
  } else {
    return state
  }
}

export default covidReducer