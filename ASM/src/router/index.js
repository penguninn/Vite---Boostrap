import { createRouter, createWebHistory } from 'vue-router';
import { useRouter } from 'vue-router';
import Home from '../components/Home.vue';
import Profile from '../components/Profile.vue';
import Cart from '../components/Cart.vue';
import Products from '../components/Products.vue';
import FormLogin from '../components/FormLogin.vue';
import Payment from '../components/Payment.vue';
import News from '../components/News.vue';
import DetailProduct from '../components/DetailProduct.vue';
import ChangePassword from '../components/ChangePassword.vue';
import Purchase from '../components/Purchase.vue';
import ProfileInfo from '../components/ProfileInfo.vue';
import ManageProducts from '../components/ManageProducts.vue';
import ManageCategories from '../components/ManageCategories.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: FormLogin },
    { path: "/products/:categoryId?", name: "Products", component: Products, meta: {breadcrumb: 'Products'} },
    { path: '/cart', name: 'Cart', component: Cart, meta: { requiresAuth: true } },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        children: [
            {
                path: '', 
                component: ProfileInfo,
            },
            {
                path: 'change-password',
                component: ChangePassword,
                meta: {breadcrumb: 'Change password'},
            },
            {
                path: 'purchase',
                component: Purchase,
                meta: {breadcrumb: 'My purchaase'},
            },
            {
                path: 'manage-products',
                component: ManageProducts,
                meta: {breadcrumb: 'Manage products'},
            },
            {
                path: 'manage-categories',
                component: ManageCategories,
                meta: {breadcrumb: 'Manage categories'},
            }

        ],
        meta: { requiresAuth: true }
    },
    { path: '/payment', name: 'Payment', component: Payment, meta: { requiresAuth: true } },
    { path: "/news", name: "News", component: News },
    { path: "/forgot-password", name: "ForgotPassword", component: ChangePassword },
    { path: '/:catchAll(.*)', redirect: '/' },
    { path: '/detail-product/:productId', name: 'DetailProduct', component: DetailProduct, meta: {breadcrumb: 'Detail Product'} }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (to.meta.requiresAuth && !currentUser) {
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            const modal = new bootstrap.Modal(loginModal);
            modal.show();
        }
        return next(false);
    }
    if(to.path === '/forgot-password') {

    }
    next();
});

export default router;
