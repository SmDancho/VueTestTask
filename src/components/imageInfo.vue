<script>
import axios from "axios";
import headerSmall from "@/components/headerSmall.vue";
export default {
  components: {
    headerSmall,
  },
  data() {
    return {
      photo: new Array(),
      ids: new Array(),
    };
  },

  methods: {
    async getPhotoData() {
      try {
        setTimeout(() => {
          axios
            .get(
              `https://api.unsplash.com/photos/${localStorage.getItem(
                "id"
              )}?client_id=UBvSZsOjVYu9hr1_xU-4dtUs26fPNXsVDfn_7q2VaGY`
            )
            .then((response) => {
              this.photo = response.data;
            });
        }),
          1000;
      } catch {
        console.error("Error");
      }
    },
    async getFavorite() {
      axios
        .get("https://6317329882797be77ff60c7b.mockapi.io/favorite")
        .then((response) => (this.ids = response.data));
    },
    addFavorite() {
      // console.log(this.ids);
      // const obj = JSON.parse(JSON.stringify(this.photo));
      // axios.post("https://6317329882797be77ff60c7b.mockapi.io/favorite", obj);
      let oldData = JSON.parse(localStorage.getItem("favorites")) || [];
      const arr = [];

      if (oldData.some((item) => item.id === this.photo.id)) {
        oldData = oldData.filter((items) => items.id !== this.photo.id);
        arr.push(...oldData);
      } else {
        arr.push(this.photo, ...oldData);
      }
      console.log(oldData);
      localStorage.setItem("favorites", JSON.stringify(arr));
    },
  },
  mounted() {
    this.getPhotoData();
    this.getFavorite();
  },
};
</script>

<template>
  <headerSmall />

  <section class="imgInfoSection">
    <div class="backgroundImgBlock">
      <img :src="photo.urls?.full" alt="background" />
      <div class="filters"></div>
    </div>
    <div class="container">
      <div class="about">
        <div class="user">
          <div class="avatar">
            <img :src="photo.user?.profile_image.large" alt="" />
          </div>
          <div class="user__info">
            <div class="name">{{ photo.user?.name }}</div>
            <div class="link">@{{ photo.user?.username }}</div>
          </div>
        </div>
        <div class="buttons">
          <button class="tofavorite" @click="addFavorite()">
            <img src="@/assets/toFavButton.svg" alt="to favorite" />
          </button>
          <a :href="photo.links?.download" target="__blank">
            <button class="download">
              <img src="@/assets/download.svg" alt="download image" />
              <p>Download</p>
            </button>
          </a>
        </div>
      </div>
      <div class="imgBlock">
        <img :src="photo.urls?.full" alt="img" class="img" />
        <a :href="photo.urls?.full" target="__blank">
          <img
            src="@/assets/maximize.svg"
            alt="full screen button"
            class="fullScreenBtn"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1480px;
  margin: auto;
}

.backgroundImgBlock {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 790px;
  filter: grayscale(1);
}
.filters {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.backgroundImgBlock img {
  display: block;
  width: 100%;
  height: 800px;
}

.imgBlock {
  position: relative;
  width: 100%;
  height: 750px;
}
.fullScreenBtn {
  position: absolute;
  bottom: 35px;
  right: 35px;
  cursor: pointer;
}
.img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: grayscale(0);
  border-radius: 8px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.5);
  margin-bottom: 100px;
}
/* user */
.about {
  padding-top: 45px;
  color: #fff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}
.user {
  display: flex;
  gap: 10px;
  align-items: center;
}
.avatar img {
  width: 55px;
  height: 55px;
  object-fit: cover;
  border-radius: 8px;
}
.buttons {
  display: flex;
  gap: 20px;
}
.tofavorite {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.download {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: #fff200;
  border: none;
  border-radius: 8px;
  width: 205px;
  height: 50px;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #000000;
}
@media screen and (max-width: 789px) {
  .imgBlock {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 227px;
    margin: auto;
    padding: 0 20px;
  }
  .backgroundImgBlock img {
    display: none;
  }
  .filters {
    display: none;
  }
  .about {
    color: #000000;
    padding: 40px 20px 0 20px;
  }
  .tofavorite,
  .download {
    width: 40px;
    height: 40px;
  }
  .download p {
    display: none;
  }
}
</style>
