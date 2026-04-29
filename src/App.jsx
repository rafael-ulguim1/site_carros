import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import {
  estoqueVeiculos,
  lojasOficiais,
  solucoesEmpresa,
  categoriasCarros,
  noticiasDestaque
} from "./listas/listas"
import { useState, useEffect } from "react"
import Lojas_oficiais from "./components/main/lojas_oficiais"
import Ofertas from "./pages/ofertas"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  const [lojas, setLojas] = useState([])
  const [solucoes, setSolucoes] = useState([])
  const [categorias, setCategorias] = useState([])
  const [noticias, setNoticias] = useState([])
  const [estoque, setEstoque] = useState([])


  useEffect(() => {
    // Alimenta todos os estados de uma vez
    setLojas(lojasOficiais);
    setSolucoes(solucoesEmpresa);
    setCategorias(categoriasCarros);
    setNoticias(noticiasDestaque);
    setEstoque(estoqueVeiculos);

  }, []);




  return (
    <BrowserRouter>
      <div className="bg-gray-200">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Main
                lojas={lojas}
                solucoes={solucoes}
                categorias={categorias}
                noticias={noticias}
                estoque={estoque}
              />
            }
          />

          {/* enviando a rota para o main */}
          <Route path="/ofertas" element={<Ofertas />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>


  )
}

export default App
