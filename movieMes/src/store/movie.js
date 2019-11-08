import movieServie from "../servies/movieServies.js";
export default {
    namespaced:true,
    state:{
        current: 1,
            total: 0,
            pageSize: 2,
            datas: [],
            isLoading: false,
    },
    mutations:{
        setState(state,newSate = {}){
            for (const prop in newSate) {
                state[prop] = newSate[prop]
            }
        }
    },
    actions:{
        fetch(context){
            context.commit("setState",{isLoading:true})
            movieServie.getMovies(context.state.current,context.state.pageSize).then(resp =>{
                context.commit("setState",resp)
                context.commit("setState",{isLoading:false})
            })
        },

    }
}