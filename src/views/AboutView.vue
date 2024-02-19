<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ data1 }}
    <LoadingOverlay :active="isLoading" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: {},
      isLoading: true
    }
  },
  mounted() {
    const url = import.meta.env.VITE_Path
    this.$http.get(url).then((response) => {
      console.log(response.data)
      this.data1 = response.data.results[0]
    })
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
