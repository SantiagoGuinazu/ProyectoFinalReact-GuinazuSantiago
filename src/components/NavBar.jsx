import 'bootstrap/dist/css/bootstrap.min.css'
import Dropdown from 'react-bootstrap/Dropdown';
import dieteticaanyma2 from '../assets/img/dieteticaanyma2.png'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary' data-bs-theme="dark">
            <div className='logoimagen'>
                <img src={dieteticaanyma2} alt='logo'/>
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
                                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                                    Categorias
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to='category/electronics'>Electronics</Dropdown.Item>
                                    <Dropdown.Item as={Link} to='category/jewelery'>Jewelery</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`category/men's clothing`}>Men's clothing</Dropdown.Item>
                                    <Dropdown.Item as={Link} to={`category/women's clothing`}>Women's clothing</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'>Contacto</a>
                        </li>
                    </ul>
                    <form className='d-flex' role='search'>
                        <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'></input>
                        <button className='btn btn-outline-success' type='submit'>Search</button>
                    </form>
                </div>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;

