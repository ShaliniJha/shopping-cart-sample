import {connect} from 'react-redux';
import ProductTile from './ProductTile';
import {
    addItemToCart
  } from './actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleAddToCart: (item) => {
      dispatch(addItemToCart(dispatch, item));
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductTile)