import homePage from './pages/home-page.js';
import aboutPage from './pages/about-page.js';
import bookApp from './apps/book/pages/book-app.js';
import mailApp from './apps/email/pages/email-app.js';
import keepApp from './apps/keep/pages/keep-app.js';
import emailDetails from './apps/email/pages/email-details.js';

const routes = [
	{
		path: '/',
		component: homePage,
	},
	{
		path: '/about',
		component: aboutPage,
	},
	{
		path: '/book',
		component: bookApp,
	},
	{
		path: '/mail',
		component: mailApp,
	},
	{
		path: '/mail/:emailId',
		component: emailDetails,
	},
	{
		path: '/keep',
		component: keepApp,
	},
];

export const router = new VueRouter({ routes });
