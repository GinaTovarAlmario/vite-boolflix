<script>
export default{
    data(){
        return{
            searchedItem:'',

        }
    },
    methods:{
        showItem(information){
            this.$emit('searchItem',information)
        }
    }
}
</script>

<template>
    <div class="search">
        <input type="text" v-model="searchedItem">
        <button @click="showItem(searchedItem)">cerca film</button>
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