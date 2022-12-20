import { ReactElement, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initStore, getStore, setStore } from '../../store/store';
import { DARK_THEME_KEY } from '../../store/keys';

initStore(DARK_THEME_KEY, false);

const NavBar = (): ReactElement => {
    const [isDark, setIsDark]: [boolean, any] = useState(
        getStore(DARK_THEME_KEY)
    );

    useEffect(() => {
        const root: HTMLElement | null = document.querySelector('#root');
        if (root !== null) {
            root.dataset.theme = isDark ? 'dark' : 'light';
        }
        console.log(root);
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    setStore(DARK_THEME_KEY, isDark);
    return (
        <div className="navbar">
            <Link to={`/`}>Root</Link>
            <Link to={`/home`}>Home</Link>
            <Link to={`/about`}>About</Link>
            <Link to={`/contact`}>Contact</Link>
            <span>current theme is: {isDark ? 'dark' : 'light'}</span>
            <button onClick={toggleTheme}>
                Change theme to {isDark ? 'light' : 'dark'}
            </button>
        </div>
    );
};

export default NavBar;
