<template>
  <div class="container">
    <button v-on:click="guardar">Guardar</button>
    <button v-on:click="actualizar">Actualizar</button>
    <button v-on:click="actualizarParcial">Actualizar Parcial</button>
    <button v-on:click="eliminar">Borrar</button>
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
  methods: {
    async guardar() {
      let fecha = "2002-09-08";
      const estudianteToBody = {
        nombre: "Jordi2 ",
        apellido: "Pila2",
        fechaNacimiento: fecha + "T00:00:00",
        genero: "M",
      };
      await guardarFachada(estudianteToBody);
    },
    async actualizar() {
      let fecha = "2002-09-08";
      const estudianteToBody = {
        nombre: "Jordi",
        apellido: "Pila",
        fechaNacimiento: fecha + "T00:00:00",
        genero: "M",
      };
      await actualizarFachada(estudianteToBody, 1);
    },
    async actualizarParcial() {
      const estudianteToBody = {
        nombre: "Melany",
      };
      await actualizarParcialFachada(estudianteToBody, 2);
    },
    async eliminar() {
      await eliminarFachada(19);
    },
  },
};
</script>

<style>
</style>