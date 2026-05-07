function Solucoes({ lista }) {
    return (
        <section id="soluçoes" className="mt-1 flex justify-center flex-col">
            {/* ml-110 convertido para ml-[440px] */}
            <div className="flex ml-[440px]">
                <h1 className="font-bold text-gray-600 text-xl"> Soluções ValenteMotors </h1>
            </div>

            <div className="flex gap-5 mt-4 justify-center">
                {lista.map((solucao) => (
                    <button
                        key={solucao.id}
                        /* h-50 -> h-[200px] | w-58 -> w-[232px] | border-1 -> border-[1px] */
                        className="bg-white h-[200px] w-[232px] rounded-2xl border-[1px] border-gray-300 transition-all hover:shadow-lg flex flex-col justify-center"
                    >
                        <div className="text-left ml-4 flex flex-col gap-2">
                            <img
                                src={solucao.imagem}
                                alt={solucao.titulo}
                                /* w-12 e h-12 são padrões (48px), então não precisam de colchetes */
                                className="w-12 h-12 object-cover rounded-full"
                            />
                            <h1 className="font-bold text-xl">
                                {solucao.titulo}
                            </h1>
                            <p className="font-serif text-gray-600 text-sm pr-2">
                                {solucao.descricao}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Solucoes;