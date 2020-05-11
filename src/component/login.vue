<template>
  <div id="firebaseui-auth-container" class="mt-8"></div>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: async data => {
          this.$store.dispatch("setUser", data.user);
          this.$router.push("/");
          return false;
        }
      },
      signInOptions: [
        this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        this.$firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    this.$firebaseui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
