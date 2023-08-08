import "./app/styles/index.pcss"
import {createApp} from "vue";
import VueRouter from "vue-router"
import {routePaths} from "routes";
import {MainPage} from "pages/MainPage"
import {AboutPage} from "pages/AboutPage"
import App from "app/App.vue"

const rootNode = document.querySelector("[data-js-root]")

const app = createApp(App)

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [{
        path: routePaths.main,
        component: MainPage
    },
        {
            path: routePaths.about,
            component: AboutPage,
        }
    ]
})

app.use(router)

app.mount(rootNode)

