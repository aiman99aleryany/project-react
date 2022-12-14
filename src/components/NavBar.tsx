import React, {ReactElement, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { initStore, getStore, setStore } from "../store/store";


const DARK_THEME_KEY: string = 'Dark_Theme';

initStore(DARK_THEME_KEY, false);

const NavBar = (): ReactElement => {
   const [isDark, setIsDark] = useState(getStore(DARK_THEME_KEY)); 

   useEffect(() => {
      const root: any = document.querySelector('#root');
      root.dataset.theme = isDark ? 'dark' : 'light';
      console.log(root);
   }, [isDark])


   const toggleTheme = () => {
      setIsDark(!isDark)
   };


   setStore(DARK_THEME_KEY, isDark);
   return (
      <div className="navbar">
         <Link to={`/`}>Root</Link>
         <Link to={`/home`}>Home</Link>
         <Link to={`/about`}>About</Link>
         <Link to={`/contact`}>Contact</Link>
         <span>current theme is: {isDark ? 'dark' : 'light'}</span>
         <button onClick={toggleTheme}>Change theme to {isDark ? 'light' : 'dark'}</button>
      </div>
   );
};


export default NavBar;
