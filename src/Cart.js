import React, {Component} from 'react';
import './Cart.css'
class Cart extends Component {
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(np,ns){
        console.log(ns);
        console.log(np);
        return true;
    }

    componentWillReceiveProps(newProps){
        console.log(newProps);

    }


    render() {
        let cartList = [];
        this.props.cartData.map((item, index) => {
            let cartItem = <div className="card mb-3 cart-item" key={index}>
                <img className="card-img-top" src={item.imageUrl} alt="Card image cap" height="200" width="200"/>
                <div className="card-block">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.description}</p>
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