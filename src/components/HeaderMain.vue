<!-- eslint-disable no-unused-labels -->
<script>
export default {};
</script>

<template>
  <header class="header">
    <router-link to="/">
      <div class="logo"><img src="../assets/logo.svg" alt="logotype" /></div
    ></router-link>
    <nav class="nav">
      <ul class="nav__list">
        <router-link to="/favorites">
          <li class="nav__item">
            <img src="../assets/heart.svg" alt="избранное" />
            <p>избранное</p>
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
