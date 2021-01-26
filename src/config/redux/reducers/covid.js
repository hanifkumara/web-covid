const initialCovid ={
  allStatus: [
      {
          title: 'Confirm',
          total: 200000,
          background: 'blue',
          model: 'card-covid'
      },
      {
          title: 'Deaths',
          total: 2000,
          background: 'red',
          model: 'card-covid'
      },
      {
          title: 'Recovered',
          total: 15000,
          background: 'green',
          model: 'card-covid'
      }
  ],
  summaryCovid: []
}


const covidReducer = (state = initialCovid, action) => {
  if (action.type === 'SET_COVID') {
    return {
      ...state,
      summaryCovid: action.payload
    }
  } else {
    return state
  }
}

export default covidReducer