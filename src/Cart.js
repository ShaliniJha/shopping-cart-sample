import React, {Component} from 'react';
import './Cart.css'
class Cart extends Component {
    constructor(props){
        super(props);
    }

    render() {
        let cartList = [];
        this.props.cartData.map((item, index) => {
            let cartItem = <div class="card mb-3 cart-item" key={index}>
                <img class="card-img-top" src={item.imageUrl} alt="Card image cap" height="200" width="200"/>
                <div class="card-block">
                    <h4 class="card-title">{item.name}</h4>
                    <p class="card-text">{item.description}</p>
                    <button className="btn btn-primary" onClick={() => {this.props.handleRemoveCartItem(index)}}>Remove</button>
                </div>
            </div>

            cartList.push(cartItem);
        })
        return(
            <div>{cartList}</div>
        );
    }
}
export default Cart;