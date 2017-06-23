import {connect} from 'react-redux';
import Header from './Header';
import {fetchCartList} from './actions';

const mapStateToProps = (state) => {
    return {
        cartCount : state.cartCount
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchCartCount : () =>{
            dispatch(fetchCartList(dispatch))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);