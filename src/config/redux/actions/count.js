export const increment = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({type: 'SET_INCREMENT'})
    }, 2000);
  }
}
export const decrement = () => ({type: 'SET_DECREMENT'})