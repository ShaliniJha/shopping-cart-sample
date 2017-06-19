import {connect} from 'react-redux';
import Cart from './Cart';
import {removeItemFromCart} from './actions';

const mapStateToProps = (state) => {
    return {
        cartData : state.cartData
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleRemoveCartItem : (index) => {
            dispatch(removeItemFromCart(index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);