import homePage from './pages/home-page.js';
import aboutPage from './pages/about-page.js';
import bookApp from './apps/book/pages/book-app.js';
import mailApp from './apps/mail/pages/email-app.js';
import keepApp from './apps/keep/pages/keep-app.js';

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
		path: '/keep',
		component: keepApp,
	},
];

export const router = new VueRouter({ routes });
