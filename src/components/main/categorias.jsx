function Categorias({ lista }) {
    return (
        <section id="categorias" className="mt-10 flex justify-center flex-col">
            <div className="flex ml-80">
                <h1 className="font-bold text-gray-600 text-xl"> Categorias </h1>
            </div>

            <div className="flex gap-3 mt-4 justify-center mb-7">
                {lista.map((categoria) => (
                    <button
                        key={categoria.id}
                        className="bg-white h-55 w-54 rounded-2xl border-1 border-gray-300 transition-transform hover:scale-105 overflow-hidden"
                        style={{
                            backgroundImage: `url('${categoria.imagem}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}
                    >
                        <div className="flex-1 text-left ml-4 flex flex-col gap-2">
                            {/* O nome da categoria agora é dinâmico e usamos o texto branco para contrastar com a imagem */}
                            <h1 className="font-serif text-white text-2xl font-bold w-10 mt-30 leading-tight">
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