import {connect} from 'react-redux';
import ProductTile from './ProductTile';
import {
    addItemToCart,
    removeItemFromCart,
    increaseCartCount,
    decreaseCartCount
  } from './actions'
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleAddToCart: (item) => {
      dispatch(addItemToCart(item));
    }
  }
}

export default connect(null,mapDispatchToProps)(ProductTile)