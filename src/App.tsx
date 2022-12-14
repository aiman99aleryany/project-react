import React, { ReactElement } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import AppRouters from './routers/AppRouters';

const App = (): ReactElement => {
    const routers = createBrowserRouter(AppRouters);
    return (
        <React.StrictMode>
            <RouterProvider router={routers}></RouterProvider>
        </React.StrictMode>
    );
};

export default App;
