function Noticias() {
    return (
        <section id="noticias">
            <div className="flex ml-80">
                <h1 className="font-bold text-gray-600 text-xl"> Noticias </h1>
            </div>
            <div className=" flex gap-3 mt-4 justify-center mb-7">
                <button className="bg-white h-70 w-45 rounded-2xl border-1 border-gray-300 flex flex-col items-start  ">

                    <img
                        src="/src/assets/noticia1.jfif"
                        alt="noticia1"
                        className="w-45 h-40 object-cover "

                    />
                    <p className=" text-left ml-3 text-[11px] font-bold text-gray-600 ">/ Motos </p>
                    <p className=" text-left ml-3 text-sm"> Motos: capacetes terão novo selo do Inmetro </p>
                    <div className="flex mt-6">
                        <img src="/src/assets/perfil_news.png" className="h-8 w-8"></img>
                        <p className="text-[11px]"> Por André Ulguim </p>
                    </div>


                </button>

            </div>

        </section>
    )
}


export default Noticias