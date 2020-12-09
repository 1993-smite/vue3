import { createWebHistory, createRouter } from 'vue-router';
//import VueRouter from 'vue-router'

import Test from '@/components/Test.vue'
import Test1 from '@/components/Test1.vue'
import TestCheck from '@/components/TestCheck.vue'

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
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
  
export default router;