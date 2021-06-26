import homePage from './pages/home-page.js';
import aboutPage from './pages/about-page.js';
import bookApp from './apps/book/book-app.js';
import mailApp from './apps/email/pages/email-app.js';
import keepApp from './apps/keep/pages/keep-app.js';
import emailDetails from './apps/email/pages/email-details.js';
import emailList from './apps/email/cmps/email-list.js';
import emailSent from './apps/email/cmps/email-sent.js';
import emailStar from './apps/email/cmps/email-star.js';
import bookDetails from './apps/book/pages/book-details.js';
import bookAdd from './apps/book/cmps/book-add.js'

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
		path: '/book/:bookId',
		component: bookDetails,
	},
	{
		path: '/bookAdd',
		component: bookAdd,
	},

	{
		path: '/mail',
		component: mailApp,
		children: [
			{
				path: 'inbox',
				component: emailList,
			},
			{
				path: 'sent',
				component: emailSent,
			},
			{
				path: 'star',
				component: emailStar,
			},
		],
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
