import React from 'react';
import { useState } from 'react';                                     // useState Hook es para poder darle estados a los componentes FUNCIONALES (no de clase). Como las variables de una función se destruyen una vez ejecutadas, con useState puedo guardar sus valores y reimprimirlos en cada re-renderización. Cada CAMBIO DE ESTADO PROVOCA UNA RE-RENDERIZACION. Si fuera una variable normal perdería su valor en cada re-renderizado, con useState se renderiza el nuevo valor.
import { Link } from 'react-router-dom';                              // Para acceder a las rutas.
import { useContext } from 'react';                                   // Hook para acceder a los ESTADOS y FUNCIONES del contexto.
import { CartContext } from '../../context/CartContext';              // Contexto el cual tiene sus estados y funciones.


const CartItem = (props) => {

    /* QUITAMOS LA FUNCIONALIDAD DE CAMBIAR LA CANTIDAD DESDE ESTE COMPONENTE PARA SIMPLIFICARLO. LO PODEMOS DISEÑAR MAS ADELANTE */
    // const [count, setCount] = useState(props.amount);     // Destruturing de array. [0] es la VARIABLE que guardará el estado (valor). [1] es una FUNCION que modificará dicho valor. DEBEMOS USAR CONST ya que modificamos el valor de dicha variable (su contenido (NO referencia), mediante la función). = useState(valor_inicial). DEBEMOS MODIFICAR UNICAMENTE EL VALOR MEDIANTE LA FUNCION INDICADA. CADA CAMBIO DE ESTADO PROVOCA UNA RE-RENDERIZACION.

    // const [subTotal, setSubTotal] = useState(props.amount * props.price);

    // function operation(op) {
    //     if (op == "add") {
    //         if (count < props.stock) {
    //             setCount(count + 1)
    //             setSubTotal((count + 1) * props.price)
    //         }
    //     } else {
    //         if (count > 1) {
    //             setCount(count - 1)
    //             setSubTotal((count - 1) * props.price)
    //         }
    //     }
    // }

    // Leo el contexto.
    const { deleteProductCart } = useContext(CartContext);

    // Ver que el evento es inline (camelCase) y llama a nuestra función.
    return (
        <>
            <div className="card mb-3 col-lg-7 m-auto cart-item">
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center p-2">
                        <div><img src={props.image} className="cart-item-img" /></div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-2">
                            <div className="p-0 d-flex justify-content-between">
                                <h5 className="card-title">{props.name}</h5><p className="card-text"><small className="text-muted">#{props.number}</small></p>
                            </div>

                            {/* <div className='text-end mb-1'><span className="badge bg-light rounded-pill">Stock {props.stock}</span></div> */}
                            <div className='d-flex justify-content-start align-items-center'>
                                {/* <p className="card-tex mb-0 me-2">Cantidad:</p> */}
                                <p className="card-tex mb-0">Cantidad:</p>
                                {/* <button type="button" className="btn btn-sm btn-outline-light btn-plus-minus" onClick={() => operation("sub")}><i className="fa-solid fa-minus"></i></button> */}
                                {/* <span className="badge bg-primary rounded-pill mx-2 px-2 fs-6">{props.amount}</span> */}
                                <span className="badge bg-primary rounded-pill mx-1 px-2 fs-6">{props.amount}</span>
                                {/* <button type="button" className="btn btn-sm btn-outline-light btn-plus-minus" onClick={() => operation("add")}><i className="fa-solid fa-plus"></i></button> */}
                            </div>

                            <p className="card-text mb-0">Precio unitario: <span className='fw-bold'>${props.price}</span></p>
                            <p className="card-text mb-0">Subtotal: <span className='fw-bold'>${props.subTotal}</span></p>
                            <div className='d-flex'>
                                <Link to={`/item/${props.id}`} className="btn btn-secondary btn-sm ms-auto me-1 d-block">Editar</Link>
                                <button className="btn btn-primary btn-sm d-block" onClick={() => deleteProductCart(props.id)}>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;
