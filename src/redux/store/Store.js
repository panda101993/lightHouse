// import {createStore, applyMiddleware,compose} from 'redux';
// import thunk from 'redux-thunk';
// import RootReducer from '../reducer/Index';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// // const persistConfig = {
// //     key: 'root',
// //     storage: storage,
// //     stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
// //    };


// // const pReducer = persistReducer(persistConfig, RootReducer);
// // export const Store = createStore(pReducer,compose(applyMiddleware(thunk)));
// // export const persistor = persistStore(Store);
// const persistConfig = {
//     key: 'root',
//     storage,
//   }
   
//   const persistedReducer = persistReducer(persistConfig, RootReducer);
//   let store = createStore(persistedReducer, compose(applyMiddleware(thunk)))
//     let persistor = persistStore(store)
   
//   export { store, persistor };

//redux imports
import {createStore, applyMiddleware, compose} from "redux";

//middleware import
import Thunk from 'redux-thunk';

//redux persist imports
import { persistStore, persistReducer } from "redux-persist";

import storage from 'redux-persist/lib/storage';

//reducer
import {RootReducer} from '../reducer/Index';

const persistConfig={
    key:'root',
    storage,
    // whiteList:["LoaderReducer"]
}

const persistedReducer=persistReducer(persistConfig, RootReducer);

const store=createStore(
    persistedReducer,{},
    compose(applyMiddleware(Thunk),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

    

const persistor=persistStore(store);

export {persistor, store};


