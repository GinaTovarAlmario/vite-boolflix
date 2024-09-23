<script>
import MainMoviesListItem from './MainMoviesListItem.vue';
import MainSeriesListItem from './MainSeriesListItem.vue';
import { store } from '../store';
export default{
    data(){
        return{
            store,

        }
    },
    components:{
        MainMoviesListItem,
        MainSeriesListItem
    }
}
</script>
<template>
    <!-- store.items potrebbe essere null data l'impostazione che ho datp -->
    <ul class="searched-list" v-if=" store.items !== null ">
        <li v-for="(item,index) in store.items.results ":key="index">
            <p>TITOLO: {{ item.title }}</p>
            <p>TITOLO ORIGINALE: {{ item.original_title }}</p>
            <p>LINGUA: {{ item.original_language }}</p>
            <p>VOTO: {{ item.vote_average }}</p>
        </li>
    </ul>
    <MainMoviesListItem/>
    <MainSeriesListItem/>

</template>
<style lang="scss" scoped>
.searched-list{
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