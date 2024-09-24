<script>
import { store } from '../store';
export default{
    data(){
        return{
            store,
            imgUrl:'https://image.tmdb.org/t/p/w342/',
            flagLanguage:{                
                de:'de.gif',
                es:'es.gif',
                ja:'ja.gif',
                ko:'ko.gif',
                pl:'pl.gif',
                pt:'pt.gif',
                ru:'ru.gif',
                tr:'tr.gif',
                en:'en.gif',
                zh:'zh.gif',
            }
            

        }
    },
    methods:{
        // mi serve un funzione che mi arrotondi il numero del voto ricevuto
        getNumberStarVote(vote){
            // se non ho il voto gli fisso il voto a zero
            if( typeof vote !== 'number'){
                vote = 0;
            }
            let result = vote / 2 ;
            return Math.ceil(result);
        },
        getPathFlag(img){
            const path = new URL('../assets/img/' + img + '.gif',import.meta.url).href;
            return path;

        }
        
    }
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
                <img class="flag" :src="getPathFlag(item.original_language)" alt="..">
            </p>
            <div class="stars-wrapper">
                <p>voto:
                    <i class="fa-solid fa-star" v-for="n in getNumberStarVote(item.vote_average)" :key="n"></i>
                </p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .col{
        flex-basis: calc(100% / 6 - 10px);

        .card{
            height: 600px;
            overflow: hidden;
            width: 100%;
            border: 1px solid white;
            font-size: 16px;
            margin-bottom: 30px;
            img{
                width: 100%;
                height: auto;
            }
            
            p{
                padding: 5px 10px;
                .flag{
                    height: 20px;
                    width: 30px;
                    margin: 10px 5px;
                }
                .stars-wrapper{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  
                }
            }
        
        }

    }
</style>