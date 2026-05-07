function ValenteMotors() {
    return (
        <section id="valentemotors">
            {/* ml-80 -> ml-[320px] */}
            <div className="flex ml-[320px]">
                <h1 className="font-bold text-gray-600 text-xl"> Na Valente motors </h1>
            </div>

            <div className="flex gap-3 mt-4 justify-center mb-7">
                {/* Repeti a correção para todos os botões: 
                    h-25 -> h-[100px] 
                    w-54 -> w-[216px] 
                    border-1 -> border-[1px]
                    w-10 -> w-[150px] (para o texto não esmagar)
                */}

                <button className="bg-red-500 h-[100px] w-[216px] rounded-2xl border-[1px] border-gray-300 transition-transform hover:scale-105">
                    <div className="flex-1 text-left ml-4 flex flex-col gap-2">
                        <h1 className="font-serif text-white text-xl font-bold w-[150px] leading-tight">
                            Carros elétricos
                        </h1>
                    </div>
                </button>

                <button className="bg-red-500 h-[100px] w-[216px] rounded-2xl border-[1px] border-gray-300 transition-transform hover:scale-105">
                    <div className="flex-1 text-left ml-4 flex flex-col gap-2">
                        <h1 className="font-serif text-white text-xl font-bold w-[150px]">
                            Hatches
                        </h1>
                    </div>
                </button>

                <button className="bg-red-500 h-[100px] w-[216px] rounded-2xl border-[1px] border-gray-300 transition-transform hover:scale-105">
                    <div className="flex-1 text-left ml-4 flex flex-col gap-2">
                        <h1 className="font-serif text-white text-xl font-bold w-[150px]">
                            Picapes
                        </h1>
                    </div>
                </button>

                <button className="bg-red-500 h-[100px] w-[216px] rounded-2xl border-[1px] border-gray-300 transition-transform hover:scale-105">
                    <div className="flex-1 text-left ml-4 flex flex-col gap-2">
                        <h1 className="font-serif text-white text-xl font-bold w-[150px]">
                            Sedans
                        </h1>
                    </div>
                </button>

                <button className="bg-red-500 h-[100px] w-[216px] rounded-2xl border-[1px] border-gray-300 transition-transform hover:scale-105">
                    <div className="flex-1 text-left ml-4 flex flex-col gap-2">
                        <h1 className="font-serif text-white text-xl font-bold w-[150px]">
                            Suvs
                        </h1>
                    </div>
                </button>
            </div>
        </section>
    )
}

export default ValenteMotors