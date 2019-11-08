export default {
     async login(loginId,loginPw){
          return new Promise(reslove => {
           if(loginId == 'admin' && loginPw == "123123"){
                     reslove ({
                          loginId,
                          name:"超级管理员"
                     })
               }else{
                    reslove(null)
               }
          })
     }
}