import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'i18n';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { MapProvider } from 'react-map-gl';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store';
import { theme } from 'theme';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

/*eslint-disable */
// @ts-ignore
mapboxgl.workerClass =
  require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
/*eslint-enable */

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />

    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ChakraProvider theme={theme}>
            <MapProvider>
              <App />
            </MapProvider>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
