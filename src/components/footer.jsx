function Footer() {
    return (
        <section id="footer">
            {/* Faixa de atendimento */}
            <div className="bg-red-500 flex justify-center py-2 px-4">
                <p className="text-white text-sm font-bold text-center">
                    Nossos canais de atendimento são 100% digitais. Precisa de ajuda? Clique aqui
                </p>
            </div>

            {/* Faixa de crédito - h-100 -> h-[400px] ou h-24 (96px) se for apenas uma barra */}
            <div className="bg-gray-700 flex justify-center items-center h-[100px]">
                <p className="text-white text-sm font-bold">
                    Desenvolvido por Rafael Valente |
                    <a href="https://github.com/rafael-ulguim1/site_carros" target="_blank" rel="noreferrer" className="ml-1 underline">
                        GitHub
                    </a>
                </p>
            </div>

            {/* Faixa da Logo - h-20 -> h-[80px] | h-15 -> h-[60px] */}
            <div className="bg-red-500 flex justify-center h-[80px] items-center gap-4">
                {/* DICA: Se a imagem não aparecer no deploy, verifique se ela está 
                   na pasta 'public' e use apenas src="/logo.png" 
                */}
                <img src="/src/assets/main/logo.png" className="h-[60px] rounded-full" alt="Logo ValenteMotors" />
                <p className="text-white text-lg font-bold"> ValenteMotors </p>
            </div>
        </section>
    )
}

export default Footer;