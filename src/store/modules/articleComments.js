import articleCommentsApi from '@/api/articleComments'

const state = {
    comments: null,
    newComment: null,
    isLoading: false,
    error: null,
}

export const mutationTypes = {
    getCommentsStart: '[articleComments] getCommentsStart',
    getCommentsSuccess: '[articleComments] getCommentsSuccess',
    getCommentsFailure: '[articleComments] getCommentsFailure',

    addCommentStart: '[articleComments] addCommentStart',
    addCommentSuccess: '[articleComments] addCommentSuccess',
    addCommentFailure: '[articleComments] addCommentFailure',

    deleteCommentStart: '[articleComments] deleteCommentStart',
    deleteCommentSuccess: '[articleComments] deleteCommentSuccess',
    deleteCommentFailure: '[articleComments] deleteCommentFailure',
}
export const actionTypes = {
    getComments: '[articleComments] getComments',
    addComment: '[articleComments] addComment',
    deleteComment: '[articleComments] deleteComment',
}

const mutations = {
    [mutationTypes.getCommentsStart](state) {
        state.comments = null
        state.error = null
    },
    [mutationTypes.getCommentsSuccess](state, payload) {
        state.comments = payload
    },
    [mutationTypes.getCommentsFailure]() {},

    [mutationTypes.addCommentStart](state) {
        state.isLoading = true
    },
    [mutationTypes.addCommentSuccess](state, payload) {
        state.isLoading = false
        state.comments.push(payload)
    },
    [mutationTypes.addCommentFailure](state, payload) {
        state.isLoading = false
        state.error = payload
    },

    [mutationTypes.deleteCommentStart]() {},
    [mutationTypes.deleteCommentSuccess](state, payload) {
        console.log(state.comments, typeof comments)
        state.comments = state.comments.filter((item) => {
            // item.id != payload
            const realItem = JSON.parse(JSON.stringify(item))
            console.log(realItem.id, payload)
            return realItem.id != payload
        })
        console.log(payload)
    },
    [mutationTypes.deleteCommentFailure](payload) {
        state.error = payload
    },
}

const actions = {
    [actionTypes.getComments](context, {slug}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getCommentsStart, slug)
            articleCommentsApi
                .getComments(slug)
                .then(comments => {
                    context.commit(mutationTypes.getCommentsSuccess, comments)
                    resolve(comments)
                })
                .catch(() => {
                    context.commit(mutationTypes.getCommentsFailure)
                })
        })
    },
    [actionTypes.addComment](context, {slug, commentInput}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.addCommentStart, slug)
            articleCommentsApi
                .addComment(slug, commentInput)
                .then(newComment => {
                    context.commit(mutationTypes.addCommentSuccess, newComment)
                    resolve(newComment)
                })
                .catch(() => {
                    context.commit(mutationTypes.addCommentFailure)
                })
        })
    },
    [actionTypes.deleteComment](context, {slug, commentId}) {
        return new Promise(resolve => {
            context.commit(mutationTypes.deleteCommentStart, slug)
            articleCommentsApi
                .deleteComment(slug, commentId)
                .then(() => {
                    context.commit(mutationTypes.deleteCommentSuccess, commentId)
                    resolve()
                })
                .catch(() => {
                    context.commit(mutationTypes.deleteCommentFailure)
                })
        })
    }
}

export default {
    state, 
    mutations,
    actions
}