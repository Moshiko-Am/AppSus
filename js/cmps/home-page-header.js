import headerControls from "./header-controls.js"
export default {
    template: `
        <section class="home-page-header">
            <header-controls />
            <router-link to="/about">about</router-link>
        </section>
    `,
    components: {
        headerControls
    }
}