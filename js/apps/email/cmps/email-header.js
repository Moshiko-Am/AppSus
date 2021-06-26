import headerControls from '../../../cmps/header-controls.js';
import emailFilter from './email-filter.js';

export default {
	components: {
		headerControls,
		emailFilter,
	},
	template: `
    <section class="email-header-container">
	<img src="img/menu (1).png" class="img mobile-menu-icon" @click="openMenu">
        <header-controls />
        <email-filter @filtered="filtered"/>
		<router-link to="/mail/inbox">
			<div class="header-logo-container">
						<h2>Mail</h2>
						<img class="img header-logo" src="img/gmail.png">
						
					</div>
		</router-link>
    </section>
    `,
	methods: {
		filtered(filter) {
			this.$emit('filtered', filter);
		},
		openMenu() {
			this.$emit('mobile');
		},
	},
};
