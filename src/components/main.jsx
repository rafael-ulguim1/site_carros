import Imagem_main from "./main/imagem_main"
import Seção_busca_main from "./main/seção_busca"
import Lojas_oficiais from "./main/lojas_oficiais"
import Solucoes from "./main/soluções"
import Categorias from "./main/categorias"
import Noticias from "./main/noticias"
import ValenteMotors from "./main/valentemotors"
function Main({ lojas, solucoes, categorias, noticias, estoque }) {
    return (
        <main>
            <Imagem_main
            />
            <Seção_busca_main lista={estoque}
            />
            <Lojas_oficiais lista={lojas}
            />
            <Solucoes lista={solucoes}
            />
            <Categorias lista={categorias}
            />
            <Noticias lista={noticias}
            />
            <ValenteMotors
            />
        </main>
    )
}

export default Main