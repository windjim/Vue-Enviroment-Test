<template>
  <div>新增頁面yoyoyo</div>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newpage/a" class="list-group-item list-group-item-action">
          The current link item
        </router-link>
        <router-link to="/newpage/b" class="list-group-item list-group-item-action">
          The current link item
        </router-link>
        <router-link to="/newpage/namedView/C2A" class="list-group-item list-group-item-action"
          >C2A</router-link
        >
        <router-link to="/newpage/namedView/B2C" class="list-group-item list-group-item-action"
          >B2C</router-link
        >
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
