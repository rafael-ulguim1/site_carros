import { useEffect, useState } from "react"
import { estoqueVeiculos } from "../listas/listas"

function Ofertas() {

    const [carros, setCarros] = useState([])

    useEffect(() => {
        setCarros(estoqueVeiculos);
    }, []);

    return (

        <section id="ofertas">
            <section id="topo_site" className=" bg-white flex h-20 items-center sticky  ">
                <div className="flex-1">
                    <img src="/src/assets/main/logo.png" className="h-15 ml-3"></img>
                </div>
                <nav className="flex gap-4 ">
                    <h3> Comprar </h3>
                    <h3> Vender  </h3>
                    <h3> Financiar </h3>
                    <h3> Assinar </h3>
                    <h3> Serviços </h3>
                    <h3> Noticias  </h3>
                    <h3> Ajuda </h3>

                </nav>
                <div className="flex-1 text-right mr-3">
                    <h4> entrar </h4>

                </div>


            </section>
            <section className="flex justify-center" id="cards_estoque">
                <div className="bg-white w-100 h-100 mt-50   ">
                    <div className="flex flex-col">
                        <img className=" " src="/src/assets/categorias/eletricos.jpg" />
                        <p className="text-left ml-3 text-sm"> Moto </p>
                        <p className="text-left ml-3 text-sm"> Ducati Monster 937 </p>
                        <p className="text-left ml-3 text-sm"> Valor: 85000 </p>
                        <p className="text-left ml-3 text-sm"> Design italiano, eletrônica de MotoGP, pura emoção</p>
                        <p className="text-left ml-3 text-sm">KM: 2000 </p>

                    </div>



                </div>

            </section>



        </section>

    )

}




export default Ofertas