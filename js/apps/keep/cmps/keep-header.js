import headerControls from '../../../cmps/header-controls.js';


export default {
    template: `
        <section class="keep-header">
            <header-controls />
            <div class="search-input-container">
                <input type="search" placeholder="search">
                <img src="img/search.icon.svg" alt="">
            </div>
            <div class="header-logo-container">
                <h2>Keep</h2>
                <img class="header-logo" src="img/keep.png" alt="">
                <img class="keep-header-menu-btn" src="img/menu (1).png" alt="">
            </div>
        </section>
    `,
    components : {
        headerControls,
    },
}