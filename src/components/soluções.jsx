function Solucoes() {
    return (

        <section id="soluçoes" className="mt-1 flex justify-center flex-col  ">
            <div className="flex ml-110">
                <h1 className="font-bold text-gray-600 text-xl"> Soluções ValenteMotors </h1>
            </div>
            <div className=" flex gap-5 mt-4 justify-center">
                <button className="bg-white h-50 w-58 rounded-2xl border-1 border-gray-300">
                    <div className="flex-1 text-left ml-4 flex flex-col gap-2  ">
                        <img
                            src="/src/assets/soluções1.jpg"
                            alt="soluções1"
                            className="w-12 h-12 object-covers  rounded-full  "
                        />
                        <h1 className="font-bold text-xl"> Carros por assinatura </h1>
                        <p className="font-serif text-gray-600 text-sm"> Compare e encontre as melhores ofertas </p>


                    </div>

                </button>
                <button className="bg-white h-50 w-58 rounded-2xl border-1 border-gray-300" >
                    <div className="flex-1 text-left  ml-4 flex flex-col gap-2 ">
                        <img
                            src="/src/assets/soluçoes2.png"
                            alt="soluções1"
                            className="w-12 h-12 object-covers  rounded-full "
                        />

                        <h1 className="font-bold text-xl"> Serviços Automativos </h1>
                        <p className="font-serif text-gray-600 text-sm"> funilaria, manutenção e mais em oficinas perto de você </p>
                    </div>


                </button>
                <button className="bg-white h-50 w-58 rounded-2xl border-1 border-gray-300">
                    <div className="flex-1 text-left  ml-4 flex flex-col gap-2 ">
                        <img
                            src="/src/assets/soluções3.png"
                            alt="soluções1"
                            className="w-12 h-12 object-covers  rounded-full  "
                        />
                        <h1 className="font-bold text-xl"> Vender </h1>
                        <p className="font-serif text-gray-600 text-sm"> Vendar facil e rápido. Anuncie para milhoes e feche o melhor negócio </p>

                    </div>

                </button>
                <button className="bg-white h-50 w-58 rounded-2xl border-1 border-gray-300">
                    <div className="flex-1 text-left  ml-4 flex flex-col gap-2 ">
                        <img
                            src="/src/assets/soluções4.png"
                            alt="soluções1"
                            className="w-12 h-12 object-covers  rounded-full "
                        />
                        <h1 className="font-bold text-xl"> Financiamento </h1>
                        <p className="font-serif text-gray-600 text-sm">Aproveite milhares de ofertas com parcelas que cabem no seu bolso.</p>

                    </div>


                </button>
            </div>



        </section>
    )
}

export default Solucoes