import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from './contactsSlice';
import filterReducer from './filtersSlice';

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['items'],
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filterReducer,
    }
})

export const persistor = persistStore(store);
