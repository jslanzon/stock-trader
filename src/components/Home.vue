<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte sua Ações</h1>
        <v-sheet :elevation="12" class="pa-2" color="primary">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline font-weight-light white--text">Você pode Salvar & Carregar os Dados</span>
        </v-sheet>
        <v-sheet :elevation="12" class="pa-2 mt-5 success darken-1" >
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline font-weight-light white--text">Clique em Finalizar dia para Iniciar Novo Dia!</span>
        </v-sheet>
        <v-divider class="my-4"></v-divider>
        <p><strong>Seu Saldo: </strong> {{ funds | currency }}</p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds
        }
    }
}
</script>
<style>

</style>
