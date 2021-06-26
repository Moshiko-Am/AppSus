import headerControls from './cmps/header-controls.js';
import userMsg from './cmps/user-msg.js';
import pageLoader from './cmps/page-loader.js';

import { router } from './router.js';

const options = {
	el: '#app',
	router,
	components: {
		headerControls,
		userMsg,
		pageLoader,
	},
	template: `
    <section>
        <user-msg />
		<page-loader v-if="isLoading"/>
        <router-view v-else/>
    </section>
    `,
	data() {
		return {
			isLoading: true,
		};
	},
	mounted() {
		this.isLoading = false;
	},
};

const app = new Vue(options);
