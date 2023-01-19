import { useEffect, useState } from 'react';
import { getProduct } from '../../services/Product.service';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        document.title = 'Product Detail';
        getProduct(id)
        .then((res) => {
            setProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id])
    return (

        <div className="container">
            <div className="row p-5">

                <div className="col-12" key={product.id}>
                    <div className="card mb-4">
                        <img src={product.image} className="card-img-top" alt='test' />

                        <div className="card-body">
                            <h3 className='card-title'>${product.price}</h3>
                            <h4 className='card-title'>{product.name}</h4>
                            <p className="card-text">{product.description}</p>
                            <Link to="/checkout" className="btn btn-primary btn-sm d-grid">Carrito</Link>
                            <Link to="/detail-product" className="btn btn-warning btn-sm d-grid mt-2">Detalle</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default ProductDetail;