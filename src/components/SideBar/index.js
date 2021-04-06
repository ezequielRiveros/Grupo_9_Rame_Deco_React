import React from 'react';
import Link from './Link';
//import {datos} from '../../helpers';

class SideBar extends React.Component {

	constructor () {
		super();
		this.state = {
			categories: []
		}
	}

	componentDidMount () {
		console.log('Me acabo de renderizar');
		fetch('http://localhost:3001/api/connection')
			.then(res => res.json())
			.then(({categories}) => {
				this.setState({categories})
			})
			.catch((e) => {
				console.log(e);
			})
	}

	render (){
		let {categories} = this.state;
		return (
			<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
	
				<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
					<div className="sidebar-brand-icon">
						<i className="fas fa-chart-line"></i>
					</div>
					<div className="sidebar-brand-text mx-3">Admin <br></br> RAMÉ DECO</div>
				</a>
	
				<hr className="sidebar-divider my-0" />
	
				<Link 
					classIcon="fas fa-fw fa-tachometer-alt"
					title="Dashboard"
					active="active"
				/>
	
				<hr className="sidebar-divider" />
	
				<div className="sidebar-heading">Ir a la app</div>
				
				{/* Listado de links */}
				{
					categories.map((link) => (
						<Link 
							url={link.url}
							key={link.title} 
							classIcon={link.classIcon}
							title={link.title}
							active={link.active}
						/>
					))
				}
					
	
				<hr className="sidebar-divider d-none d-md-block" />
			</ul>
		);
	}
    
}

export default SideBar;
