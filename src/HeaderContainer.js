import {connect} from 'react-redux';
import Header from './Header'

const mapStateToProps = (state) => {
    return {
        cartCount : state.cartCount
    };
};

export default connect(mapStateToProps)(Header);