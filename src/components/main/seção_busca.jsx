import { Link } from "react-router-dom"

function Seção_busca_main({ lista }) {
    return (
        <section id="busca" className="flex justify-center   ">
            <div className="bg-white h-72 w-250 flex flex-col gap-3 rounded shadow ">


                <div className="mt-5 ml-10 font-bold text-2xl text-gray-500">
                    <h1> Busque por SUV até 100 mil</h1>

                </div>
                <div className=" ml-10 flex gap-4 font-bold">
                    <Link to="/carros">
                        <button className="text-gray-100 bg-gray-700 rounded-full h-9 w-30">
                            Buscar carros
                        </button>
                    </Link >
                    <Link to="/motos">
                        <button className="text-gray-100 bg-gray-700 rounded-full h-9 w-30">
                            Buscar motos
                        </button>
                    </Link>

                </div>
                <div className=" ml-10">
                    <input
                        type="text"
                        placeholder=" 🚗 Descreva oque voce está procurando"
                        className="bg-white rounded-full h-15 w-230 border-2 border-purple-700   "
                    />

                </div>
                <div className="flex-1 text-center mt-5">
                    <Link to="/ofertas">
                        <button className="bg-red-500 h-10 w-70 text-white font-bold  rounded">
                            Ver todas as ofertas ({lista.length})
                        </button>
                    </Link>

                </div>



            </div>

        </section>
    )
}


export default Seção_busca_main