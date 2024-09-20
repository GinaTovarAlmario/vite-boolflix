<script>
import HeaderSearchBar from './components/HeaderSearchBar.vue';
import axios from 'axios';
import { store } from './store';
export default{
  data(){
    return{
      apiDbMovie:'https://api.themoviedb.org/3/search/movie',
      store,


    }
  },
  components:{
    HeaderSearchBar
  },
  methods:{
    searchElement(message){
      console.log(`${message}`);
      // invoco la chiamata all'api con la parola cercata nell'input
      this.getData(message);
    },
    // mi creo un metodo per fare chiamata all' API
    getData(givenWord){
      axios.get(this.apiDbMovie, {
        params: {
          api_key: 'f01478f834b029262478254394c4864a',
          query: givenWord,
        }
      })
      .then((response) => {
        console.log(response.data);
        store.items = response.data;
        
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  },

}
</script>

<template>
  <HeaderSearchBar
    @searchItem="searchElement"/>
    <main>
      <!-- store.items potrebbe essere null data l'impostazione che ho datp -->
      <ul class="movies" v-if=" store.items !== null ">
        <li v-for="(item,index) in store.items.results ":key="index">
              <p>TITOLO: {{ item.title }}</p>
              <p>TITOLO ORIGINALE: {{ item.original_title }}</p>
              <p>LINGUA: {{ item.original_language }}</p>
              <p>VOTO: {{ item.vote_average }}</p>
        </li>
      </ul>
    </main>
</template>

<style lang="scss">
@use "./style/general.scss";
  .movies{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
    gap: 5px;
    padding: 50px 0;

    li{
      flex-basis: calc(100% / 6 - 5px);
      padding: 10px 10px;

      p{
        margin-bottom: 5px;
      }
    }


  }

</style>
