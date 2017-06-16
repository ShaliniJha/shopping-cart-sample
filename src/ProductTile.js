import React, {Component} from 'react';
import './ProductTile.css';

class ProductTile extends Component {

	addToCart() {

	}
	render() {
		return(
			<div className="card product-tile" key={this.props.item.name}>
			  	<img className="card-img-top" src={this.props.item.imageUrl} alt={this.props.item.name} />
			  	<div className="card-block">
				    <h4 className="card-title">{this.props.item.name}</h4>
				    <p className="card-text">{this.props.item.price}</p>
				</div>
				<button class="btn btn-primary"> Add to Cart </button>
			</div>
			);
	}
}

export default ProductTile;