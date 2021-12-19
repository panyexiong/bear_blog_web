import VueRouter from "vue-router";
import Vue from 'vue';
import routes from "@/router/routes";


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes
});

export default router;