import Pages from "../components/pages.js";
import MovieList from '../components/movieList.js';
import Load from "../components/loading.js";
//v-mdule="current"
const template = `
    <div>
        <MovieList :movies="datas"/>
        <Pages 
        :current="current"
        @input="handlePageChange"
        :total="total"
        :pageSize="pageSize"
        @change="current=$event"
        />
        <Load :show="isLoading" />
    </div>
`;

export default {

    template,
    mounted() {
            this.$store.dispatch("movie/fetch")
    },
    computed: {
        ...Vuex.mapState("movie",["pageSize","datas","isLoading","total"]),
        current:{
            get(){
                return this.$store.state.movie.current;
            },
            set(newPage){
                this.$store.commit("movie/setState",{current:newPage}),
                this.$store.dispatch("movie/fetch")
            }
        }
    
    },
    methods: {
        handlePageChange(newPage) {
            this.$store.commit("movie/setState",{current:newPage}),
            this.$store.dispatch("movie/fetch")
        }
    },
    components: {
        MovieList,
        Pages,
        Load
    }
}