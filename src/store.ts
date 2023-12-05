import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todoReducer from 'features/Todo/todoSlice';

const rootReducer = combineReducers({
  todos: todoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// если не используем combineReducers:
// export type RootState = ReturnType<typeof store.getState>;

// dispatch's type
export type AppDispatch = typeof store.dispatch;