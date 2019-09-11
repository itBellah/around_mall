<template>
  <div class="home">
    <my-header></my-header>
    <main>
      <router-view />
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
