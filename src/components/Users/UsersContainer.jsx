import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    unfollow,
    toggleIsFetching
} from '../../redux/users-reducer';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


export class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount); // разделил временно на 100, нужно доработать pagination
            });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }
    render() {
        return <>

            {this.props.isFetching ? <Preloader/> : null}

            < Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
            />
        </>
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

/*let mapDispatchToProps = (dispatch) => {  //это развёрнутая запись кода который указан ниже в connect()()
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching));
        }

    }
}*/

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setUsersTotalCount, toggleIsFetching
})(UsersContainer);