import Movie from './movie.js';
const template = `
    <div class="data-container">
        <button @click="callBackPage">返回首页</button>
        <Movie v-for="item in movies" :key="item._id" :data="item" />
    </div>
`;

export default {
    template,
    methods:{
        callBackPage(){
            this.$router.push("/");
        }
    },
    components:{
        Movie
    },
    props:{
        movies:{
            type:Array,
            default:() => []
        }
    },
}