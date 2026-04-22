function Lojas_oficiais() {
    return (
        <section id="lojas_oficiais" className="mt-15 flex justify-center ">
            <div className="bg-gray-200  h-72 w-250">
                <div>
                    <h1 className="font-bold text-gray-600 text-xl"> Lojas Oficiais </h1>

                </div>
                <div className="flex mt-4 gap-15 ">
                    <button className=" bg-white shadow w-35 h-35 rounded-full flex justify-center items-center">
                        <img
                            src="/src/assets/bmw.png"
                            alt="logo_bmw"
                            className="w-20 h-20 object-covers  rounded-full"
                        />

                    </button>
                    <button className=" bg-white shadow w-35 h-35 rounded-full flex justify-center items-center">
                        <img
                            src="/src/assets/honda.png"
                            alt="logo_bmw"
                            className="w-20 h-20 object-covers  rounded-full"
                        />

                    </button>
                    <button className=" bg-white shadow w-35 h-35 rounded-full flex justify-center items-center">
                        <img
                            src="/src/assets/yamaha.png"
                            alt="logo_bmw"
                            className="w-20 h-20 object-covers rounded-full"
                        />

                    </button>

                </div>
            </div>
        </section>

    )
}

export default Lojas_oficiais