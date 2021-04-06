import React from 'react';

const Table = ({data}) => {
	console.log(data);
    return (
        <>
            <h1 className="h3 mb-2 text-gray-800">Todos los productos</h1>
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
							<thead>
								<tr>
									<th>ID</th>
									<th>Título</th>
									<th>Descripción</th>
									<th>Categoría</th>


								</tr>
							</thead>
							<tbody>
								{
									data.map((producto, i) => (
										<tr key={i}>
											<td>{producto.id}</td>
											<td>{producto.title}</td>
											<td>{producto.description}</td>
											<td>{producto.category_product}</td>
										</tr>
									))
								}
								
							</tbody>
						</table>
					</div>
				</div>
			</div>
        </>
    );
}

export default Table;
