import Movie from '../components/movie.js';
import MovieDetail from '../servies/movieServies.js'
const template =`
    <Movie v-if="movie" :data="movie"/>

`;

export default{
  template,
  components:{
   Movie
  },
  data() {
    return {
      movie: null
    }
  },
  mounted() {
      const id = this.$route.params.id;
      MovieDetail.getMovie(id).then(resp =>{
        this.movie = resp;
      })
  },
}