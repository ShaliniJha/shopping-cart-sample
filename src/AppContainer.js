import {connect} from 'react-redux';
import App from "./App";

const mapStateToProps = (state) => {
    return {
        gwData:state.gwData,
        cartCount : state.cartCount
    }
}





export default connect(mapStateToProps)(App)