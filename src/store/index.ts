import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import contactsReducer from './slices/contactsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
