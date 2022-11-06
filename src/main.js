import { createApp } from 'vue'
import App from "./App"
import components from "@/components/UI/index"
import router from "@/router/router";
import directives from "@/directives";
// import store from "@/store"


const app = createApp(App)

console.log(components)
for (let componentsKey in components) {
    app.component(components[componentsKey].name, components[componentsKey])
}

directives.forEach(directive => {
    app.directive(directive.name, directive)
})

app.use(router)
    // .use(store)
    .mount("#app");
