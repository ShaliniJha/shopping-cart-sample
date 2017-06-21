import React, {Component} from 'react';
import './GridWall.css';
import ProductTileContainer from './ProductTileContainer';

class GridWall extends Component {

	constructor(props){
		super(props);
	}

	componentWillMount () {
		this.props.fetchProductList();
	}

	render() {
		let productTile = [];
		this.props.gwData.forEach(function(obj, index) {
			let product = <ProductTileContainer item={obj}  key={index}/>
			productTile.push(product);
		}.bind(this));
		return (
				<div>{productTile}</div>
			);
	}
}

export default GridWall;