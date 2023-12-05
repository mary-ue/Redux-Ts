import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// если не используем combineReducers:
// export type RootState = ReturnType<typeof store.getState>;

// dispatch's type
export type AppDispatch = typeof store.dispatch;