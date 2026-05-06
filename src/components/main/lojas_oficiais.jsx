function Lojas_oficiais({ lista }) {
    return (
        <section id="lojas_oficiais" className="mt-15 flex justify-center ">
            <div className="bg-gray-200 h-72 w-250">
                <div>
                    <h1 className="font-bold text-gray-600 text-xl"> Lojas Oficiais </h1>
                </div>

                <div className="flex mt-4 gap-15 ">
                    {/* Mapeando a lista que vem do Main */}
                    {lista.map((loja) => (
                        <button
                            key={loja.id}
                            className="bg-white shadow w-35 h-35 rounded-full flex justify-center items-center"
                        >
                            <img
                                src={loja.imagem}
                                alt={loja.nome}
                                className="w-20 h-20 object-cover rounded-full"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Lojas_oficiais;