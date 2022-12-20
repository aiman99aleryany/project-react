import { createContext } from 'react';
import { stateString } from '../types/useStateTypes';

export const ContentContext = createContext<stateString>();

export const QuotesContext = createContext({});
