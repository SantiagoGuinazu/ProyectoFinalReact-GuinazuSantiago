import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import {collection, getDocs}from 'firebase/firestore'
import {db} from '../../firebase/client'


const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { id } = useParams();
    useEffect(() =>{
        setLoading(true);
        const productsRef = collection(db, "products")
        getDocs(productsRef)
        .then((res) => {
            const list = res.docs.map((item)=>({id:item.id, ...item.data()})) 
            setProducts(list)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, [id]);

console.log(products)

    return(
        <Container>
            <Row style={{alignItems:'stretch', justifyContent:'space-evenly'}}>
                {loading ? <Loader /> : <ItemList products={products}/>}
            </Row>
        </Container>
    );
}

export default ItemListContainer;

<ItemListContainer />