<script>
export default {
  data() {
    return {
      Favoritesphotos: JSON.parse(localStorage.getItem("favorites")),
    };
  },
  methods: {
    getFavorite() {
      console.log(this.Favoritesphotos);
    },
    setId(id) {
      window.localStorage.setItem("id", id);
    },
    goInfoBlock() {
      this.$router.push("info");
      console.log("333");
    },
  },
  mounted() {
    this.getFavorite();
  },
};
</script>

<template>
  <section><h1 class="title">Избранное</h1></section>
  <section class="photos">
    <div class="container">
      <div class="photos__inner">
        <div
          class="photo__block"
          v-for="items in Favoritesphotos"
          :key="items.id"
          @click="setId(items.id)"
        >
          <img :src="items.urls?.regular" alt="photo" @click="goInfoBlock" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.title {
  text-align: center;
  font-weight: 700;
  font-size: 72px;
  margin-top: 95px;
  margin-bottom: 100px;
}
.container {
  max-width: 1480px;
  margin: auto;
}
.photos__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 112px;
}
.photo__block {
  max-width: 473px;
  width: 473px;
  max-height: 440px;
  height: 440px;
  cursor: pointer;
  overflow: hidden;
}

.photo__block img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: all 1s ease-in-out;
}
.photo__block img:hover {
  transform: scale(1.2);
}

@media screen and (max-width: 768px) {
  .photos__inner {
    padding: 0 20px;
  }
  .title {
    font-size: 36px;
  }
}
</style>
