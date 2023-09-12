import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {

    const [quantityAdded, setQuantityAdded]= useState(false)
    const {addItem} = useContext(CartContext)

    const onAdd = (cantidad) => {
        setQuantityAdded(true)
        addItem(product, cantidad)
    }

    return (
        <Card style={{ width: "18rem", margin: "1rem" }}>
            <Card.Img
                variant="top"
                src={product.image}
                width="100px"
                height="200px"
            />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>${product.price}</Card.Title>
                <Card.Text>{product.product}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                { !quantityAdded ? <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                : <Link to='/cart' className="btn btn-dark">Ir al Carrito</Link>}
            </Card.Body>
        </Card>
    );
}

export default ItemDetail;