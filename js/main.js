import headerControls from './cmps/header-controls.js';
import userMsg from './cmps/user-msg.js';
import { router } from './router.js';

const options = {
	el: '#app',
	router,
	components: {
		headerControls,
		userMsg,
	},
	template: `
    <section>
        <user-msg />
        <router-view />
    </section>
    
    `,
};

const app = new Vue(options);
