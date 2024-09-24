<script>
import { store } from '../store';
export default{
    data(){
        return{
            store,
            imgUrlPoster:'https://image.tmdb.org/t/p/w342/',
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
                it:'it.gif',
                fr:'fr.gif',
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
            <div class="card-img">
                <img :src="this.imgUrlPoster + item.poster_path " :alt="item.title || item.name">
            </div>
            <div class="card-info">

                <h4>Titolo: </h4>
                <p>{{ item.title || item.name}}</p>

                <h4>Titolo originale:</h4>
                <p>{{ item.original_title || item.original_name}}</p> 
            
                <h4>lingua originale:</h4>
                <!-- <div class="flag"> -->
                    <img class="flag" :src="getPathFlag(item.original_language)" alt="..">
                <!-- </div> -->

                <div class="stars-wrapper">
                    <h4>voto:</h4>
                    <span>
                        <i class="fa-solid fa-star" v-for="n in getNumberStarVote(item.vote_average)" :key="n"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .col{
        flex-basis: calc(100% / 4 - 10px);


        .card{
            overflow: hidden;
            height: 360px;
            width: 100%;
            border: 1px solid white;
            font-size: 16px;
            margin-bottom: 30px;
            cursor: pointer;
        

            .card-img{
                height: 360px;

                img{
                    width: 100%;
                    height: auto;
                }
            }
            .card-info{
                height: 100%;
                display: none;
                color: white;
                background-color: black;
                font-size: 16px;
                text-align: center;
                h4{
                    padding: 10px 10px;
                }
                .flag{
                    height: 20px;
                     width: 30px;
                }
                .stars-wrapper{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .fa-solid{
                        color: yellow;
                    }

                }
                
            }
           
        }
        .card:hover{
            .card-img{
                display: none;
            }
            .card-info{
                display: block;
            }
        }
    }
</style>