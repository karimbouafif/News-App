import { createContext, useContext } from 'react';

export const NewsStateContext = createContext(null);
export const NewsDispatcherContext = createContext(null);

export const useNewss = () => useContext(NewsStateContext);
export const useNewsDispatcher = () => useContext(NewsDispatcherContext);