<!-- eslint-disable no-unused-labels -->
<script>
export default {
  data() {
    return {
      navItems: [
        {
          id: 0,
          img: "/src/assets/heart.svg",
          label: "избранное",
          alt: "избранное",
          route: "/favorites",
        },
      ],
    };
  },
};
</script>

<template>
  <header class="header">
    <router-link to="/">
      <div class="logo"><img src="/assets/logo.svg" alt="logotype" /></div
    ></router-link>
    <nav class="nav">
      <ul class="nav__list" v-for="items in navItems" :key="items.id">
        <router-link :to="items.route">
          <li class="nav__item">
            <img :src="items.img" :alt="items.alt" />
            <p>{{ items.label }}</p>
          </li>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 150px;
  max-height: 150px;
  background-color: #000000;
  color: #ffffff;
}
.nav {
  font-weight: 400;
  font-size: 18px;
}
.nav__item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffff;
}

@media screen and (max-width: 768px) {
  .nav__item p {
    display: none;
  }
}
</style>
