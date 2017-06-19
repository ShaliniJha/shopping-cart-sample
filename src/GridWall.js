import React, {Component} from 'react';
import ProductTile from './ProductTile'
import './GridWall.css';
import ProductTileContainer from './ProductTileContainer';

class GridWall extends Component {

	constructor(props){
		super(props);
	}
	render() {
		let productTile = [];
		this.props.product.forEach(function(obj, index) {
			let product = <ProductTileContainer item={obj}  key={index}/>
			productTile.push(product);
		}.bind(this));
		return (
				<div>{productTile}</div>
			);
	}
}

export default GridWall;