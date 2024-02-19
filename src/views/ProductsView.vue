<template>
  <div>產品列表</div>
  <LoadingOverlay :active="isLoading" />
  <table class="table">
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td></td>
        <td></td>
        <td>
          <!-- 第一種方法 : HTML-->
          <router-link :to="`/products/${product.id}`">產品詳細頁</router-link>
        </td>
        <td>
          <!-- 第二種方法 : 自訂事件 JS -->
          <a href="#" @click.prevent="productPage(product.id)">產品詳細JS</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data() {
    return {
      isLoading: true,
      products: []
    }
  },
  methods: {
    productPage(id) {
      this.$router.push(`/products/${id}`)
    }
  },
  mounted() {
    this.$http.get(`${VITE_APP_URL}/${VITE_APP_PATH}/products/all`).then((res) => {
      // console.log(res)
      this.isLoading = false
      this.products = res.data.products
    })
  }
}
</script>
