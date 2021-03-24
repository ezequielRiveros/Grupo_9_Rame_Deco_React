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
			data: []
		}
	}

	componentDidMount () {
		console.log('Me acabo de renderizar');
		fetch('http://localhost:3001/api/all')
			.then(res => res.json())
			.then(notas => {
				this.setState({
					total: notas.total,
					data: notas.data
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
							total={this.state.total}

						/>
						<div className="row">
							{/* Cards - prueba de childrens */}
							
							<Card
								title="Detalles de ultimo producto"
							>
								<div className="text-center">
									<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={dummy} alt="dummy" />
								</div>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
								<a target="_blank" rel="nofollow" href="/">View product detail</a>
							</Card>
	
							<Card 
								title="Categorias"
							>
								<div className="row">
									<Category />
									<Category />
									<Category />
									<Category />
									<Category />
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
