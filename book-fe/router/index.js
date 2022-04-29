import VueRouter from 'vue-router';
import BookList from '../pages/BookList'
import BookDetail from '../pages/BookDetail'
import EditBookInfo from '../pages/EditBookInfo'
import Login from '../pages/Login'

const router =  new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: BookList
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/books',
            component: BookList
        },
        {
            name: 'detail',
            path: '/detail/:id',
            component: BookDetail
        },
        {
            path: '/edit',
            component: EditBookInfo
        }
    ]
})

export default router;