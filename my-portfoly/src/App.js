import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import React, { useEffect } from 'react';
import blackCursor from './assets/black-cursor.png';
import pointerCursor from './assets/black-cursor-clique.png';

const App = () => {
  useEffect(() => {
    // Adicionar cursor personalizado padrão
    document.body.style.cursor = `url(${blackCursor}), auto`;
    
    // Adicionar event listeners para os elementos que devem ter cursor personalizado
    const pointerElements = document.querySelectorAll('.custom-cursor');
    pointerElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        // Mudar o cursor para o cursor de ponteiro personalizado
        document.body.style.cursor = `url(${pointerCursor}), auto`;
      });
      element.addEventListener('mouseleave', () => {
        // Voltar ao cursor personalizado padrão
        document.body.style.cursor = `url(${blackCursor}), auto`;
      });
    });

    // Limpar event listeners quando o componente for desmontado
    return () => {
      pointerElements.forEach(element => {
        element.removeEventListener('mouseenter');
        element.removeEventListener('mouseleave');
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
