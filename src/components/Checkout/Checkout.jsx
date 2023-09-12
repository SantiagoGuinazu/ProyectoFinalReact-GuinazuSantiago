import React from "react";

const Checkout = () => {
    return(
        <div>
            <h2>Terminar Compra</h2>
            <h3>Por Favor llenar con sus datos</h3>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input className="form-control" type="text" placeholder="Nombre" name="name"/>
                    <input className="form-control" type="text" placeholder="Apellido" name="lastname"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Numero de Telefono</label>
                    <input className="form-control" type="number" placeholder="Telefono" name="phone"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Direccion de Email</label>
                    <input className="form-control" type="email" placeholder="Email" name="email"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Repita su Email</label>
                    <input className="form-control" type="email" placeholder="Email" name="email"/>
                </div>
                <button className="btn btn-dark" type="submit">Generar Orden</button>
            </form>
        </div>
    )
}

export default Checkout;