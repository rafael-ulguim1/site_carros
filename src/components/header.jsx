function Header() {
    return (
        <header>
            <section id="topo_site" className="bg-gray-500 flex h-20 items-center sticky top-20 ">
                <div className="flex-1">
                    <img src="/src/assets/logo.png" className="h-15 ml-3"></img>
                </div>
                <nav className="flex gap-4 ">
                    <h3> Comprar </h3>
                    <h3> Vender  </h3>
                    <h3> Financiar </h3>
                    <h3> Assinar </h3>
                    <h3> Serviços </h3>
                    <h3> Noticias  </h3>
                    <h3> Ajuda </h3>

                </nav>
                <div className="flex-1 text-right mr-3">
                    <h4> entrar </h4>

                </div>


            </section>


        </header>

    )
}


export default Header