import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import App2 from './containers/template';
import ThicMap from './containers/thicMap'
import MapWithAMarker from './components/defaultMap'
// import map from './map';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<ThicMap />, document.getElementById('root'));
// ReactDOM.render(<App2 />, document.getElementById('app2'));
// ReactDOM.render(
//   <MapWithAMarker
//   containerElement={<div style={{ height: `400px` }} />}
//   mapElement={<div style={{ height: `100%` ,width:'50%'}} />}
//   />,
//   document.getElementById('rot')
// );
registerServiceWorker();
