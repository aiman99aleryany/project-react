import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './styles/dist/index.css';

const runApplication = () => {
    const container = document.querySelector('#root');
    container.dataset.theme = 'light';
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
};

runApplication();
