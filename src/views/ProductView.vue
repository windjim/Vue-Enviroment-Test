<template>
  <div>單一產品</div>
  {{ product.title }}
  <img :src="product.imageUrl" alt="" />
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data() {
    return {
      product: {}
    }
  },
  mounted() {
    // 物件
    console.log(this.$route)
    // 方法
    console.log(this.$router)
    const { id } = this.$route.params
    this.$http.get(`${VITE_APP_URL}/${VITE_APP_PATH}/product/${id}`).then((res) => {
      console.log(res)
      this.product = res.data.product
    })
  }
}
</script>
