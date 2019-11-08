import Load from '../components/loading.js';
const template =`

            <div class="center">
    
            <p>
                <label>帐号：</label>
                <input type="text" v-model="loginId"/>
            </p>
            <P>
                <label>密码：</label>
                <input type="text" v-model="loginPw"/>
             </p>
                <p>
                <button @click="hanldLogin">登陆</button>
             </p>
        </div>
`;

export default {
    template,
    // components:{
    //     Load
    // },
    data() {
        return {
            loginId:"",
            loginPw:""
        }
    },
    // computed: {
    //     isLoading(){
    //         console.log(this.$store.state.loginUser.isLoading);
    //         return this.$store.state.loginUser.isLoading;
    //     }
    // },
    methods: {
        async hanldLogin(){
            const result = await this.$store.dispatch("loginUser/login",{
                loginId:this.loginId,
                loginPw:this.loginPw
            })
            // console.log(result);
            if(result){
                this.$router.push("/");
            }else{
                alert("密码错误")
            }
        }
    }
}