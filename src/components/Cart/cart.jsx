import React,{useContext} from "react";
import {CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { Button } from "react-bootstrap";

const Cart = () => {
    const{cart, clear, total}= useContext(CartContext)
    return(
        <div>
            {cart.length
            ? <div>
                {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
                <p>Total a pagar: ${total()}</p>
                <div>
                    <button className="btn btn-danger" onClick={clear}>Vaciar Carrito</button>
                    <Link className="btn btn-dark">Terminar de Comprar</Link>
                </div>
            </div>
            :   <div>
                    <h3>Tu carrito esta vacio</h3>
                    <Button as={Link} className="btn btn-danger" to="/">Volver a comprar</Button>
                </div>
                }
        </div>
    )
}

export default Cart;