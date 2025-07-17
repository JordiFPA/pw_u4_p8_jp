<template>
  <div class="login-container">
    <div class="login-caja">
      <h2>Iniciar Sesion</h2>
      <input v-model="username" type="text" placeholder="Usuario" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button v-on:click="login">Ingresar</button>
    </div>
    <div v-if="valido" class="mensaje-error">
        <h1> Error de ingreso </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      valido: false, 
    };
  },
  methods: {
    login() {
      if (this.username === "admin" && this.password === "123") {
        localStorage.setItem("usuario", "admin");
        localStorage.setItem("auth", "true"); //bandera que me indica que el usuario esta logueado
        //redireccionar a la pagina de bienvenida
        this.$router.push('/home') 
        this.valido = true; 
      }
      else {
        this.valido = true;
        alert("Usuario o contraseña incorrectos");
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f4f6f8;
  height: 100vh;
  width: 100vw;
}
.login-caja {
  background: #ffffff;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}
input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  padding: 10px;
  background: #007bff;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}
h1{
    color: red;
}
</style>