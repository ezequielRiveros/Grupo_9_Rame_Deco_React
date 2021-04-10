import React from 'react';

const LastProduct = ({lastProduct}) => {
    return (
		<div className="card-body">
			<div className="text-center">
				<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width:"25rem"}} src={lastProduct.main_image} alt="prod_img" />
			</div>
			<h4>{lastProduct.title}</h4><br/><p>{lastProduct.product_detail}</p>
		</div>
    );
}

export default LastProduct;
