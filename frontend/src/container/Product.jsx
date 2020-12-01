import React from 'react';
import initialState from '../initialState';

const Product = () => {

    const [products, setProducts] = React.useState([])

    React.useEffect(()=>{
        setProducts(initialState.products)
    })

    const deleteProduct = async id => {

        try {
    
          const productsFilter = products.filter(item => item.id != id)
          console.log(productsFilter)
          setProducts(productsFilter)
    
    
        } catch (error) {
          console.log(error)
        }
      }
    
      const editProduct = (item) => {
        // setModoEdicion(true)
        // setProduct(item.name)
        // setProductId(item.id)
      }

    return (
        <div>
            <h3 className="mt-4">Mantedor de Productos</h3>
            <hr/>
            <div className="row mt-">
                <div className="col-md-4">
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
                        <button type="submit" className="btn btn-primary btn-block">Aceptar</button>
                    </form>
                </div>
                <div className="col-md-8 mt-4">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">Código</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col" className="text-center">opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.code}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td className="text-center">
                                            <button  className="btn btn-sm btn-danger float-right mx-2" onClick = {() => deleteProduct(item.id)}> Eliminar</button>
                                            <button className="btn btn-sm btn-warning float-right" onClick = {() => editProduct(item)}>Editar</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Product
