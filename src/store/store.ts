const INIT_VALUE: any = [];

interface quote {
    id: string;
    timeStamp: number;
    content: string;
    isEdited: boolean;
}

const getStore = (KEY: string) => JSON.parse(localStorage.getItem(KEY) as any);

const setStore = (KEY: string, value: string | boolean | quote[] = false) => {
    localStorage.setItem(KEY, JSON.stringify(value));
}

const initStore = (KEY: string, value?: any) => {
    console.log(getStore(KEY));
    getStore(KEY) || setStore(KEY, value);
};

//const initAllStores = () => KEYS.map((KEY) => getStore(KEY) || setStore(KEY, INIT_VALUE));

export { getStore, setStore, initStore };
