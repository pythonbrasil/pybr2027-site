import Home from './pages/home/Home'
import EmConstrucao from './pages/emConstrucao/EmConstrucao'
import './App.css'
import Carregamento from './components/Carregamento'
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import Layout from './Layout'
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Carregamento />}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programacao" element={<EmConstrucao secao="programacao" />} />
          <Route path="keynotes" element={<EmConstrucao secao="keynotes" />} />
          <Route path="guia_da_cidade" element={<EmConstrucao secao="guiaDaCidade" />} />
          <Route path="patrocinadores" element={<EmConstrucao secao="patrocinadores" />} />
          <Route path="perguntas_frequentes" element={<EmConstrucao secao="faq" />} />
          <Route path="*" element={<EmConstrucao secao="paginaNaoEncontrada" />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
