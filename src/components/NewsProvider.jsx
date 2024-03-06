"use client"
import { useReducer } from 'react';
import ThemeContext from '../context/ThemeContext';
import { NewsStateContext } from '../context/NewsContext';
import { NewsDispatcherContext } from '../context/NewsContext';
import newsReducer from '../reducers/NewsReducer';

function NewsProvider({ children }) {
  const [state, dispatch] = useReducer(newsReducer, {
    theme: 'primary',
    todoList: [],
  });

  return (
    <NewsStateContext.Provider value={state}>
      <NewsDispatcherContext.Provider value={dispatch}>
        <ThemeContext.Provider value={state.theme}>
          {children}
        </ThemeContext.Provider>
      </NewsDispatcherContext.Provider>
    </NewsStateContext.Provider>
  );
}

export default NewsProvider;