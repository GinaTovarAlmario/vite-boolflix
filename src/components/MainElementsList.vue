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
    <!-- store.items potrebbe essere null data l'impostazione che ho dato -->
    <div class="row" v-if=" store.items !== null">
        <MainElementsListItem/>
    </div>
</template>
<style lang="scss" scoped>
.row{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 50px 0;

}
</style>