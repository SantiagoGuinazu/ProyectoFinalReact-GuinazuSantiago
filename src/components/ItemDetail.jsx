import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ItemDetail({ product }) {
    const [contador, setContador] = useState(0);

    const sumar = () => {
        setContador(contador + 1);
    };
    const restar = () => {
        setContador(contador - 1);
    };
    const restart = () => {
        setContador(0);
    };

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
                <Button as={Link} variant="primary" to="/">Home</Button>
                <Button className='btn' onClick={restar} >-</Button>
                <Button className='btn' onClick={sumar} >+</Button>
                <Button className='btn' onClick={restart}>restart</Button>
                <p>Contador: {contador}</p>
            </Card.Body>
        </Card>
    );
}
