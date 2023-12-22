import { reactive } from "vue";

import axios from 'axios';
export const store = reactive({
    moviesArray: [],
    tvSeriesArray: [],
    moviesApi: "https://api.themoviedb.org/3/search/movie?api_key=a9971208a6fba9c97e3d228c3f1eac78&query=",
    tvSeriesApi: "https://api.themoviedb.org/3/search/tv?api_key=a9971208a6fba9c97e3d228c3f1eac78&query=",
    searchMovies(searchContent = "") {
        axios.get(this.moviesApi + searchContent)
            .then((response) => {
                console.log(response.data.results);
                this.moviesArray = response.data.results;
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    searchTvSeries(searchContent = "") {
        axios.get(this.tvSeriesApi + searchContent)
            .then((response) => {
                console.log(response.data.results);
                this.tvSeriesArray = response.data.results;
            })
            .catch(function (error) {
                console.log(error);
            })
    },
    searchMoviesAndTvSeries(searchMovie) {
        this.searchMovies(searchMovie);
        this.searchTvSeries(searchMovie);
    }
});
