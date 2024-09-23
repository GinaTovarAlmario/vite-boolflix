<script>
import HeaderSearchBar from './HeaderSearchBar.vue';
export default{
    data(){
        return{

        }

    },
    components:{
        HeaderSearchBar,
    },
    methods:{
        showItemSearchBar(infoSearchBar){
            this.$emit('searchItemSearchBar',infoSearchBar);
        }

    }
}
</script>
<template>
    <header>
        <div class="title">
        BOOLFIX
        </div>
        <HeaderSearchBar
        @searchItem="showItemSearchBar"
        />
    </header>
</template>
<style lang="scss" scoped>
    header{
        height: 100px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 20px;

        .title{
            color: red;
            font-size: 2rem;
        }
    }
</style>