import React, {Component} from 'react';
import Card from './Card';
import Category from './Category';
import Footer from './Footer';
import Table from './Table';
import Header from './Header';
import Metrics from './Metrics';
import LastProduct from './LastProduct';


class Main extends Component {
	constructor () {
		super();
		this.state = {
			total: 0,
			data: [],
			count: 0,
			categ: 0,
			lastProduct:{}
			
		}
	}

	componentDidMount () {
		console.log("Me acabo de renderizar");
		fetch('http://localhost:3001/api/products')
			.then(res => res.json())
			.then(products => {
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


		fetch('http://localhost:3001/api/products/last')
			.then(res => res.json())
			.then(last => {
				this.setState({
					lastProduct: last
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
						<div className="middle-card">
							{/* Last product component */}
							<Card
								title = "Detalle de último producto"
							>
								<LastProduct
									lastProduct={this.state.lastProduct}
									/>
															
							</Card>
						
							{/* /Last product component */}
						
							<Card 
								title="Cantidad de productos por categorías" 
							>
								
									<div className= "middle-card list-card"> 
									<Category />
									 </div>
								
							</Card>

						</div>
						</div>
						<Table 
							data={this.state.data}
						/>
					</div>
	
				<Footer />
	
		</div>
		);} 

}

export default Main;
