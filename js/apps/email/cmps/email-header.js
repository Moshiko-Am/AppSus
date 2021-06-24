import headerControls from '../../../cmps/header-controls.js';
import emailFilter from './email-filter.js';

export default {
	components: {
		headerControls,
		emailFilter,
	},
	template: `
    <section class="email-header-container">
        <header-controls />
        <email-filter @filtered="filtered"/>
		<div class="header-logo-container">
                <h2>Mail</h2>
                <img class="img header-logo" src="img/gmail.png">
                <img class="img email-header-menu-btn" src="img/menu (1).png">
            </div>
    </section>
    `,
	methods: {
		filtered(filter) {
			this.$emit('filtered', filter);
		},
	},
};
