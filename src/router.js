import Vue from 'vue';
import Router from 'vue-router';
import Home from "@/./pages/Home";
import About from "@/./pages/About";

Vue.use(Router);

let router = new Router({

    /**
     * Push 방식의 routing
     */
    mode: 'history',

    /**
     * 라우트 정의
     */
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: Home
            }
        },
        {
            path: '/about',
            name: 'about',
            components: {
                default: About
            }
        }
    ],

    /**
     * 스크롤 Behavior
     * @returns {{x: number, y: number}}
     */
    scrollBehavior() {
        return {x: 0, y: 0}
    }
});

/**
 * Router Gard
 */
/*router.beforeEach((to, from, next) => {

});*/

export default router;
