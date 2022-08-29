import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import jwtReducer from "./slices/jwtSlice"
import { combineReducers } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'js-cookie';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage: new CookieStorage(Cookies/*, options */)
}
const reducers = combineReducers({
    user: userReducer,
    jwt: jwtReducer
});

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)