import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import login from '@/components/Login.vue'
import box from '@/components/box.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: login
        },
        {
            path: '/box',
            component: box
        }
    ]
})
