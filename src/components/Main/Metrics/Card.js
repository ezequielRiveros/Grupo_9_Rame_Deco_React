import React from 'react';

const Card = ({border, text, icon, title, value}) => {

    let classBorder = `card border-left-${border ?? ""} shadow h-100 py-2`;
    let classText = `text-xs font-weight-bold text-${text ?? ""} text-uppercase mb-1`;
    let classIcon = `${icon} fa-2x text-gray-300`

    return (
        <div className="col-md-4 mb-4">
			<div className={classBorder}>
				<div className="card-body">
					<div className="row no-gutters align-items-center">
						<div className="col mr-2">
							<div className={classText}>{title}</div>
							<div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
						</div>
						<div className="col-auto">
							<i className={classIcon}></i>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
}

export default Card;
