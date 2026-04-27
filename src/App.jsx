import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import { useState, useEffect } from "react"
import Lojas_oficiais from "./components/main/lojas_oficiais"

const lojasOficiais = [
  {
    id: 1,
    nome: "Loja Matriz Centro",
    imagem: "/src/assets/lojas/bmw.png"
  },
  {
    id: 2,
    nome: "Loja Premium Shopping",
    imagem: "/src/assets/lojas/honda.png"
  },
  {
    id: 3,
    nome: "Loja Seminovos Sul",
    imagem: "/src/assets/lojas/yamaha.png"
  }
];

const solucoesEmpresa = [
  {
    id: 1,
    titulo: "Financiamento Facilitado",
    descricao: "as melhores taxas do mercado para você.",
    imagem: "/src/assets/soluçoes/soluções1.jpg"
  },
  {
    id: 2,
    titulo: "Seguro Auto",
    descricao: " Opções de cobertura completa para sua total tranquilidade.",
    imagem: "/src/assets/soluçoes/soluçoes2.png"
  },
  {
    id: 3,
    titulo: "Oficina Especializada",
    descricao: "profissionais certificados pela fábrica.",
    imagem: "/src/assets/soluçoes/soluções3.png"
  },
  {
    id: 4,
    titulo: "Test-drive Premium",
    descricao: " conheça cada detalhe do seu futuro carro.",
    imagem: "/src/assets/soluçoes/soluções4.png"
  }
];

const categoriasCarros = [
  {
    id: 1,
    nome: "Elétricos",
    imagem: "/src/assets/categorias/eletricos.jpg"
  },
  {
    id: 2,
    nome: "Hatches",
    imagem: "/src/assets/categorias/hatches.jfif"
  },
  {
    id: 3,
    nome: "Picapes",
    imagem: "/src/assets/categorias/picapes.jpg"
  },
  {
    id: 4,
    nome: "Sedans",
    imagem: "/src/assets/categorias/sedans.jfif"
  },
  {
    id: 5,
    nome: "Suvs",
    imagem: "/src/assets/categorias/suvs.jfif"
  }
];

const noticiasDestaque = [
  {
    id: 1,
    titulo: "Motos",
    descricao: "Confira as novas regras de segurança para condutores em 2026.",
    imagemNoticia: "/src/assets/noticia1.jfif",
    categoria: "Motos",
    autor: {
      nome: "Ricardo Silva",
      foto: "/src/assets/autores/perfil_news.png"
    }
  },
  {
    id: 2,
    titulo: "Ultimas notícias",
    descricao: "O compacto volta ao mercado com motor híbrido e design renovado.",
    imagemNoticia: "/src/assets/noticia2.jpg",
    categoria: "Lançamentos",
    autor: {
      nome: "Ana Beatriz",
      foto: "/src/assets/autores/perfil_news.png"
    }
  },
  {
    id: 3,
    titulo: "Ultimas notícias",
    descricao: "O gigante chinês chega para brigar com os veteranos do segmento.",
    imagemNoticia: "/src/assets/noticia3.jpg",
    categoria: "Últimas Notícias",
    autor: {
      nome: "Marcos Paulo",
      foto: "/src/assets/autores/perfil_news.png"
    }
  },
  {
    id: 4,
    titulo: "Ultimas notícias",
    descricao: "O gigante chinês chega para brigar com os veteranos do segmento.",
    imagemNoticia: "/src/assets/noticia4.webp",
    categoria: "Últimas Notícias",
    autor: {
      nome: "Marcos Paulo",
      foto: "/src/assets/autores/perfil_news.png"
    }
  },
  {
    id: 5,
    titulo: "Ultimas notícias",
    descricao: "O gigante chinês chega para brigar com os veteranos do segmento.",
    imagemNoticia: "/src/assets/noticia5.jfif",
    categoria: "Últimas Notícias",
    autor: {
      nome: "Marcos Paulo",
      foto: "/src/assets/autores/perfil_news.png"
    }
  },
  {
    id: 6,
    titulo: "Ultimas notícias",
    descricao: "O gigante chinês chega para brigar com os veteranos do segmento.",
    imagemNoticia: "/src/assets/noticia6.jfif",
    categoria: "Últimas Notícias",
    autor: {
      nome: "Marcos Paulo",
      foto: "/src/assets/autores/perfil_news.png"
    }
  },

];



function App() {
  const [lojas, setLojas] = useState([])
  const [solucoes, setSolucoes] = useState([])
  const [categorias, setCategorias] = useState([])
  const [noticias, setNoticias] = useState([])


  useEffect(() => {
    // Alimenta todos os estados de uma vez
    setLojas(lojasOficiais);
    setSolucoes(solucoesEmpresa);
    setCategorias(categoriasCarros);
    setNoticias(noticiasDestaque);
  }, []);


  return (
    <div className="bg-gray-200">
      <Header />
      <Main
        lojas={lojas}
        solucoes={solucoes}
        categorias={categorias}
        noticias={noticias}
      />
      <Footer />
    </div>
  )
}

export default App
