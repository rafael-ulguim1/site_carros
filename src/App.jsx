import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import Imagem_main from "./components/main/imagem_main"
import { useState } from "react"


function App() {
  const [lojas, setLojas] = useState([])
  const [solucoes, setSolucoes] = useState([])
  const [categorias, setCategorias] = useState([])
  const [noticias, setNoticias] = useState([])

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
      descricao: "Temos parcerias com os principais bancos para garantir as melhores taxas do mercado para você.",
      imagem: "/src/assets/solucoes/financiamento.svg"
    },
    {
      id: 2,
      titulo: "Seguro Auto",
      descricao: "Saia da loja com seu veículo protegido. Opções de cobertura completa para sua total tranquilidade.",
      imagem: "/src/assets/solucoes/seguro.svg"
    },
    {
      id: 3,
      titulo: "Oficina Especializada",
      descricao: "Manutenção preventiva e corretiva com peças originais e profissionais certificados pela fábrica.",
      imagem: "/src/assets/solucoes/oficina.svg"
    },
    {
      id: 4,
      titulo: "Test-drive Premium",
      descricao: "Agende uma experiência de condução exclusiva e conheça cada detalhe do seu futuro carro.",
      imagem: "/src/assets/solucoes/testdrive.svg"
    }
  ];

  const categoriasCarros = [
    {
      id: 1,
      nome: "Hatch",
      imagem: "/src/assets/categorias/hatch.png"
    },
    {
      id: 2,
      nome: "Sedan",
      imagem: "/src/assets/categorias/sedan.png"
    },
    {
      id: 3,
      nome: "SUV",
      imagem: "/src/assets/categorias/suv.png"
    },
    {
      id: 4,
      nome: "Picape",
      imagem: "/src/assets/categorias/picape.png"
    },
    {
      id: 5,
      nome: "Elétricos",
      imagem: "/src/assets/categorias/eletricos.png"
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
        foto: "/src/assets/autores/ricardo.jpg"
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
        foto: "/src/assets/autores/ana.jpg"
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
        foto: "/src/assets/autores/marcos.jpg"
      }
    },
    {
      id: 4,
      titulo: "Ultimas notícias",
      descricao: "O gigante chinês chega para brigar com os veteranos do segmento.",
      imagemNoticia: "/src/assets/noticia3.jpg",
      categoria: "Últimas Notícias",
      autor: {
        nome: "Marcos Paulo",
        foto: "/src/assets/autores/marcos.jpg"
      }
    },
    {
      id: 5,
      titulo: "Ultimas notícias",
      descricao: "O gigante chinês chega para brigar com os veteranos do segmento.",
      imagemNoticia: "/src/assets/noticia3.jpg",
      categoria: "Últimas Notícias",
      autor: {
        nome: "Marcos Paulo",
        foto: "/src/assets/autores/marcos.jpg"
      }
    },
    {
      id: 6,
      titulo: "Ultimas notícias",
      descricao: "O gigante chinês chega para brigar com os veteranos do segmento.",
      imagemNoticia: "/src/assets/noticia3.jpg",
      categoria: "Últimas Notícias",
      autor: {
        nome: "Marcos Paulo",
        foto: "/src/assets/autores/marcos.jpg"
      }
    },

  ];



  return (
    <div className="bg-gray-200">

      <Header
      />
      <Main
      />
      <Footer
      />

    </div>
  )
}

export default App
