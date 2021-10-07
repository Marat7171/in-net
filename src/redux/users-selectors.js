import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

// Суперселектор первым параметром принимает примитивный селектор и
// с помощью его результата выполняет свой код (если не использовать ресилект, то будет бесконечный рендер)
// export const getUsersSuperSelector = createSelector(getUsers, getIsFetching,
//     (users, isFetching) => {
//     return users.filter(u => true);
// })

export const getUsers = createSelector(getUsersSelector,
    (users) => {
        return users.filter(u => true);
    })

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}