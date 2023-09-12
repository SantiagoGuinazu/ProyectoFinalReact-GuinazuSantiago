import React, {useContext} from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({item}) => {

    const {deleteItem} = useContext(CartContext)

    return(
        <div className="d-flex justify-content-around align-items-center">
            <img src={item.image} alt={item.name} width={'150rem'}/>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.quantity * item.price}</p>
            <button className="btn btn-danger" onClick={(()=>deleteItem(item.id))}>X</button>
        </div>
    )
}

export default CartItem;