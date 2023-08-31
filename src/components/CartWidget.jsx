import carrito from '../assets/img/carrito.png'

const CartWidget = () => {
    
    return (
        <div className='CartWidget'>
            <a href='#'>
                <img src={carrito} alt='carrito'/>
            </a>
        </div>    
    );
}

export default CartWidget;