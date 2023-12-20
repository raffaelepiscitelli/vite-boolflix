<template>
    <div>
        <p>{{ store.searchText }}</p>
    </div>
</template>
<script>
import { store } from '../js/store.js';
export default {
    data() {
        return {
            store,
        }
    },
}
</script>
<style lang="scss"></style>