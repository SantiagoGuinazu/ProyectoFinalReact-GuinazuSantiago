import { BsCart4 } from 'react-icons/bs';
import { Badge } from 'react-bootstrap';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
    const {cartQuantity} = useContext(CartContext)
    return (
        <div className='d-flex justify-content-around align-items-center'>
            <BsCart4 style={{ width: '10rem', margin: '0.5rem' }} fontSize={'3.5rem'} color='white'/>
            {cartQuantity() > 0 && <Badge bg='danger'>{cartQuantity()}</Badge>}
        </div>    
    );
}

export default CartWidget;