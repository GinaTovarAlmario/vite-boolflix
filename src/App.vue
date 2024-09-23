<script>
import HeaderSearchBar from './components/HeaderSearchBar.vue';
import AppMain from './components/AppMain.vue';
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
    HeaderSearchBar,
    AppMain,
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
  created(){
    this.getData('');
  }

}
</script>

<template>
  <HeaderSearchBar
    @searchItem="searchElement"/>
    <AppMain/>
</template>

<style lang="scss">
@use "./style/general.scss";

</style>
