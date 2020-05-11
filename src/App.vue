<template>
  <div id="app">
    <div class="min-h-screen bg-green-900">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/Register">Registration </router-link> |
        <router-link to="/Calendar">Calendar</router-link> |
        <router-link to="/ContactUs">Contact Us |</router-link>
        <router-link to="/login">Login</router-link>
      </div>
      <router-view />
      <div class="flex justify-center items-center">
        <div class="h-20 bottom-o py-8 flex">
          <p class="pr-2">&copy; RGV League App</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  text-align: center;
  color: #01070c;
  background: #62df73;
}

#nav {
  padding: 70px;

  a {
    font-weight: bold;
    color: #fa0b0b;

    &.router-link-exact-active {
      color: rgb(68, 85, 70);
    }
  }
}
</style>
