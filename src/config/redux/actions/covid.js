import axios from 'axios'

export const getSummaryCovid = () => {
  return (dispatch) => {
    axios.get('https://api.covid19api.com/summary')
      .then(result => {
        console.log(result)
        dispatch({ type: 'SET_COVID', payload: result })
      })
  }
}