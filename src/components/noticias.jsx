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
                    <p className=" text-left ml-3 text-sm"> Motos </p>
                    <p className=" text-left ml-3 text-sm"> Motos: capacetes terão novo selo do Inmetro </p>

                </button>
                <button className="bg-white  h-70 w-45 rounded-2xl border-1 border-gray-300 flex flex-col items-start  ">
                    <img
                        src="/src/assets/noticia2.jpg"
                        alt="noticia1"
                        className="w-45 h-40 object-cover "

                    />
                    <p className=" text-left ml-3 text-sm"> Ultimas notícias </p>
                    <p className=" text-left ml-3 text-sm"> Saiu! Veja o novo Chevrolet Sonic por completo </p>

                </button>
                <button className="bg-white  h-70 w-45 rounded-2xl border-1 border-gray-300 flex flex-col items-start  ">

                    <img
                        src="/src/assets/noticia3.jpg"
                        alt="noticia1"
                        className="w-45 h-40 object-cover"

                    />
                    <p className=" text-left ml-3 text-sm"> Ultimas notícias </p>
                    <p className="text-left ml-3 text-sm"> GWM Tank 700 estreia como SUV de luxo off-road </p>
                </button>
                <button className="bg-white  h-70 w-45 rounded-2xl border-1 border-gray-300 flex flex-col items-start  ">


                    <img
                        src="/src/assets/noticia4.webp"
                        alt="noticia1"
                        className="w-45 h-40 object-cover"

                    />
                    <p className="text-left ml-3 text-sm"> Ultimas notícias </p>
                    <p className=" text-left ml-3 text-sm"> O Brasil e o mundo de olho no Salão de Pequim 2026 </p>
                </button>
                <button className="bg-white  h-70 w-45 rounded-2xl border-1 border-gray-300 flex flex-col items-start  ">

                    <img
                        src="/src/assets/noticia5.jfif"
                        alt="noticia1"
                        className="w-45 h-40 object-cover"

                    />
                    <p className=" text-left ml-3 text-sm"> Ultimas notícias </p>
                    <p className=" text-left ml-3 text-sm"> Omoda & Jaecoo comprará fábrica da JLR em Itatiaia </p>

                </button>
                <button className="bg-white  h-70 w-45 rounded-2xl border-1 border-gray-300 flex flex-col items-start  ">
                    <img
                        src="/src/assets/noticia6.jfif"
                        alt="noticia1"
                        className="w-45 h-40 object-cover"

                    />
                    <p className=" text-left ml-3 text-sm"> Ultimas notícias </p>
                    <p className=" text-left ml-3 text-sm"> Brasil já tem carro elétrico 0km por R$ 70 mil </p>

                </button>
            </div>

        </section>
    )
}


export default Noticias