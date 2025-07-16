<template>
  <div class="container">
    <button v-on:click="guardar">Guardar</button>
    <button v-on:click="actualizar">Actualizar</button>
    <button v-on:click="actualizarParcial">Actualizar Parcial</button>
    <button v-on:click="eliminar">Borrar</button>
  </div>
</template>

<script>
import { guardarFachada } from "@/clients/ProfesorClient.js";
export default {
  methods: {
    async guardar() {
      const profesorToBody = {
        nombre: "Jordi",
        apellido: "Pila",
        edad: 21,
        especialidad: "Matematicas",
        genero: "M",
      };
      await guardarFachada(profesorToBody);
    },
    actualizar() {
      const profesorToBody = {
        nombre: "Santiago",
        apellido: "Leon",
        edad: 41,
        especialidad: "Informatica",
        genero: "M",
      };
      actualizarFachada;(profesorToBody,3);
    },
  },
};
</script>

<style>
</style>