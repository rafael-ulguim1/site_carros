function Solucoes({ lista }) {
    return (

        <section id="soluçoes" className="mt-1 flex justify-center flex-col  ">
            <div className="flex ml-110">
                <h1 className="font-bold text-gray-600 text-xl"> Soluções ValenteMotors </h1>
            </div>


            <div className="flex gap-5 mt-4 justify-center">
                {/* Mapeando a lista recebida via Props */}
                {lista.map((solucao) => (
                    <button
                        key={solucao.id}
                        className="bg-white h-50 w-58 rounded-2xl border-1 border-gray-300 transition-all hover:shadow-lg"
                    >
                        <div className="flex-1 text-left ml-4 flex flex-col gap-2">
                            <img
                                src={solucao.imagem}
                                alt={solucao.titulo}
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-bold text-xl">
                                {solucao.titulo}
                            </h1>
                            <p className="font-serif text-gray-600 text-sm">
                                {solucao.descricao}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}



export default Solucoes