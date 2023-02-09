<template>
  <header class="header">
    <router-link to="/">
      <div class="logo">
        <img src="../assets/logo.svg" alt="logotype" />
      </div>
    </router-link>
    <nav class="nav">
      <ul class="nav__list">
        <router-link to="/">
          <li class="nav__item">
            <img src="@/assets/SearchHeader.svg" alt="Поиск" />

            <p>поиск</p>
          </li>
        </router-link>
        <router-link to="/favorites">
          <li class="nav__item">
            <img src="@/assets/heart.svg" alt="избранное" />
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
  height: 80px;
  background-color: #000000;
  color: #ffffff;
}
.nav {
  font-weight: 400;
  font-size: 18px;
}
.nav__list {
  display: flex;
  gap: 30px;
}
.nav__item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffff;
}
.logo {
  width: 112px;
  height: 44px;
}
.logo img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 769px) {
  .nav__list p {
    display: none;
  }
}
</style>
