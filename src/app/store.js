import {configureStore} from '@reduxjs/toolkit'
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { fearApi } from '../services/fearApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath] :cryptoNewsApi.reducer,
        [fearApi.reducerPath] : fearApi.reducer
    },
});