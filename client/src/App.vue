<template>
  <h1 class="text-3xl font-bold underline text-blue-800">Centro veterinario</h1>
  <form class="flex flex-col">
    <label for="name">Name</label>
    <input name="name" v-model="name" />
    <label for="Especie">Especie</label>
    <input name="Especie" v-model="Especie" />
    <label for="Tutora">Tutora</label>
    <input name="Tutora" v-model="Tutora" />
    <label for="Motivo">Motivo</label>
    <input name="Motivo" v-model="Motivo" />
    <label for="hospitalizacion">Hospitalizacion</label>
    <input name="hospitalizacion" v-model="hospitalizacion" />
    <label for="tratamiento">Tratamiento</label>
    <input name="tratamiento" v-model="tratamiento" />
    <label for="Estado">Estado</label>
    <input name="Estado" v-model="Estado" />
    <button class="mt-4" @click.prevent="postAnimal">Add animal</button>
  </form>
  <a class="btn" href="../src/otra_web/paginas/index.html">WEB</a>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "",
      Especie: "",
      Tutora: "",
      Motivo: "",
      hospitalizacion: "",
      tratamiento: "",
      Estado: ""
    };
  },
  methods: {
    postAnimal() {
      // Create an object with the form data
      const animalData = {
        name: this.name,
        Especie: this.Especie,
        Tutora: this.Tutora,
        Motivo: this.Motivo,
        hospitalizacion: this.hospitalizacion,
        tratamiento: this.tratamiento,
        Estado: this.Estado
      };
      
      // Send the animalData object to the server-side API endpoint
      axios.post('/api/animals', animalData)
        .then(response => {
          // Handle the response from the server
          console.log(response.data);
          // Optionally, show a success message or redirect to another page
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error(error);
          // Optionally, show an error message to the user
        });
    },
  },
};
</script>

<style>
body {
  background-image: url(./images/huellas-patas-verdes-blancas-sobre-fondo-verde_30495-134.jpg);
}

.btn {
  background-color: rgb(203, 68, 37);
}

.flex {
  border: solid 1px;
  margin-top: 20px;
  background-color: dimgrey;
}

.mt-4 {
  background-color: brown;
}

.mt-4:hover {
  background-color: rgb(43, 152, 76);
}
</style>
