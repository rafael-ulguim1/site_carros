import { useEffect, useState } from "react"
import { estoqueVeiculos } from "../listas/listas"

function Ofertas() {

    const [automoveis, setAutomoveis] = useState([])

    useEffect(() => {
        setAutomoveis(estoqueVeiculos);
    }, []);

    return (

        <section id="ofertas">
            <section className="flex justify-center" id="cards_estoque">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {automoveis.map((carro) => (
                        <div key={carro.id} className="bg-white w-100 h-100 mt-50   ">
                            <div className="flex flex-col">
                                <img className=" " src="/categorias/eletricos.jpg" />
                                <p className="text-left ml-3 text-sm"> {carro.tipo} </p>
                                <p className="text-left ml-3 text-sm"> {carro.nome}  </p>
                                <p className="text-left ml-3 text-sm"> {carro.preco} </p>
                                <p className="text-left ml-3 text-sm"> {carro.descricao} </p>
                                <p className="text-left ml-3 text-sm">{carro.km} </p>
                                <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg font-bold">
                                    Ver Detalhes
                                </button>

                            </div>



                        </div>
                    ))}
                </div>

            </section>



        </section>

    )

}




export default Ofertas