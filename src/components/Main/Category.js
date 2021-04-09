import { element } from 'prop-types';
import React from 'react';

class Category extends React.Component{

    constructor () {
        super ();
        this.state = {
            infoCategories: []
        }
    }

    //traigo la api products y capturo el objeto countByCategory convirtiendolo en array
   
    componentDidMount () {
        fetch('http://localhost:3001/api/products')
			.then(res => res.json())
			.then(products => {
				this.setState({
					infoCategories: Object.keys(products.countByCategory)
				})
			})
			.catch((e) => {
				console.log(e);
			})

    }

    render () {
        
        let {infoCategories} = this.state;
        
        //uso .map para recorrer el array y renderizarlo en Main.js

       // console.log (infoCategories)
        return (
            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body">{infoCategories.map((infoCategory, j) => (<ul key={j} >{infoCategory}</ul>))}</div>
                </div>
            </div>
        );
     }
   
}



export default Category;



/*
  render () {

        
        
        let {infoCategories} = this.state;

        let prueba = infoCategories.map((infoCategory, j) => (<ul key={j} >{infoCategory}</ul>))
   

        //console.log (infoCategories)
        //console.log (prueba)
        return (
            <div className="col-lg-6 mb-4">
                <div className="card bg-info text-white shadow">
                    <div className="card-body">{prueba}</div>
                </div>
            </div>
        
        );
     }
   
}
*/