<script>
import { store } from '../store';
export default{
    data(){
        return{
            store,
            imgUrl:'https://image.tmdb.org/t/p/w342/',

        }
    },
   
}
</script>
<template>
    <div class="col" v-for="(item,index) in store.items.results" :key="index">
        <div class="card">
            <img :src="this.imgUrl + item.poster_path" :alt="item.title || item.name">
            <p>Titolo: 
                {{ item.title || item.name}}
            </p>
            <p>Titolo originale:
                {{ item.original_title || item.original_name}}
            </p>
            <p>lingua originale:
                {{ item.original_language }}
            </p>
            <p>Voto: {{ item.vote_average }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .col{
        flex-basis: calc(100% / 6 - 10px);

        .card{
            height: 500px;
            overflow: hidden;
            width: 100%;
            border: 1px solid red;
            font-size: 16px;
            margin-bottom: 30px;
            img{
                width: 100%;
                height: auto;
            }
            
            p{
                padding: 5px 10px;
            }
        }

    }
</style>