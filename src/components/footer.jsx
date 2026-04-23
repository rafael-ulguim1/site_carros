function Footer() {
    return (
        <section id="footer">
            <div className="bg-red-500 flex justify-center">
                <p className="text-white text-sm font-bold"> Nossos canais de atendimento são 100% digitais. Precisa de ajuda?Clique aqui </p>
            </div>
            <div className="bg-gray-700 flex justify-center items-center h-100">
                <p className="text-white text-sm font-bold"> Desenvolvido por Rafael Valente git:https://github.com/rafael-ulguim1/site_carros </p>
            </div>
            <div className="bg-red-500 flex justify-center h-20 items-center flex gap-4">
                <img src="/src/assets/logo.png" className="h-15 ml-3  rounded-full"></img>
                <p className="text-white text-sm font-bold"> ValenteMotors </p>
            </div>

        </section>
    )
}

export default Footer