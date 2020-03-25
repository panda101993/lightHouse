import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducer/Index';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };


const pReducer = persistReducer(persistConfig, RootReducer);
export const Store = createStore(pReducer,compose(applyMiddleware(thunk)));
export const persistor = persistStore(Store);
