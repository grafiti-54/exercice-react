//raccourci rsc
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    //Création d'un routeur
    //BrowserRouter englobe toute les routes il permet de naviguer entre les différentes pages
    <BrowserRouter>

      <Routes>
      {/* si la route est = a / alors va chercher et affiche la page Home  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* path"*" permet de dire que si la route n'est pas trouvée, il va chercher la page Home" */}
        <Route path="*" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;

