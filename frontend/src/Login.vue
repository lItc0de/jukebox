<template>
  <main>
    <div>
      <h1>Welcome to jukebox</h1>
      <a href="http://localhost:3000/auth/login">Login with spotify</a>
    </div>
  </main>
</template>

<script>
import { onLogin } from '@/vue-apollo';

export default {
  name: 'LoginPage',

  async created() {
    const { accessToken } = this.$route.query;
    if (!accessToken) return;

    await onLogin(this.$apollo.getClient(), accessToken);
    this.$router.push({ name: 'Home' });
  },
};
</script>
