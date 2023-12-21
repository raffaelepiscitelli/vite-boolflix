<template lang="">
    <div>
        <h1>{{movie.name}}</h1>
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