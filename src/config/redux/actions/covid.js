import axios from 'axios'

export const getSummaryCovid = () => {
  return (dispatch) => {
    axios.get('https://api.covid19api.com/summary')
      .then(result => {
        console.log(result.data)
        dispatch({ type: 'SET_COVID', payload: result.data })
      })
  }
}

export const getStatusCountry = (params) => {
  return (dispatch) => {
    axios.get(`https://api.covid19api.com/country/${params}?from=2021-01-10T00:00:00Z&to=2021-01-25T00:00:00Z`)
      .then(result => {
        console.log(result.data)
        dispatch({ type: 'SET_STATUS_COUNTRY', payload: result.data })
      })
  }
}

export const getAllStatusCountry = (params) => {
  return (dispatch) => {
    axios.get(`https://api.covid19api.com/live/country/${params}/status/confirmed/date/2021-01-25T13:13:30Z`)
    .then(result => {
      console.log(result.data)
      dispatch({ type: 'SET_STATUS_BY_COUNTRY', payload: result.data })
    })
  }
}