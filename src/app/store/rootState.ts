import { store } from './store';

export type RootState = ReturnType<typeof store.getState>;

export type AppStore = typeof store;

export type AppDispatch = typeof store.dispatch;
