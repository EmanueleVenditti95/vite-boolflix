import { reactive } from 'vue';

export const store = reactive({
    films : [],
    series : [],
    query:'',
    flags : {
        it : "https://flagsapi.com/IT/flat/64.png",
        de : "https://flagsapi.com/BE/flat/64.png",
        es : "https://flagsapi.com/ES/flat/64.png",
        fr : "https://flagsapi.com/FR/flat/64.png",
        en : "https://flagsapi.com/GB/flat/64.png"
    },
    warnMessageFilm : '',
    warnMessageSeries : '',
    postersUrl : 'https://image.tmdb.org/t/p/w92'
});