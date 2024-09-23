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
    <HeaderSearchBar
    @searchItem="showItemSearchBar"
    />
</template>
<style lang="scss" scoped>
</style>