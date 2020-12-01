import React from 'react'

const Form = () => {

    const [error, setError] = React.useState(false)

    return (
        <form>
            <div className="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" className="form-control form-control-sm" id="nombre" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label for="codigo">Código</label>
                <input type="text" className="form-control form-control-sm" id="codigo" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label for="descripcion">Descripción</label>
                <textarea className="form-control" id="descripcion" rows="2"></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Aceptar</button>
        </form>
    )
}

export default Form;
