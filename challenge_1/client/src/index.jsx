import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

ReactDOM.render(
  <App url={'/events?q='} perPage={10} />,
  document.getElementById('app')
);
