import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import React, { useEffect } from 'react';
import blackCursor from './assets/black-cursor.png';
import pointerCursor from './assets/black-cursor-clique.png';

const App = () => {
  useEffect(() => {
    const pointerElements = document.querySelectorAll('.custom-cursor');

    const handleMouseEnter = () => {
      document.body.style.cursor = `url(${pointerCursor}), auto`;
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = `url(${blackCursor}), auto`;
    };

    pointerElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      pointerElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
