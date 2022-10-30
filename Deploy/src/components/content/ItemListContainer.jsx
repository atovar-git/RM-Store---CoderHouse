import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProductsDB } from '../../utils/firebase';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Montaje. Llamada a la BBDD única vez.
    useEffect(() => {
        getProductsDB()                 // Fetch a BBDD.
            .then(data => { 
                setProducts(data);      // Seteo estados y re-renderiza.
                setLoaded(true);
            })
            .then(() => console.log("Data ready"))
    }, []);

    return (
        <>
            <main className='container my-3'>

                {loaded ?
                    <div>
                        {/* Para que renderice al mismo tiempo que los items */}
                        <h4 className='fw-normal mb-3'>Todas las figuritas</h4>
                        {/* ItemList */}
                        <ItemList products={products}/>
                    </div>
                    :
                    // Loader
                    <div className="loader-wrapper d-flex justify-content-center align-items-center mt-5">
                        <div className="loader"></div>
                    </div>
                }
                
            </main>
        </>
    );
}

export default ItemListContainer;
