import {connect} from 'react-redux';
import App from "./App";

const mapStateToProps = (state) => {
    return {
    gwData:state.gwData
    }
}





export default connect(mapStateToProps)(App)