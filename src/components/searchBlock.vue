<script>
import axios from "axios";

export default {
  data() {
    return {
      photos: new Array(),
      seatchVal: this.seatchVal,
    };
  },
  methods: {
    async getData() {
      await axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=${
            this.seatchVal ? this.seatchVal : "painting"
          }&client_id=UBvSZsOjVYu9hr1_xU-4dtUs26fPNXsVDfn_7q2VaGY&per_page=9`
        )
        .then((response) => {
          this.photos = response.data.results;
          console.log(response.data.results);
        });
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
    this.getData();
  },
};
</script>
<template>
  <div class="search">
    <div class="searchBlock">
      <input
        class="searchInput"
        type="text"
        placeholder="Поиск"
        :value="seatchVal"
        @input="seatchVal = $event.target.value"
        @keyup.enter="getData()"
      />
      <img
        src="@/assets/search.svg"
        alt="search"
        class="searchIcon"
        @click="getData()"
      />
    </div>
  </div>

  <section class="photos">
    <div class="container">
      <div class="photos__inner">
        <div
          class="photo__block"
          v-for="items in photos"
          :key="items.id"
          @click="setId(items.id)"
        >
          <img :src="items.urls.regular" alt="photo" @click="goInfoBlock" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 270px;
  background: url("../assets/background.svg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 0 20px;
}
.searchBlock {
  max-width: 866px;
  width: 866px;
  position: relative;
}
.searchInput {
  width: 100%;
  height: 70px;
  outline: none;
  font-size: 24px;
  padding-left: 40px;
  color: #000000;
  border: none;
}

.searchIcon {
  position: absolute;
  right: 24px;
  top: 24px;
  z-index: 11;
  cursor: pointer;
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
}
</style>
