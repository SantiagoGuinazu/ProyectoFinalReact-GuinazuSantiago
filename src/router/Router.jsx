import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Footer from '../components/Footer';
import { ShopComponentContext } from '../context/shopContext';
import Hijo from '../components/hijo/Hijo';

export default function Router() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:id' element={<ItemListContainer />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
            <ShopComponentContext>
                <Hijo />
            </ShopComponentContext>
            <Footer />
        </BrowserRouter>
    )
}