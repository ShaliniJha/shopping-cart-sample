import React, {Component} from 'react';
import ProductTile from './ProductTile'
import './GridWall.css';

class GridWall extends Component {

	constructor(props){
		super(props);
	}
	render() {
		let productTile = [];
		this.props.product.forEach(function(obj, index) {
			let product = <ProductTile item={obj}  key={index} handleAddToCart={this.props.onAddToCart}/>
			productTile.push(product);
		}.bind(this));
		return (
				<div>{productTile}</div>
			);
	}
}

export default GridWall;