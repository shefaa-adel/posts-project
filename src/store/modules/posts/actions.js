export default {
    getAllPosts({commit}){
        commit('getAllPosts')
    }, getAllComments({commit}){
        commit('getAllComments')
    },
    saveComment({commit},newComment){
        commit('saveComment',{
            id:new Date().toDateString,
            ...newComment
        })

    }
}