const initialCount = {
  count: 0,
  name: 'Hanif Kumara'
}

const countReducer = (state= initialCount, action) => {
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

export default countReducer