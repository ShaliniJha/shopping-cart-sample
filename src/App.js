import React, { Component } from 'react';
import HeaderContainer from './HeaderContainer'
import CartData from './resources/cart.json'
import GridWallContainer from './GridWallContainer';


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
					
	        <HeaderContainer/>
	        <GridWallContainer/>
	      </div>
	    );
	}
}

export default App;
