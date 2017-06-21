import {connect} from 'react-redux';
import GridWall from './GridWall';
import {fetchProductList} from './actions';

const mapStateToProps = (state) => {
    return {
        gwData: state.gwData
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProductList : () => {
            dispatch(fetchProductList(dispatch));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GridWall);