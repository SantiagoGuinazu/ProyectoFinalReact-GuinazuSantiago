import {BsCart4} from "react-icons/bs"
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    
    return (
        <div className='d-flex justify-content-around align-items-center'>
            <BsCart4 fontSize={'1.5rem'}/>
            <Badge bg="danger">5</Badge>
        </div>    
    );
}

export default CartWidget;