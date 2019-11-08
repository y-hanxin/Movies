import app from './app.js';
import router from './router.js';
import store from './store/index.js';

//该js主要负责启动VUE和启动时配置，所有界面交给组件APP来渲染

store.dispatch("loginUser/asyncLocal");
window.store = store;
// store.commit('loginUser/setIsLoading',true);
// console.log(store.state.loginUser.isLoading );

new Vue({
    template: '<app></app>',
    components: {
        app
    },
    el: ".wrapper",
    router,
    store
})
