import Vue from 'vue';
import Router from 'vue-router';
const Presentation = () => import('./views/Presentation');
const Search = () => import('./views/Search');
const NotFound = () => import('./views/NotFound');

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            alias: '/presentation',
            name: 'presentation',
            component: Presentation
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }
    ]
})
