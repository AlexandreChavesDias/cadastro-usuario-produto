<template>
    <div class="Usuario"> 
        <form  @submit.prevent=Salvar id="usuarios" method="post">
       <legend>Cadastro de Usuarios</legend>  
        <p> <label for="cid">ID do usuario</label>
        <input type="text" id="cnome" v-model="usuario.id"></p>
       <p> <label for="cnome">Nome do usuario</label>
        <input type="text" id="cnome" v-model="usuario.name"></p>
        <p><label for="cemail" >E-mail<E-mail></E-mail></label> 
        <input type="email" id="cquantidade" v-model="usuario.email"></p>
        <p><label for="cCodigo">Telefone</label> 
        <input type="telefone" id="cCodigo" v-model="usuario.phone"></p>
         <p><label for="cCodigo">Password</label> 
        <input type="text" id="cCodigo" v-model="usuario.password"></p>
       <p> <input type="button" value="Salvar"></p>
       
        </form>
    </div>
</template>

<script>
export default {
   
    name: "Usuario",
    components:{
        
    }
}
</script>

<style scoped>
.usuario{
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
