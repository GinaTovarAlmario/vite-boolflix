<script>
import MainElementsListItem from './MainElementsListItem.vue';
import { store } from '../store';
export default{
    data(){
        return{
            store,

        }
    },
    components:{
     MainElementsListItem
    }
}
</script>
<template>
    <!-- store.items potrebbe essere null data l'impostazione che ho datp -->
    <ul class="searched-list" v-if=" store.items !== null ">
        <MainElementsListItem/>
    </ul>
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
}

</style>