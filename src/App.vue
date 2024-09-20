<script>
import HeaderSearchBar from './components/HeaderSearchBar.vue';
export default{
  data(){
    return{

    }
  },
  components:{
    HeaderSearchBar
  },
  methods:{
    searchElement(message){
      console.log(`${message}`);

    }

  }
}
</script>

<template>
  <HeaderSearchBar
    @searchItem="searchElement"/>
</template>

<style lang="scss">
@use "./style/general.scss"
</style>
