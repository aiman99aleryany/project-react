import React from 'react';
import { RouterProvider, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './styles/dist/index.css';
import routes from './routes';

const runApplication = () => {
    const container = document.querySelector('#root');
    container.dataset.theme = 'light';
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <RouterProvider router={routes} />
        </React.StrictMode>
    );
};

runApplication();
