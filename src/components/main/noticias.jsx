function Noticias({ lista }) {
    return (
        <section id="noticias">
            {/* ml-80 convertido para ml-[320px] */}
            <div className="flex ml-[320px]">
                <h1 className="font-bold text-gray-600 text-xl"> Noticias </h1>
            </div>

            <div className="flex gap-3 mt-4 justify-center mb-7">
                {lista.map((noticia) => (
                    <button
                        key={noticia.id}
                        /* h-70 vira h-[280px] e w-45 vira w-[180px] */
                        className="bg-white h-[280px] w-[180px] rounded-2xl border-[1px] border-gray-300 flex flex-col items-start overflow-hidden transition-transform hover:scale-105"
                    >
                        <img
                            src={noticia.imagemNoticia}
                            alt={noticia.titulo}
                            /* w-45 vira w-[180px] e h-40 vira h-[160px] */
                            className="w-[180px] h-[160px] object-cover"
                        />

                        <p className="text-left ml-3 text-[11px] font-bold text-gray-600 mt-2">
                            / {noticia.categoria}
                        </p>

                        <p className="text-left ml-3 text-sm leading-tight pr-2">
                            {noticia.descricao}
                        </p>

                        <div className="flex items-center gap-2 mt-auto mb-3 ml-3">
                            <img
                                src={noticia.autor.foto}
                                className="h-8 w-8 rounded-full object-cover"
                                alt="perfil"
                            />
                            <p className="text-[11px] text-gray-500">
                                Por {noticia.autor.nome}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Noticias;