<template>
    <form class="adicionar-produto">
        <label for="nome">Nome</label>
        <input id="nome" name="nome" type="text" v-model="produto.nome">
        <label for="preco">Preço (R$)</label>
        <input id="preco" name="preco" type="number" v-model="produto.preco">
        <label for="fotos">Fotos</label>
        <input id="fotos" name="fotos" type="file" ref="fotos">
        <label for="preco">Descrição</label>
        <textarea id="descricao" name="descricao" v-model="produto.descricao"></textarea>
        <input class="btn" type="button" value="Adicionar Produto" @click.prevent="adicionarProduto">
    </form>
</template>

<script>
import {api} from "@/services.js"

export default {
    name: "ProdutosAdicionar",
    data() {
        return {
            produto: {
                nome: "",
                preco: "",
                descricao: "",
                fotos: null,
                vendido: "false",
            }
        }
    },
    methods: {
        formatarProduto() {
            this.produto.usuario_id = this.$store.state.usuario.id;
        },
        adicionarProduto() {
            this.formatarProduto();
            api.post("/produto", this.produto).then(() => {
                this.$store.dispatch("getUsuarioProduto");
            });
        }
    }
};
</script>

<style scoped>
.adicionar-produto {
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    margin-bottom: 60px;
}

.btn {
    grid-column: 2;
}
</style>
