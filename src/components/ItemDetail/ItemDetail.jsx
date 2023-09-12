import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ product }) => {

    const onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} productos`)
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
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            </Card.Body>
        </Card>
    );
}

export default ItemDetail