function Lojas_oficiais({ lista }) {
    return (
        /* mt-15 -> mt-[60px] */
        <section id="lojas_oficiais" className="mt-[60px] flex justify-center">
            {/* h-72 é padrão, mas w-250 vira w-[1000px] */}
            <div className="bg-gray-200 h-72 w-[1000px] p-6 rounded-lg">
                <div>
                    <h1 className="font-bold text-gray-600 text-xl"> Lojas Oficiais </h1>
                </div>

                {/* gap-15 -> gap-[60px] */}
                <div className="flex mt-8 gap-[60px] justify-center items-center">
                    {lista.map((loja) => (
                        <button
                            key={loja.id}
                            /* w-35 e h-35 -> [140px] */
                            className="bg-white shadow w-[140px] h-[140px] rounded-full flex justify-center items-center transition-transform hover:scale-110"
                        >
                            <img
                                src={loja.imagem}
                                alt={loja.nome}
                                /* w-20 e h-20 -> [80px] */
                                className="w-[80px] h-[80px] object-contain rounded-full"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Lojas_oficiais;