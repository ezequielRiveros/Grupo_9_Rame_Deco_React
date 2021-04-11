import { element } from 'prop-types';
import React from 'react';

class Category extends React.Component{

    constructor () {
        super ();
        this.state = {
            infoCategories: [],
            categoryValue: []
        }
    }

    //traigo la api products y capturo el objeto countByCategory convirtiendolo en array
   
    componentDidMount () {
        fetch('http://localhost:3001/api/products')
			.then(res => res.json())
			.then(products => {
				this.setState({
					infoCategories: Object.keys(products.countByCategory),
                    categoryValue: Object.values(products.countByCategory)
				})
			})
			.catch((e) => {
				console.log(e);
			})

    }

    render () {
        
        let {infoCategories} = this.state;
        let {categoryValue} = this.state;
        
        //uso .map para recorrer el array y renderizarlo en Main.js

       // console.log (infoCategories)
        return (
            <div className="col-lg-8 mb-4 middle-card">
                <div className="card bg-info text-white shadow">
                    <div className="card-body">{infoCategories.map((infoCategory, j) => (<ul key={j} >{infoCategory}</ul>))}</div>
                </div>
                <div className="card bg-info text-white shadow">
                    <div className="card-body">{categoryValue.map((info, i) => (<ul key={i} >{info}</ul>))}</div>
                </div>
            </div>
                        
        );
     }
   
}



export default Category;


