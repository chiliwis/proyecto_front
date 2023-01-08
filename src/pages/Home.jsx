import React from 'react';
import Hero from "../components/Hero";
const Home = () => {
    return (
        <main>
            <Hero />
            <div className="container mt-50">
                <div className="col-lg-6 pb-5">
                    <h4 className="mb-4">Cerveza Artesanal Jaliscience</h4>
                    <p className="mb-5"> Contamos con 3 estilos base que son American Blonde Ale, Porter Blonde Ale y la premiada Mole Porter. Cada cerveza es realizada con el mayor cuidado desde la selección de materia prima hasta el embotellado para entregar productos de calidad que te acompañaran en los mejores momentos de tu vida. </p>
                    <div className="row g-5">
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{ width: 90, height: 90 }}><i className="fa fa-beer fa-2x text-white" /></div>
                            <h4 className="text-uppercase">100% Granos</h4>
                            <p className="mb-0">Labore justo vero ipsum sit clita erat lorem magna clita nonumy dolor magna dolor vero</p>
                        </div>
                        <div className="col-sm-6">
                            <div className="d-flex align-items-center justify-content-center bg-primary border-inner mb-4" style={{ width: 90, height: 90 }}><i className="fa fa-beer fa-2x text-white" /></div>
                            <h4 className="text-uppercase">Premios</h4>
                            <p className="mb-0">Tenemos plata en Cerveza Mexico 2019 y 2022 para la Mole Porter</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <h1>Aqui va ir el contenido del home</h1> */ }
        </main >
    );
}

export default Home;