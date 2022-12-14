import { ReactElement } from 'react';
import Root from '../components/Root';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';

interface simpleRouterType {
    path: string;
    element: ReactElement;
}

interface nestedRouterType {
    path: string;
    element: ReactElement;
    children?: simpleRouterType[];
}

const AppRouters: nestedRouterType[] = [
    {
        path: '/',
        element: <Root />,
    },
    {
        path: 'home',
        element: <Home />,
    },
    {
        path: 'about',
        element: <About />,
    },
    {
        path: 'contact',
        element: <Contact />,
    },
];

export default AppRouters;
