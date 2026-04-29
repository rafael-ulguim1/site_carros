import { useEffect, useState } from "react"
import { EstoqueMotos } from "../listas/motos"

function Motos() {

    const [motos, setMotos] = useState([])

    useEffect(() => {
        setMotos(EstoqueMotos);
    }, []);

    return (

        <section id="ofertas">
            <section className="flex justify-center" id="cards_moto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {motos.map((moto) => (
                        <div key={moto.id} className="bg-white w-100 h-100 mt-50   ">
                            <div className="flex flex-col">
                                <img className=" " src="/src/assets/categorias/eletricos.jpg" />
                                <p className="text-left ml-3 text-sm"> {moto.tipo} </p>
                                <p className="text-left ml-3 text-sm"> {moto.nome}  </p>
                                <p className="text-left ml-3 text-sm"> {moto.preco} </p>
                                <p className="text-left ml-3 text-sm"> {moto.descricao}</p>
                                <p className="text-left ml-3 text-sm">{moto.km} </p>
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




export default Motos