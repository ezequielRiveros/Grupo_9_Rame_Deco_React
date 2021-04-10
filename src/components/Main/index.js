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

/* last product*/ 
fetch('http://localhost:3001/api/products/product/last')
.then(res => res.json())

.then(last => {
	this.setState({
		lastProductTitle:last.title,
		lastProductDescription:last.summary
	})
})
.catch((e) => {
	console.log(e);
})

/* last product*/



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
							{/* Last product comoponent */}
							<LastProduct 
							productTitle={this.state.lastProductTitle}
							productDescription={this.state.lastProductDescription}
							/>
							
							{/* /Last product comoponent */}
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
