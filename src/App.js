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

	}

  	render() {			
	    return (
	      <div>
					
	        <Header cartitem= {this.props.cartCount} />
	        <GridWall product = {this.props.gwData}/>
	      </div>
	    );
	}
}

export default App;
