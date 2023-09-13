import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown';
import dieteticaanyma2 from '../../assets/img/dieteticaanyma2.png'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary' data-bs-theme="dark">
            <div className='logoimagen'>
                <img src={dieteticaanyma2} alt='logo' />
            </div>
            <div className='container-fluid'>
                <a className='navbar-brand' href='/'>ANYMA</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <div>
                            <Dropdown>
                                <Button as={Link} to='/' variant="primary" id='dropdown-basic'>
                                    Inicio
                                </Button>
                                <Dropdown.Toggle variant="primary" id='dropdown-basic'>
                                    Categorias
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='category/electronics'>Tecnologia</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='category/jewelery'>Joyeria</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`category/men's clothing`}>Ropa Masculina</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`category/women's clothing`}>Ropa Femenina</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as={Link} to='/'>Todos los Productos</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </ul>
                </div>
            </div>
            <NavLink as={Link} to='/cart'> <CartWidget /> </NavLink>
        </nav>
    );
};

export default NavBar;

