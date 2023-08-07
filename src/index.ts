import "./index.pcss"
import {createApp} from "vue";
import Root from "./components/root/Root.vue";
import VueRouter from "vue-router"
import {routePaths} from "./routes";
import MainPage from "./pages/MainPage.vue";
import AboutPage from "./pages/AboutPage.vue";

const rootNode = document.querySelector("[data-js-root]")

const app = createApp(Root)

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
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

