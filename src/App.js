import React from 'react'
import Route from './config/route'
import { Provider } from 'react-redux'
import store from './config/redux/store'

function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
