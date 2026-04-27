function Noticias({ lista }) {
    return (
        <section id="noticias">
            <div className="flex ml-80">
                <h1 className="font-bold text-gray-600 text-xl"> Noticias </h1>
            </div>

            <div className=" flex gap-3 mt-4 justify-center mb-7">
                {lista.map((noticia) => (
                    <button
                        key={noticia.id}
                        className="bg-white h-70 w-45 rounded-2xl border-1 border-gray-300 flex flex-col items-start"
                    >
                        <img
                            src={noticia.imagemNoticia}
                            alt={noticia.titulo}
                            className="w-45 h-40 object-cover"
                        />

                        <p className=" text-left ml-3 text-[11px] font-bold text-gray-600 ">
                            / {noticia.categoria}
                        </p>

                        <p className=" text-left ml-3 text-sm">
                            {noticia.descricao}
                        </p>

                        <div className="flex mt-6">
                            <img
                                src={noticia.autor.foto}
                                className="h-8 w-8"
                                alt="perfil"
                            />
                            <p className="text-[11px]">
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