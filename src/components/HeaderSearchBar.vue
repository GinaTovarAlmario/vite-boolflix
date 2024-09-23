<script>
import { store } from '../store';
export default{
    data(){
        return{
            store,

        }
    },
    methods:{
        showItem(information){
            this.$emit('searchItem',information);
        }
    }
}
</script>

<template>
    <div class="search">
        <input type="text" v-model="store.searchedItem">
        <button @click="showItem(store.searchedItem)">cerca film</button>
    </div>
</template>

<style lang="scss" scoped>
.search{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap :10px;
    padding-right: 30px;
    margin-top: 40px;
}
</style>