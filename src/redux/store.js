import { createStore, combineReducers } from 'redux'

const initialCovid = 
    [
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
  ]


const covidReduce = (state = initialCovid, action) => {
  if (action.type === 'SET_COVID') {
    return {
      ...state,
      deaths: action.payload
    }
  } else {
    return state
  }
}

const initialCount = {
  count: 0,
  name: 'Hanif Kumara'
}

const countReduce = (state= initialCount, action) => {
  if (action.type === 'SET_INCREMENT') {
      return {
        ...state,
        count: state.count + 5
      }
  } else if (action.type === 'SET_DECREMENT') {
    return {
      ...state,
      count: state.count - 10
    }
  } else {
    return state
  }
}

const initialUser = {
  name: 'Hanif Kumara',
  hobbuy: 'Swimming'
}

const userReducer = (state= initialUser, action) => {
  if (action.type === 'SET_USER') {
    console.log(action.payload);
    return {
      ...state,
      name: action.payload
    }
  } else {
    return state
  }
}

const rootReducer = combineReducers({countReduce, userReducer, covidReduce})
const store = createStore(rootReducer)

export default store