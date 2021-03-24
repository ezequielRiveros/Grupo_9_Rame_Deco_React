import React from 'react';
import Link from './Link';
import {datos} from '../../helpers';

const SideBar = () => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<i className="fas fa-chart-line"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>

			<hr className="sidebar-divider my-0" />

			<Link 
				classIcon="fas fa-fw fa-tachometer-alt"
				title="Dashboard"
				active="active"
			/>

			<hr className="sidebar-divider" />

			<div className="sidebar-heading">Actions</div>
			
			{/* Listado de links */}
			{
				datos.map((link) => (
					<Link 
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

export default SideBar;
