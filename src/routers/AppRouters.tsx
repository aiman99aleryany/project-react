import Root from '../components/root/Root';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import { NestedRouters } from '../interfaces/AppRouters';


const AppRouters: NestedRouters = [
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
