import React, { Component } from 'react';
import Header from './Header'
import CartData from './resources/cart.json'
import GridWall from './GridWall';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cartItem : []
		};

		this.handleAddToCart = this.handleAddToCart.bind(this)
	}

	handleAddToCart (item) {
		let a = this.state.cartItem;
		a.push(item);
		this.setState({
			cartItem : a
		});

	}
  	render() {
	    return (
	      <div>
	        <Header cartitem= {this.state.cartItem.length} />
	        <GridWall product = {CartData} onAddToCart={this.handleAddToCart}/>
	      </div>
	    );
	}
}

export default App;
