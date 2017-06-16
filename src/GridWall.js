import React, {Component} from 'react';
import ProductTile from './ProductTile'
import './GridWall.css';

class GridWall extends Component {
	render() {
		let productTile = [];
		this.props.product.forEach(function(obj, index) {
			let product = <ProductTile item={obj} handleAddToCart={this.props.onAddToCart}/>
			productTile.push(product);
		});
		return (
				<div>{productTile}</div>
			);
	}
}

export default GridWall;