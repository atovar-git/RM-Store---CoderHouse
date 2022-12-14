import React from 'react';

const Landing = () => {
    return (
        <>
            <main className='landing flex-grow-1 d-flex flex-column h-100'> {/*flex-grow-1 de esa forma la cita queda siempre abajo*/}

                <div className="hero-box flex-grow-1 d-flex flex-column justify-content-center">

                    <div className="hero-headings mt-3">
                        <h1 className="display-1 text-center">R&M Store</h1>
                        <p className="lead fs-1 text-center">Colecciona las estampillas de la serie Rick y Morty</p>
                        <button type="button" className="btn btn-primary rounded-5 d-block m-auto mt-3">Ir a la tienda</button>
                    </div>


                    <div className="features col-10 col-sm-8 col-md-10 mx-auto d-md-flex justify-content-center algin-items-center mt-2 mt-lg-4">

                        <div className="card col col-md-3 col-xl-3 col-xxl-2 m-2">
                            <div className="card-body">
                                <i className="fa-regular fa-image d-block text-center feature-icons mb-3"></i>
                                <h4 className="text-center lead">Excelente calidad</h4>
                            </div>
                        </div>

                        <div className="card col col-md-3 col-xl-3 col-xxl-2 m-2">
                            <div className="card-body">
                                <i className="fa-regular fa-credit-card d-block text-center feature-icons mb-3"></i>
                                <h4 className="text-center lead">Varios métodos de pago</h4>
                            </div>
                        </div>

                        <div className="card col col-md-3 col-xl-3 col-xxl-2 m-2">
                            <div className="card-body">
                                <i className="fa-solid fa-truck-fast d-block text-center feature-icons mb-3"></i>
                                <h4 className="text-center lead">Envíos a todo el país</h4>
                            </div>
                        </div>

                    </div>

                </div>


                <figure className="text-end me-2 mb-0 mt-auto">
                    <blockquote className="blockquote">
                        <p className='fs-6'>Las bodas son básicamente funerales con un pastel.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Rick en <cite title="Source Title">Rick and Morty</cite>
                    </figcaption>
                </figure>

            </main>
        </>
    );
}

export default Landing;
