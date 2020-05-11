<template>
  <div class="home">
    <img alt="bg_field" src="../assets/bg_field.jpg" />
    <h1
      class="text-7xl font-bold text-white px-6 hover:bg-white hover:text-white-800 opacity-80"
    >
      RGV League
    </h1>
    <br />
    <br />
    <h3
      class="text-4xl font-bold text-white px-6 hover:bg-black hover:text-white-800 opacity-80"
    >
      May your passion for soccer remain on the field. Register your team and
      play with others to choose the best of the RGV.
    </h3>
    <br />
    <h2
      class="text-5xl font-bold text-white px-6 hover:bg-black hover:text-white-800 opacity-80"
    >
      Register by going in the navigation bar in the Registration. This will
      send you to the Registration page.
    </h2>
    <br />
    <br />
    <h1 class="text-7x1" font-italic-bold px-50>Go and Register your team!</h1>
    <router-link to="/Register">Register Here</router-link>
    <br />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
