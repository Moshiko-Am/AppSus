import headerControls from '../../../cmps/header-controls.js';
import bookFilter from './book-filter.js';

export default {
	components: {
		headerControls,
		bookFilter,
	},
	template: `
    <header class="book-header">
        <header-controls></header-controls>
        <book-filter @filtered="filtered"></book-filter>
        <router-link to="/book">
			<div class="header-logo-container">
						<h2>Books</h2>
						<img class="img header-logo" src="img/book.png">
					</div>
		</router-link>
        
    </header>
    `,
	methods : {
		filtered(filter){
			console.log(filter);
			this.$emit('filtered', filter)
		}
	}
};
