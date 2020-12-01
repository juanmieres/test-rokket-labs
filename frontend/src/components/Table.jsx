import React from 'react';

const Table = (props) => {
    const {items} = props;

    return (
        <table className="table table-sm">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col" className="text-center">opciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => (
                        <tr key={item.id}>
                            <th scope="row">1</th>
                            <td>{item.name}</td>
                            <td>{item.name}</td>
                            <td>{item.name}</td>
                            <td className="text-center">@twitter</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;
