import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import React, { useState, useContext } from 'react';
import { db } from '../../firebase/client';
import {CartContext } from '../../context/CartContext';

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const { cart, total, clear } = useContext(CartContext)

    const datosComprador = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.phone) {
            alert('Completar los campos vacios')
        } else {
            let order = {
                user,
                items: cart,
                total: total(),
                date: serverTimestamp(),
            }
            const ventas = collection(db, 'orders')
            addDoc(ventas, order)
                .then((res) => {
                    console.log(res.id)
                    setOrderId(res.id)
                    clear()
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <div>
            {orderId !== ''
                ? <div>
                    <h2>Felicitaciones, su orden fue generada</h2>
                    <h5>Su id de compra es: {orderId}</h5>
                </div>
                : <div>
                    <h2>Terminar Compra</h2>
                    <h3>Por Favor llenar con sus datos</h3>
                    <form onSubmit={finalizarCompra}>
                        <div className='mb-3'>
                            <label className='form-label'>Nombre Completo</label>
                            <input className='form-control' onChange={datosComprador} type='text' placeholder='Nombre y Apellido' name='name' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Numero de Telefono</label>
                            <input className='form-control' onChange={datosComprador} type='number' placeholder='Telefono' name='phone' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Direccion de Email</label>
                            <input className='form-control' onChange={datosComprador} type='email' placeholder='Email' name='email' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Repita su Email</label>
                            <input className='form-control' onChange={((e) => setValidateEmail(e.target.value))} type='email' placeholder='Email' name='email' />
                        </div>
                        <button className='btn btn-dark' type='submit' disabled={validateEmail !== user.email}>Generar Orden</button>
                    </form>
                </div>}
        </div>
    )
}

export default Checkout;
