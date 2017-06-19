import {connect} from 'react-redux';
import CartComponent from './Cart';
import {removeItemFromCart} from './actions';

const mapStateToProps = (state) => {
    console.log("DATA", state.cartData);
    return {
        cartData: state.cartData
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleRemoveCartItem: (index) => {
            dispatch(removeItemFromCart(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);