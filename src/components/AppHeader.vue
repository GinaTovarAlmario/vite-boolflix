<script>
import HeaderSearchBar from './HeaderSearchBar.vue';
export default{
    data(){
        return{
            navbarList:[
                {label:'Home',link:'#'},
                {label:'Serie Tv',link:'#'},
                {label:'Film',link:'#'},
                {label:'Originali',link:'#'},
                {label:'Aggiunti di recente',link:'#'},
                {label:'La mia lista',link:'#'}
            ],
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
        <div class="navbar-logo">
            <div class="title">
            BOOLFIX
            </div>
            <nav>
                <ul>
                    <li v-for="(navbarItem,index) in navbarList" :key="index">
                        <a :href="navbarItem.link">{{ navbarItem.label }}</a>
                    </li>
                </ul>
            </nav>
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

        .navbar-logo{
            display: flex;
            align-items: center;
            gap: 30px;
            .title{
                color: red;
                font-size: 2rem;
            }
            nav{

                ul{
                    display: flex;
                    align-items: center;
                    gap: 20px;

                }
            }
        }
    }
</style>