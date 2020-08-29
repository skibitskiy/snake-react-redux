import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore.js';

import Game from './components/Game';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
