<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import { store } from './store';
export default{
  data(){
    return{
      apiDbUrl:'https://api.themoviedb.org/3/search/multi',
      store,

    }
  },
  components:{
    AppHeader,
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
      axios.get(this.apiDbUrl, {
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
  <AppHeader
    @searchItemSearchBar="searchElement"
  />
  <AppMain/>
</template>

<style lang="scss">
@use "./style/general.scss";

</style>
