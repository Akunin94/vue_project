import userProfileApi from '@/api/userProfile'

const state = {
    data: null,
    isLoading: false,
    error: null,
    isFollowLoading: false,
}

export const mutationTypes = {
    getUserProfileStart: '[userProfile] getUserProfileStart',
    getUserProfileSuccess: '[userProfile] getUserProfileSuccess',
    getUserProfileFailure: '[userProfile] getUserProfileFailure',

    followUserStart: '[userProfile] followUserStart',
    followUserSuccess: '[userProfile] followUserSuccess',
    followUserFailure: '[userProfile] followUserFailure',

    unfollowUserStart: '[userProfile] unfollowUserStart',
    unfollowUserSuccess: '[userProfile] unfollowUserSuccess',
    unfollowUserFailure: '[userProfile] unfollowUserFailure',
}
export const actionTypes = {
    getUserProfile: '[userProfile] getUserProfile',
    followUser: '[userProfile] followUser',
    unfollowUser: '[userProfile] unfollowUser',
}

const mutations = {
    [mutationTypes.getUserProfileStart](state) {
        state.isLoading = true
        state.data = null
    },
    [mutationTypes.getUserProfileSuccess](state, payload) {
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getUserProfileFailure](state) {
        state.isLoading = false
    },

    [mutationTypes.followUserStart](state) {
        state.isFollowLoading = true
    },
    [mutationTypes.followUserSuccess](state, payload) {
        state.isFollowLoading = false
        state.data = payload
    },
    [mutationTypes.followUserFailure](state, payload) {
        state.isFollowLoading = false
        state.data = payload
    },

    [mutationTypes.unfollowUserStart](state) {
        state.isFollowLoading = true
    },
    [mutationTypes.unfollowUserSuccess](state, payload) {
        state.isFollowLoading = false
        state.data = payload
    },
    [mutationTypes.unfollowUserFailure](state, payload) {
        state.isFollowLoading = false
        state.data = payload
    },
}

const actions = {
    [actionTypes.getUserProfile](context, {slug}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getUserProfileStart)
            userProfileApi
                .getUserProfile(slug)
                .then(userProfile => {
                    context.commit(mutationTypes.getUserProfileSuccess, userProfile)
                    resolve(userProfile)
                })
                .catch(() => {
                    context.commit(mutationTypes.getUserProfileFailure)
                })
        })
    },

    [actionTypes.followUser](context, {slug}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.followUserStart)
            userProfileApi
                .followUser(slug)
                .then(userProfile => {
                    context.commit(mutationTypes.followUserSuccess, userProfile)
                    resolve(userProfile)
                })
                .catch(() => {
                    context.commit(mutationTypes.followUserFailure)
                })
        })
    },

    [actionTypes.unfollowUser](context, {slug}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.unfollowUserStart)
            userProfileApi
                .unfollowUser(slug)
                .then(userProfile => {
                    context.commit(mutationTypes.unfollowUserSuccess, userProfile)
                    resolve(userProfile)
                })
                .catch(() => {
                    context.commit(mutationTypes.unfollowUserFailure)
                })
        })
    },
}

export default {
    state, 
    mutations,
    actions
}