import Home from './pages/index.js';
import Movie from './pages/movies.js';
import MovieInfo from "./pages/movieInfo.js";
import Login from './pages/loginPage.js'
import store from './store/index.js';
//路由配置
const router = new VueRouter({
    routes: [
        { path: "/", component: Home,meta:{
            loginR:true
        }},
        { path: "/movie", component: Movie,meta:{
            loginR:true
        }},
        {path:"/movie/:id",component: MovieInfo,meta:{
            loginR:true
        }},
        {path:"/login", component: Login}
    ],
    mode: "hash"
})
router.beforeEach((to, from, next) => {
    if(to.meta && to.meta.loginR){
        if(store.state.loginUser.data){
            next()
        }else{
            next('/login')
        }
    }else{
        next();
    }
})

export default router;