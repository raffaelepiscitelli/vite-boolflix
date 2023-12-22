<template lang="">
    <div>
        <h1>Film</h1>
        <article v-for='movie in store.moviesArray'>
            <p>Titolo: {{movie.title}}</p>
            <p>Titolo originale: {{movie.original_title}}</p>
            <p>Lingua originale: {{movie.original_language}}</p>
            <p>Voto: {{movie.vote_average}}</p>
        </article>
        <h1>Serie TV</h1>
        <article v-for='tvSeries in store.tvSeriesArray'>
            <p>Titolo: {{tvSeries.name}}</p>
            <p>Titolo originale: {{tvSeries.original_name}}</p>
            <p>Lingua originale: {{tvSeries.original_language}}</p>
            <p>Voto: {{tvSeries.vote_average}}</p>
        </article>
    </div>
</template>
<script>
import { store } from '../js/store.js';
export default {
    data() {
        return {
            store
        }
    }
}
</script>
<style lang="">
    
</style>