import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ product }) {
    return (
        <Card border="primary" style={{ width: '18rem', margin:'1rem' }}>
            <Card.Img variant='top' src={product.image} width='100px' height='300px' />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Title>${product.price}</Card.Title>
                <Card.Text>{product.product}</Card.Text>
                <Card.Text>{product.category}</Card.Text>
                <Button as={Link} variant='primary' to={`/item/${product.id}`}>Ver Detalle</Button>
            </Card.Body>
        </Card>
    );
}

export default Item;
