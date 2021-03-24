import React from 'react';
import Card from './Card';

const Metrics = ({title, total}) => {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">{title}</h1>
			</div>

			<div className="row">

				<Card 
                    border="primary"
                    text="primary"
                    icon="fas fa-clipboard-list"
                    title="La cantidad de notitas"
                    value={total}
                />
                <Card 
                    border="success"
                    text="success"
                    icon="fas fa-dollar-sign"
                    title="Amount in products"
                    value="$546.456"
                />
                <Card 
                    border="warning"
                    text="warning"
                    icon="fas fa-user-check"
                    title="Users quantity"
                    value="38"
                />
			</div>
        </>
    );
}

export default Metrics;
