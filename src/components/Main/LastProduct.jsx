import React from 'react';

const LastProduct = ({lastProduct}) => {
    return (
		<div className="card-body">
			<div className="text-center">
				<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"25rem"}} src={lastProduct.main_image} alt="prod_img" />
			</div>
			<h5>{lastProduct.title}</h5>
			<p>{lastProduct.summary}</p>
			<a target="_blank" rel="nofollow" href="http://localhost:3001/api/products/last">Visualizar la información completa del producto</a>
		</div>
    );
}

export default LastProduct;
