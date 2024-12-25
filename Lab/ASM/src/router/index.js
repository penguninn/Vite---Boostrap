import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Dashboard from '../components/Dashboard.vue';
import DetailsPost from '../components/DetailsPost.vue';
import CreatePost from '../components/CreatePost.vue';
import PersonalInfo from '../components/PersonalInfo.vue';
import ChangePass from '../components/ChangePass.vue';
import ManagePost from '../components/ManagePost.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'info',
                name: 'PersonalInfo',
                component: PersonalInfo,
            },
            {
                path: 'change-password',
                name: 'ChangePass',
                component: ChangePass,
            },
            {
                path: 'manage-post',
                name: 'ManagePost',
                component: ManagePost,
            },
        ],
    },
    {
        path: '/createPost',
        name: 'CreatePost',
        component: CreatePost,
        meta: { requiresAuth: true }
    },
    {
        path: '/detailsPost', name: 'DetailsPost', component: DetailsPost,
        props: route => ({
            post: route.query.post // Truyền dữ liệu từ query parameters
        })
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
        alert('Vui lòng đăng nhập để tiếp tục.');
        next('/');
    } else {
        next();
    }
});

export default router;
