import Hero from "../../components/Hero";
// import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getProducts } from "../../services/Product.service";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        document.title = 'Products List';
        getProducts().then((res
        ) => {
            setProducts(res.data);
        });
    }, []);
    return (
        <main>
            <Hero />

            <div className="mt-5 p-5">
                <div className="row">
                    <div className="col-md-2">
                        <h5>CERVEZAS DE LINEA</h5>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>BLONDE</li>
                            <li>PORTER</li>
                            <li>MOLE PORTER</li>
                            <li>Por temporada</li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {products.map((product) => {
                                return (

                                    <div className="col-sm-6 col-md-4" key={product._id}>
                                        <div className="card mb-4">
                                            
                                                <img src={product.image} className="card-img-top" alt='test' />

                                                <div className="card-body">
                                                    <h3 className='card-title'>${product.price}</h3>
                                                    <h4 className='card-title'>{product.name}</h4>
                                                    <p className="card-text">{product.description}</p>
                                                    <link to="/checkout" className="btn btn-secondary btn-sm d-grid">Carrito</link>
                                                    <link to="/detail-product" className="btn btn-dark btn-sm d-grid mt-2">Detalle</link>
                                                </div>
                                        
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default ProductList;