<template>
    <v-layout row wrap>
        <Stock v-for="stock in stock" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
import Stock from './Stock.vue'

export default {
    components: { Stock },
    data() {
        return {
            stock: [
                {id: 1, name: 'BMW', price: 110},
                {id: 2, name: 'Google', price: 510},
                {id: 3, name: 'Servgraf', price: 20},
                {id: 4, name: 'BASF', price: 350},
            ]
        }
    },       
}
</script>
<style>

</style>
