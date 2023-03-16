export default{
    regesterUser({commit},data){
        const newUser={
            id:new Date().toISOString,
            ...data
        }
        commit('regesterUser',newUser)
    },
    loginUser({commit},userDate){
        commit('loginUser',userDate)
    },
    logoutUser({commit}){
        commit('logoutUser')
    }
}