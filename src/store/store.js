import {configureStore} from '@reduxjs/toolkit';
import notes from './notes';

const store = configureStore({
    reducer: notes
});

export default store;