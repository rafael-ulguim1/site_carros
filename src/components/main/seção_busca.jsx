import { Link } from "react-router-dom"

function Seção_busca_main({ lista }) {
    return (
        <section id="busca" className="flex justify-center">
            {/* Mantive o w-[1000px] que você já tinha arrumado */}
            <div className="bg-white h-72 w-[1000px] flex flex-col gap-3 rounded shadow">

                <div className="mt-5 ml-10 font-bold text-2xl text-gray-500">
                    <h1> Busque por SUV até 100 mil</h1>
                </div>

                <div className="ml-10 flex gap-4 font-bold">
                    <Link to="/carros">
                        {/* h-9 é padrão, mas w-30 precisa de colchetes: w-[120px] */}
                        <button className="text-gray-100 bg-gray-700 rounded-full h-9 w-[120px]">
                            Buscar carros
                        </button>
                    </Link>
                    <Link to="/motos">
                        {/* h-9 é padrão, mas w-30 precisa de colchetes: w-[120px] */}
                        <button className="text-gray-100 bg-gray-700 rounded-full h-9 w-[120px]">
                            Buscar motos
                        </button>
                    </Link>
                </div>

                <div className="ml-10">
                    <input
                        type="text"
                        placeholder=" 🚗 Descreva o que você está procurando"

                        className="bg-white rounded-full h-[60px] w-[920px] border-2 border-purple-700 px-6"
                    />
                </div>

                <div className="flex-1 text-center mt-5">
                    <Link to="/ofertas">
                        {/* h-10 é padrão, mas w-70 precisa de colchetes: w-[280px] */}
                        <button className="bg-red-500 h-10 w-[280px] text-white font-bold rounded">
                            Ver todas as ofertas ({lista.length})
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Seção_busca_main