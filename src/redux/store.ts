import {configureStore} from '@reduxjs/toolkit';
import optionSlice from '../redux/optionSlice';

export const store = configureStore({
    reducer: {
        options: optionSlice,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
