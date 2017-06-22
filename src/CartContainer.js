import {connect} from 'react-redux';
import CartComponent from './Cart';
import {removeItemFromCart, removeAllItems, fetchCartList} from './actions';

const mapStateToProps = (state) => {
    return {
        cartData: state.cartData
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleRemoveCartItem: (id) => {
            dispatch(removeItemFromCart(dispatch, id))
        },
        handleRemoveAll: () => {
            dispatch(removeAllItems(dispatch));
        },
        fetchCartList : () => {
            dispatch(fetchCartList(dispatch))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);