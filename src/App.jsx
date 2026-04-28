import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import { estoqueVeiculos } from "./listas/listas"
import { lojasOficiais } from "./listas/listas"
import { solucoesEmpresa } from "./listas/listas"
import { categoriasCarros } from "./listas/listas"
import { noticiasDestaque } from "./listas/listas"
import { useState, useEffect } from "react"
import Lojas_oficiais from "./components/main/lojas_oficiais"
import Ofertas from "./pages/ofertas"


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
    <div className="bg-gray-200">

      <Header />
      <Main
        lojas={lojas}
        solucoes={solucoes}
        categorias={categorias}
        noticias={noticias}
        estoque={estoque}
      />
      <Footer />


    </div>

  )
}

export default App
