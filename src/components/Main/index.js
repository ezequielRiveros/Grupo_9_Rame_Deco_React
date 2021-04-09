import React, {Component} from 'react';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';
import Table from './Table';
import Header from './Header';
import Metrics from './Metrics';

/* Assets */
import dummy from './assets/images/product_dummy.svg';


class Main extends Component {
	constructor () {
		super();
		this.state = {
			total: 0,
			data: [],
			count: 0,
			categ: 0,
			//infoCategories: []
		}
	}

	componentDidMount () {
		console.log("Me acabo de renderizar");
		fetch('http://localhost:3001/api/products')
			.then(res => res.json())
			.then(products => {
				//console.log(this.state);
				this.setState({
					total: products.count,
					data: products.products,
					categ: Object.keys(products.countByCategory).length, 
				
				})
			})
			.catch((e) => {
				console.log(e);
			})

		fetch('http://localhost:3001/api/users')
			.then(res => res.json())
			.then(users => {
				this.setState({
					count: users.count,
					
				})
			})
			.catch((e) => {
				console.log(e);
			})
	}
	componentDidUpdate () {
		console.log('Me acabo de actualizar');
	}




    render () {
		return (
			<div id="content-wrapper" className="d-flex flex-column">
	
				<div id="content">
	
					<Header />

					<div className="container-fluid">
						<Metrics 
							title = "Métricas del sitio"
							total={this.state.total}
							count ={this.state.count}
							categ ={this.state.categ}
						/>
						<div className="row">
							{/* Cards - prueba de childrens */}
							
							<Card
								title="Detalles de último producto"
								data = {this.state.data}

							>
								<div className="text-center">
									<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={dummy} alt="product_image" />
								</div>
								<p>mjgg</p>
								<a target="_blank" rel="nofollow" href="/">Visualizar detalle de producto</a>
							</Card>
	
							<Card 
								title="Categorías"
							>
								<div className="row">
									<Category />
									

								</div>
							</Card>
							
						</div>
						<Table 
							data={this.state.data}
						/>
					</div>
				</div>
	
				<Footer />
	
			</div>
			
		);
	}
}

export default Main;
