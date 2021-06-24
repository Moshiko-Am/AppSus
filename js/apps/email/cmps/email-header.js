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
    </section>
    `,
	methods: {
		filtered(filter) {
			this.$emit('filtered', filter);
		},
	},
};
