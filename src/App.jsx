import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Works from './components/Works'


const App = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

  const handleThemSwitch = ()=> {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <>
      <button
        type="button"
        onClick={handleThemSwitch}
        className="fixed z-10 right-2 top-2 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "🌞" : "🌙"}
      </button>
      <div className="font-Inter bg:white dark:bg-slate-900 ">
        <div className='max-w-5xl mx-auto w-11/12' >
          <HeroSection></HeroSection>
          <Services></Services>
          <Works></Works>
        </div>
      </div>
    </>
  );
}

export default App
