<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>| <RouterLink to="/about">About</RouterLink>|
        <router-link :to="{ name: '新增頁面' }">yoyoyo頁面</router-link>|
        <router-link to="/apple">日曆練習VCalendar</router-link>|
        <router-link to="/cart">購物車</router-link>|
        <router-link to="/products">產品列表</router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
