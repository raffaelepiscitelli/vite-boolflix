<template>
    <div>
        <div class="input-group mb-3">
            <input v-model="searchMovie" type="text" class="form-control" placeholder="Type movie name" aria-label="Recipient's username"
                aria-describedby="button-addon2">
            <button @click="store.searchMoviesAndTvSeries(searchMovie)" class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
    </div>
</template>
<script>
import { store } from '../js/store.js';
export default {
    data() {
        return {
            store,
            searchMovie : ""
        }
    },
}
</script>
<style lang="scss"></style>