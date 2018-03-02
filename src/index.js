import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import NowServing from './NowServing';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NowServing />, document.getElementById('root'));
registerServiceWorker();
