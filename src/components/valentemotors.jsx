function ValenteMotors() {
    return (
        <section id="valentemotors">
            <div className="flex ml-80">
                <h1 className="font-bold text-gray-600 text-xl"> Na Valente motors </h1>
            </div>
            <div className=" flex gap-3 mt-4 justify-center mb-7">
                <button className="bg-white h-55 w-54 rounded-2xl border-1 border-gray-300"
                    style={{
                        backgroundImage: "url('/src/assets/eletricos.jpg')",
                        backgroundSize: 'cover',      // Faz a imagem cobrir todo o espaço sem sobrar buracos
                        backgroundRepeat: 'no-repeat'

                    }}
                >
                    <div className="flex-1 text-left  ml-4 flex flex-col gap-2 ">
                        <h1 className="font-serif text-white text-2xl font-bold w-10 mt-30"> Carros elétricos </h1>

                    </div>

                </button>
                <button className="bg-white  h-55 w-54 rounded-2xl border-1 border-gray-300"
                    style={{
                        backgroundImage: "url('/src/assets/hatches.jfif')",
                        backgroundSize: 'cover',      // Faz a imagem cobrir todo o espaço sem sobrar buracos
                        backgroundRepeat: 'no-repeat'

                    }}
                >
                    <div className="flex-1 text-left  ml-4 flex flex-col gap-2 ">
                        <h1 className="font-serif text-white text-2xl font-bold w-10 mt-30"> Hatches </h1>

                    </div>


                </button>
                <button className="bg-white  h-55 w-54 rounded-2xl border-1 border-gray-300"
                    style={{
                        backgroundImage: "url('/src/assets/picapes.jpg')",
                        backgroundSize: 'cover',      // Faz a imagem cobrir todo o espaço sem sobrar buracos
                        backgroundRepeat: 'no-repeat'

                    }}
                >
                    <div className="flex-1 text-left  ml-4 flex flex-col gap-2 ">
                        <h1 className="font-serif text-white text-2xl font-bold w-10 mt-30"> Picapes </h1>

                    </div>

                </button>
                <button className="bg-white  h-55 w-54 rounded-2xl border-1 border-gray-300"
                    style={{
                        backgroundImage: "url('/src/assets/sedans.jfif')",
                        backgroundSize: 'cover',      // Faz a imagem cobrir todo o espaço sem sobrar buracos
                        backgroundRepeat: 'no-repeat'

                    }}
                >
                    <div className="flex-1 text-left  ml-4 flex flex-col gap-2 ">
                        <h1 className="font-serif text-white text-2xl font-bold w-10 mt-30"> Sedans </h1>

                    </div>


                </button>
                <button className="bg-white  h-55 w-54 rounded-2xl border-1 border-gray-300"
                    style={{
                        backgroundImage: "url('/src/assets/suvs.jfif')",
                        backgroundSize: 'cover',      // Faz a imagem cobrir todo o espaço sem sobrar buracos
                        backgroundRepeat: 'no-repeat'

                    }}
                >
                    <div className="flex-1 text-left  ml-4 flex flex-col gap-2 ">
                        <h1 className="font-serif text-white text-2xl font-bold w-10 mt-30"> Suvs </h1>

                    </div>


                </button>
            </div>




        </section>
    )
}

export default ValenteMotors