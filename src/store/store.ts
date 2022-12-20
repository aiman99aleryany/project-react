import { Quotes } from '../interfaces/Quotes';

const getStore = (KEY: string) => JSON.parse(localStorage.getItem(KEY) as any);

const setStore = (KEY: string, value: string | boolean | Quotes = false) => {
    localStorage.setItem(KEY, JSON.stringify(value));
};

const initStore = (KEY: string, value?: any) => {
    getStore(KEY) || setStore(KEY, value);
};

export { getStore, setStore, initStore };
