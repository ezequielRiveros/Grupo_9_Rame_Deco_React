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
								<tr>
									<td>Tiger Nixon</td>
									<td>System Architect</td>
									<td>$320,800</td>
									<td>
										<ul>
											<li>Category 01</li>
											<li>Category 02</li>
											<li>Category 03</li>
										</ul>
									</td>
									<td>
										<ul>
											<li><span className="text-danger">Red</span></li>
											<li><span className="text-primary">Blue</span></li>
											<li><span className="text-success">Green</span></li>
										</ul>
									</td>
									<td>245</td>
								</tr>
								<tr>
									<td>Jane Doe</td>
									<td>Fullstack developer</td>
									<td>$320,800</td>
									<td>
										<ul>
											<li>Category 01</li>
											<li>Category 02</li>
											<li>Category 03</li>
										</ul>
									</td>
									<td>
										<ul>
											<li><span className="text-danger">Red</span></li>
											<li><span className="text-primary">Blue</span></li>
											<li><span className="text-success">Green</span></li>
										</ul>
									</td>
									<td>245</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
        </>
    );
}

export default Table;
