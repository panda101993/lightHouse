// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// // import { persistor, Store } from './redux/store/Store';
// import {store , persistor} from './redux/store/Store';

// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/lib/integration/react';

// ReactDOM.render(<Provider store={store}>
//     {/* <PersistGate loading={null} persistor={persistor}><App /></PersistGate> */}
//     <App/>
//     </Provider>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA

// //serviceWorker.register(); 
// serviceWorker.register();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import store
import { persistor, store } from './redux/store/Store';

//import Provider
import { Provider } from 'react-redux';

//persistGate
import {PersistGate} from 'redux-persist/lib/integration/react';

//Loader
import Loader from './components/Loader';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const MyApp = () => (
//     <Provider store={store}>
//         <PersistGate
//             loading={null}
//             persistor={persistor}>
//                 <App/>
//             {/* <ConnectedRouter history={history}>
//                 <Switch>
//                     {renderRoutes(routes)}
//                 </Switch>
//             </ConnectedRouter> */}
//         </PersistGate>
//     </Provider>
// );

ReactDOM.render(<Provider store={store}>
    <PersistGate
        loading={<Loader/>}
        // loading={null}
        persistor={persistor}>
            {/* <ToastContainer autoClose={5000}/> */}
            <App/>       
    </PersistGate>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

