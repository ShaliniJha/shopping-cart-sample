import {connect} from 'react-redux';
import CartComponent from './Cart';
import {removeItemFromCart, removeAllItems} from './actions';

const mapStateToProps = (state) => {
    return {
        cartData: state.cartData
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleRemoveCartItem: (index) => {
            dispatch(removeItemFromCart(index))
        },
        handleRemoveAll: () => {
            dispatch(removeAllItems());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);