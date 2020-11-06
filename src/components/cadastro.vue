<template>
    <div class="cadastro"> 
        <form action="" id="cadastros" method="post">
       <legend>Cadastro de Produtos</legend>  
       <p> <label for="cnome">Nome do produto</label>
        <input type="text" id="cnome"></p>
        <p><label for="cquantidade" >Quantidade</label> 
        <input type="number" id="cquantidade"></p>
        <p><label for="cCodigo">Codigo do Produto</label> 
        <input type="number" id="cCodigo"></p>
       <p><input type="button" value="Salvar"></p>
       
        </form>
    </div>
</template>
<script>
export default {
    name: "cadastro",
    components:{
        
    }
}
</script>
<style scoped>
.cadastro{
font-family: 'Times New Roman', Times, serif;
border-radius:4px;
-moz-border-radius:4px;
-webkit-border-radius:4px;
box-shadow: 1px 1px 2px #333333;
-moz-box-shadow: 1px 1px 2px #333333;
-webkit-box-shadow: 1px 1px 2px #333333;
background: #cccccc;
border:1px solid #000000;
     
}


</style>