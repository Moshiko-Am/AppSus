import headerControls from '../../../cmps/header-controls.js';
import keepFilter from './keep-filter.js';

export default {
    template: `
        <section class="keep-header">
            <header-controls />
            <keep-filter @filtered="filter"></keep-filter>
            <div class="header-logo-container keep-logo-container">
                <h2>Keep</h2>
                <img class="header-logo" src="img/keep.png" alt="">
                <!-- <img class="keep-header-menu-btn" src="img/menu (1).png" alt=""> -->
            </div>
        </section>
    `,
    components : {
        headerControls,
        keepFilter,
    },
    methods: {
        filter(filter){
            this.$emit('filter',filter);
        }
    }
}