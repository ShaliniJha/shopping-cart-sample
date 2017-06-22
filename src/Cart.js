import React, {Component} from 'react';

class CartComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount (){
        this.props.fetchCartList();
    }

    render() {
        let cartList = [];
        this.props.cartData.map((item, index) => {
            let cartItem = <div className="card mb-3 cart-item" key={index}>
                <img className="card-img-top" src={item.imageUrl} alt="Card image cap" height="200" width="200"/>
                <div className="card-block">
                    <h4 className="card-title">NAME:{item.name}</h4>
                    <p className="card-text">{item.description}</p>
                    <button className="btn btn-primary" onClick={() => {
                        this.props.handleRemoveCartItem(item._id)
                    }}>Remove
                    </button>
                </div>
            </div>

            cartList.push(cartItem);
        });

        return (
            <div>
                {cartList.length ? <button className="btn btn-primary" onClick={() => {
                            this.props.handleRemoveAll()
                        }}>Remove All
                        </button>:""
                }
                <div>{cartList.length ? cartList : `Nothing to see here pal!! `}</div>
            </div>
        );
    }
}
export default CartComponent;