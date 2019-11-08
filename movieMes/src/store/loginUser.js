import loginServies from '../servies/loginServies.js';
export default {
        namespaced:true,//开启命名空间
        state:{
             ldata:null,
             isLoading:false
        },
         mutations:{
            setIsLoading(state, payload){
                state.isLoading = payload;
            },
            setUser(state, userObj){
                state.data = userObj;
            }
         },
         actions:{
             async login(context,payload){
                //必须使用mutations更改状态
                    context.commit("setIsLoading",true);
               const resp = await loginServies.login(payload.loginId, payload.loginPw)
                    if(resp){
                             context.commit("setUser", resp);
                                localStorage.setItem("loginUser",JSON.stringify(resp));
                                return true;
                            }
                     context.commit("setIsLoading",false);
                     return false;
            },
            loginOut(context){
                context.commit("setUser",null);
                localStorage.removeItem("loginUser");
            },
            asyncLocal(context){
                const local = localStorage.getItem("loginUser");
                if(local){
                    const user = JSON.parse(local);
                    context.commit("setUser",user);
                }
            }
         }  
 }
