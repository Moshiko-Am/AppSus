import headerControls from '../../../cmps/header-controls.js';

export default {
	components: {
		headerControls,
	},
	template: `
    <section class="email-header-container">
        <div class="search-container">
            <img src="img/search.png" class="img search-img">
            <input type="text" placeholder="Search mail">
            <select class="filter-emails">
                <option value="ALL">All</option>
                <option value="UNREAD">Unread</option>
                <option value="MARKED">Marked</option>
        </select>
        </div>
    </section>
    `,
};
