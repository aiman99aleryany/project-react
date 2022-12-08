import { createBrowserRouter } from 'react-router-dom';
import App from './components/App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },

    {
        path: '/about',
        element: <div>add about element here</div>,
    },

    {
        path: '/about',
        element: <div>add contact page here</div>,
    },

    {
        path: '/about',
        element: <div>add product page here</div>,
    },
]);

export default router;
