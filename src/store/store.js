import {configureStore, combineReducers} from '@reduxjs/toolkit';
import notes from './notes';
import toast from './toast';

const store = configureStore({
    reducer: combineReducers({notes, toast})
});

export default store;