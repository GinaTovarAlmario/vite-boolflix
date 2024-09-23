<script>
import { store } from '../store';
export default{
    data(){
        return{
            store,

        }
    }
}
</script>
<template>
    <li v-for="(item,index) in store.items.results ":key="index">
        <p>TITOLO: {{ item.title || item.name}}</p>
        <p>TITOLO ORIGINALE: {{ item.original_title || item.original_name}}</p>
        <p>ORIGINAL LANGUAGE: {{ item.original_language }}</p>
        <p>VOTE: {{ item.vote_average }}</p>
    </li>
</template>
<style lang="scss" scoped>
    li{
      flex-basis: calc(100% / 6 - 5px);
      padding: 10px 10px;

      p{
        margin-bottom: 5px;
      }
    }

</style>