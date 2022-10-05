import { createStore, applyMiddleware,} from 'redux';
import reducer from '../Reducer';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
   reducer
 })
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
