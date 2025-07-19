<template>
  <div class="container">
    <h1>Sistema de matricula estudiante</h1>
    <div class="container-opciones">
      <select name="Seleccione" v-model="accion">
        <option value="">Seleccione una opción</option>
        <option value="guardar">Guardar</option>
        <option value="actualizarID">Actualizar</option>
        <option value="actualizarParcial">
          Actualizar uno o varios campos
        </option>
        <option value="borrar">Eliminar estudiante</option>
      </select>
    </div>
    <div class="container-guardar" v-if="accion === 'guardar'">
      <h2>Guardar Estudiante</h2>
      <p type="Nombre">
        <input type="text" name="" id="id_nombre" v-model="nombre" />
      </p>
      <p type="Apellido">
        <input type="text" name="" id="id_apellido" v-model="apellido" />
      </p>
      <p type="Fecha de Nacimiento">
        <input type="date" name="" id="id_fecha_nacimiento" v-model="fecha" />
      </p>
      <p type="Genero">
        <select name="" id="id_genero" v-model="genero">
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </p>
      <button v-on:click="guardar">Guardar</button>
    </div>
    <!-- Actualizar completamente un estudiante -->
    <div class="container-actualizar" v-if="accion === 'actualizarID'">
      <h2>Actualizar Completamente un Estudiante</h2>
      <p type="ID del Estudiante a Actualizar">
        <input type="number" name="" id="id_actualizar" v-model="id" />
      </p>
      <p type="Nombre">
        <input type="text" name="" id="id_nombre" v-model="nombre" />
      </p>
      <p type="Apellido">
        <input type="text" name="" id="id_apellido" v-model="apellido" />
      </p>
      <p type="Fecha de Nacimiento">
        <input type="date" name="" id="id_fecha_nacimiento" v-model="fecha" />
      </p>
      <p type="Genero">
        <select name="" id="id_genero" v-model="genero">
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </p>
      <button v-on:click="actualizar">Actualizar</button>
    </div>
    <!-- Actualizar parcialmente un estudiante -->
    <div
      class="container-actualizarParcial"
      v-if="accion === 'actualizarParcial'"
    >
      <h2>Actualizar uno o varios campos de Estudiante</h2>
      <p type="ID del Estudiante a Actualizar">
        <input type="number" name="" id="id_actualizar_parcial" v-model="id" />
      </p>

      <p type="Nombre">
        <input type="text" name="" id="id_nombre" v-model="nombre" />
      </p>
      <p type="Apellido">
        <input type="text" name="" id="id_apellido" v-model="apellido" />
      </p>
      <p type="Fecha de Nacimiento">
        <input type="date" name="" id="id_fecha_nacimiento" v-model="fecha" />
      </p>
      <p type="Genero">
        <select name="" id="id_genero" v-model="genero">
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
        </select>
      </p>
      <button v-on:click="actualizarParcial">Actualizar Parcial</button>
    </div>

    <div class="container-eliminar" v-if="accion === 'borrar'">
      <h2>Eliminar Estudiante</h2>
      <p type="ID del Estudiante a Eliminar">
        <input type="number" name="" id="id_eliminar" v-model="id" />
      </p>
      <button v-on:click="eliminar">Borrar</button>
    </div>
  </div>
</template>

<script>
import {
  guardarFachada,
  actualizarFachada,
  actualizarParcialFachada,
  eliminarFachada,
} from "@/clients/EstudianteClient.js";
export default {
  data() {
    return {
      accion: "",
      nombre: "",
      apellido: "",
      fecha: "",
      genero: "M",
      id: null,
    };
  },
  methods: {
    async guardar() {
      const estudianteToBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fecha + "T00:00:00",
        genero: this.genero,
      };
      await guardarFachada(estudianteToBody);
    },
    async actualizar() {
      const estudianteToBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fecha + "T00:00:00",
        genero: this.genero,
      };
      await actualizarFachada(estudianteToBody, this.id);
      console.log("Estudiante actualizado con ID:", this.id);
    },
    async actualizarParcial() {
      const estudianteToBody = {};
      if (this.nombre) estudianteToBody.nombre = this.nombre;
      if (this.apellido) estudianteToBody.apellido = this.apellido;
      if (this.fecha)
        estudianteToBody.fechaNacimiento = this.fecha + "T00:00:00";
      if (this.genero) estudianteToBody.genero = this.genero;

      await actualizarParcialFachada(estudianteToBody, this.id);
      console.log("Estudiante actualizado parcialmente con ID:", this.id);
      console.log("Se actualizo:", estudianteToBody);
    },
    async eliminar() {
      await eliminarFachada(this.id);
      console.log("Estudiante eliminado con ID:", this.id);
      this.id = null;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f6f8;
  padding: 20px;
  width: 100%;
  height: 100vh;
}
p::before {
  content: attr(type);
  display: block;
}
.container-opciones {
  margin-bottom: 50px;
}
.container-guardar,
.container-actualizar,
.container-actualizarParcial,
.container-eliminar {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  background: #ffffff;
  padding: 20px;
  border: solid blue 1px;
  border-radius: 10px;
  width: 300px;
  margin-bottom: 20px;
}

h1 {
  color: #0b23f6f3;
  border: solid #c0d8f1;
  padding: 10px;
}
input {
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
}
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #0b23f6f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
h2 {
  color: #0b23f6f3;
  margin-bottom: 10px;
  text-align: center;
}
</style>