import React from 'react';




const LastProduct = ({productTitle,title,productDescription}) => {
    return (
        <div className="col-lg-6 mb-4">						
			<div className="card shadow mb-4">
				<div className="card-header py-3">
					<h6 className="m-0 font-weight-bold text-primary">{title}</h6>
				</div>
				<div className="card-body">
	{productTitle}
	<br></br>
	{productDescription}
				</div>
			</div>
	    </div>
    );
}

export default LastProduct;
