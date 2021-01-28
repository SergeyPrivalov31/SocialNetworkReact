import React from 'react';
import HeaderRight from "./HeaderRight";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


class HeaderRightContainer extends React.Component {

    render() {
        return <div>
            <HeaderRight {...this.props}/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {logout})(HeaderRightContainer)