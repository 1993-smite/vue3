import { createWebHistory, createRouter } from 'vue-router';
//import VueRouter from 'vue-router'

import Test from '@/components/Pages/Test.vue'
import Test1 from '@/components/Pages/Test1.vue'
import TestCheck from '@/components/Pages/TestCheck.vue'
import TestResource from '@/components/Pages/TestResource.vue'

const routes = [
    {
        path: "/test",
        component: Test
    },
    {
        path: "/test1",
        component: Test1
    },
    {
        path: "/test-check",
        component: TestCheck
    },
    {
        path: "/test-reserve",
        component: TestResource
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;