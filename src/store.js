import {reactive} from "vue";
export const store = reactive({
    // inserisco i dati che voglio condividere con tutti i componenti
    items:null,
    searchedItem:'',
});