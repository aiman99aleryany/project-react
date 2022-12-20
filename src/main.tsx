import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/dist/index.css';

const run = (): void => {
    const container: any = document.querySelector('#root');
    container.dataset.theme = 'light';
    const root = createRoot(container);
    const app = <App />;

    root.render(app);
};

run();
