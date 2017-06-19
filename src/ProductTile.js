import React, {Component} from 'react';
import './ProductTile.css';
import PropTypes from 'prop-types';

const ProductTile = ({item, handleAddToCart}) => {
	return(
		<div className="card product-tile">
			<img className="card-img-top" src={item.imageUrl} alt={item.name} />
			<div className="card-block">
				<h4 className="card-title">{item.name}</h4>
				{
					item.discountPrice?<p className="card-text">Discounted Price: {item.discountPrice}</p>
					:<p className="card-text">Price: {item.price}</p>
					
				}
				
			</div>
			<button className="btn btn-primary" onClick={() => {handleAddToCart(item)}}> 
				{
					false?`Added`:`Add to Cart`
				}
				</button>
		</div>
	);
}


ProductTile.PropTypes = {
	item : PropTypes.node.isRequired,
	handleAddToCart: PropTypes.func.isRequired
}
export default ProductTile;