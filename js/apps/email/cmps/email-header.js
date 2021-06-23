import headerControls from '../../../cmps/header-controls.js';

export default {
	components: {
		headerControls,
	},
	template: `
    <section class="email-header-container">
        <header-controls />
        <div class="search-container">
            <div class="search-input-container">
                <img src="img/search.icon.svg" class="img search-img">
                <input type="text" placeholder="Search mail">
            </div>
            <div class="select-container">
                <select class="filter-emails">
                    <option value="ALL">All</option>
                    <option value="READ">Read</option>
                    <option value="UNREAD">Unread</option>
                </select>
            </div>
        </div>
    </section>
    `,
};
