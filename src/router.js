import { createRouter, createWebHashHistory } from "vue-router";
import homePage from "./views/homePage.vue";
import imageInfo from "./views/imageInfo.vue";
import favoritesPage from "./views/favoritesPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: homePage },
    { path: "/info", component: imageInfo },
    { path: "/favorites", component: favoritesPage },
  ],
});
