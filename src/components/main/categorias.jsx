function Categorias({ lista }) {
    return (
        <section id="categorias" className="mt-10 flex justify-center flex-col">
            {/* Dica: em vez de ml-80, que pode quebrar em telas menores, 
                tente usar max-w e mx-auto no container pai no futuro */}
            <div className="flex ml-[320px]">
                <h1 className="font-bold text-gray-600 text-xl"> Categorias </h1>
            </div>

            <div className="flex gap-3 mt-4 justify-center mb-7">
                {lista.map((categoria) => (
                    <button
                        key={categoria.id}
                        // Ajustado h-55 para h-[220px] e w-54 para w-[216px] (valores aproximados)
                        className="bg-white h-[220px] w-[216px] rounded-2xl border-[1px] border-gray-300 transition-transform hover:scale-105 overflow-hidden"
                        style={{
                            backgroundImage: `url('${categoria.imagem}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="flex-1 text-left ml-4 flex flex-col gap-2">
                            {/* Ajustado mt-30 para mt-[120px] */}
                            <h1 className="font-serif text-white text-2xl font-bold w-10 mt-[120px] leading-tight text-shadow-md">
                                {categoria.nome}
                            </h1>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Categorias;