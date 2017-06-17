import React, {Component} from 'react';
import './ProductTile.css';

class ProductTile extends Component {

	constructor(props){
		super(props);
		this.state = {
			itemAdded : false
		};
		this.addToCart = this.addToCart.bind(this);
	}

	addToCart() {
		this.setState({itemAdded : true});
		this.props.handleAddToCart(this.props.item);

	}
	render() {

		return(
			<div className="card product-tile">
			  	<img className="card-img-top" src={this.props.item.imageUrl} alt={this.props.item.name} />
			  	<div className="card-block">
				    <h4 className="card-title">{this.props.item.name}</h4>
					{
						this.props.item.discountPrice?<p className="card-text">Discounted Price: {this.props.item.discountPrice}</p>
						:<p className="card-text">Price: {this.props.item.price}</p>
						
					}
				    
				</div>
				<button className="btn btn-primary" onClick={this.addToCart}> 
					{
						this.state.itemAdded?`Added`:`Add to Cart`
					}
				 </button>
			</div>
			);
	}
}

export default ProductTile;