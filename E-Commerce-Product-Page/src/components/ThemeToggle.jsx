import React, { useState, useRef } from 'react'
import './Styles/Navbar.css'
import './Styles/Animations.css'
import './Styles/RippleStyles.css'
import RippleAnimation from './RippleAnimation'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(false);
  let darkMode = localStorage.getItem("darkmode");
  
  const EnableDarkMode = () => {
    document.body.classList.add("DarkMode");
    localStorage.setItem("darkmode", 'enabled');
  }
  const DisableDarkMode = () => {
    document.body.classList.remove("DarkMode");
    localStorage.setItem('darkmode', 'disabled');
  }

  if(darkMode === 'enabled') EnableDarkMode();

  const handleTheme = () => {
    darkMode = localStorage.getItem('darkmode');
    if(darkMode === 'enabled') {
      DisableDarkMode();
      setTheme(false);
      console.log("Dark Mode Disabled");
    }else {
      EnableDarkMode();
      setTheme(true);
      console.log("Dark Mode Enabled");
    }
  }

  const buttonRef = useRef();
  RippleAnimation(buttonRef,{color: "var(--orange)"});
  return (
    <>
      <button className="theme | fade-in-fwd" ref={ buttonRef } onClick={ handleTheme }> 
        {!theme && <svg className="moon-svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.9931 13.3127C20.5158 13.435 20.0155 13.5 19.5 13.5C16.1863 13.5 13.5 10.8137 13.5 7.5C13.5 6.98452 13.565 6.48422 13.6873 6.00686C9.9664 6.17045 7 9.2388 7 13C7 16.866 10.134 20 14 20C17.7612 20 20.8295 17.0336 20.9931 13.3127Z" fill="var(--black)"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M4.5 8.25C4.77614 8.25 5 8.47386 5 8.75V10.25C5 10.5261 4.77614 10.75 4.5 10.75C4.22386 10.75 4 10.5261 4 10.25V8.75C4 8.47386 4.22386 8.25 4.5 8.25Z" fill="var(--black)"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M3.25 9.5C3.25 9.22386 3.47386 9 3.75 9H5.25C5.52614 9 5.75 9.22386 5.75 9.5C5.75 9.77614 5.52614 10 5.25 10H3.75C3.47386 10 3.25 9.77614 3.25 9.5Z" fill="var(--black)"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3C7.77614 3 8 3.22386 8 3.5V5.5C8 5.77614 7.77614 6 7.5 6C7.22386 6 7 5.77614 7 5.5V3.5C7 3.22386 7.22386 3 7.5 3Z" fill="var(--black)"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M6 4.5C6 4.22386 6.22386 4 6.5 4H8.5C8.77614 4 9 4.22386 9 4.5C9 4.77614 8.77614 5 8.5 5H6.5C6.22386 5 6 4.77614 6 4.5Z" fill="var(--black)"/>
        </svg>}

        {theme && <svg className="sun-svg" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path stroke="var(--black)" strokeLinecap="round" strokeWidth="2" d="M12 4.5V3m0 18v-1.5m9-7.5h-1.5m-15 0H3m14.303-5.303l1.061-1.061M5.636 18.364l1.06-1.06m11.668 1.06l-1.06-1.06M6.696 6.696L5.636 5.636M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>}
       </button>
    </>
  )
}
