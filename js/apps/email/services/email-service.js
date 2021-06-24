import { storageService } from '../../../services/async-storage-service.js';

const EMAIL_KEY = 'emailDB';

const starterEmails = [
	{
		id: storageService.makeId(),
		emailTo: 'moshiko@gmail.com',
		emailCc: 'tom@gmail.com',
		emailBcc: 'yaron@gmail.com',
		emailSubject: 'showing you my newest email app',
		emailBody:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda beatae quas, et vitae repellendus aperiam sit temporibus atque aut reprehenderit nostrum, impedit similique? Ipsam blanditiis alias eos molestias voluptatum voluptas a dolore praesentium saepe ad explicabo laboriosam, impedit commodi debitis iure, totam expedita et dolorem recusandae excepturi dignissimos quidem.',
		isRead: false,
		sentAt: Date.now(),
	},
	{
		id: storageService.makeId(),
		emailTo: 'tom@gmail.com',
		emailCc: 'moshiko@gmail.com',
		emailBcc: 'hadas@gmail.com',
		emailSubject: 'wave surfing is the best',
		emailBody:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, dolorum?',
		isRead: false,
		sentAt: Date.now(),
	},
	{
		id: storageService.makeId(),
		emailTo: 'yaron@gmail.com',
		emailCc: 'asaph@gmail.com',
		emailBcc: 'moshiko@gmail.com',
		emailSubject: 'getting you beIta Laparzzuf',
		emailBody:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium sint blanditiis maiores, nihil in corporis deserunt natus consequuntur est voluptatum voluptatem iure dicta reiciendis labore iste voluptate, inventore molestias velit deleniti omnis veniam. Recusandae, fuga? Quos illum quod accusantium quo, earum tenetur! Autem aspernatur sunt hic! Eaque, modi veniam! Dolore vitae veniam quas? Consequatur quia laborum, error aperiam iste magnam? Ea saepe nisi, nobis perferendis sapiente temporibus velit corporis quis libero odio, natus quia adipisci? Quibusdam maiores provident quis eaque fugiat sint nihil aliquam ipsum exercitationem, voluptatibus reiciendis esse adipisci sit repudiandae assumenda aspernatur dolorum pariatur! Perspiciatis delectus aliquid nihil, dicta laborum repudiandae illum molestias ullam reprehenderit et eum nulla nostrum quis dolorem. Ipsam soluta fugiat sapiente nulla quibusdam sed amet, debitis corrupti. Impedit enim debitis nulla, nostrum laborum eos perferendis. Qui iusto pariatur, commodi asperiores, velit reiciendis, magnam provident dignissimos quae neque iure laudantium ut ab nam at? Impedit ea temporibus fuga fugiat, eos velit cupiditate doloremque magnam consequuntur? Aut, accusamus. Aut, dolorem minima illum repudiandae odit quam harum inventore modi veritatis! Fugit sed, similique vero a atque harum unde vitae veritatis dolorum ab animi laborum velit, consequatur id odio nostrum architecto, voluptas incidunt nihil beatae quasi? Veritatis, nisi?',
		isRead: true,
		sentAt: Date.now(),
	},
	{
		id: storageService.makeId(),
		emailTo: 'hadas@gmail.com',
		emailCc: 'moshiko@gmail.com',
		emailBcc: 'tom@gmail.com',
		emailSubject: 'Curls are the best!!!',
		emailBody:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, in?',
		isRead: false,
		sentAt: Date.now(),
	},
	{
		id: storageService.makeId(),
		emailTo: 'shachar@gmail.com',
		emailCc: 'yaron@gmail.com',
		emailBcc: 'asaph@gmail.com',
		emailSubject: 'new research on limonchelo',
		emailBody:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ea sint suscipit minus nostrum nulla obcaecati quod, assumenda accusantium blanditiis necessitatibus ad deserunt. Quos aliquam numquam, quae, dolore nemo beatae itaque optio voluptates unde doloribus pariatur nostrum deserunt sunt culpa natus ad. Quaerat dignissimos non veritatis fugiat sed ipsam. Nostrum temporibus totam incidunt aliquid accusamus delectus provident autem perspiciatis earum vitae accusantium fugit deleniti, facere distinctio odio officia obcaecati molestiae ipsam consequatur natus. Placeat deleniti recusandae nemo tempore sed doloribus dolores aliquid ab! Magnam, quas sed iusto deserunt tempora quasi praesentium saepe! Aliquam quod, reprehenderit sequi ad corporis in dolorum?',
		isRead: true,
		sentAt: Date.now(),
	},
	{
		id: storageService.makeId(),
		emailTo: 'stu@gmail.com',
		emailCc: 'stav@gmail.com',
		emailBcc: 'mySelf@gmail.com',
		emailSubject: 'lets go to the new theater in town',
		emailBody:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus ratione accusantium sapiente modi odio amet facere omnis fugit. Delectus minus enim sequi expedita ad temporibus illo voluptatibus maxime cum. Veniam, amet! Amet assumenda expedita aut cupiditate perferendis voluptas ab excepturi pariatur porro quo natus sunt molestiae commodi, a nisi beatae.',
		isRead: false,
		sentAt: Date.now(),
	},
];

export const emailService = {
	create,
	read,
	update,
	remove,
	getEmailById,
};

function create(email) {
	email.sentAt = Date.now();
	return storageService.post(EMAIL_KEY, email);
}

function read() {
	return storageService.query(EMAIL_KEY).then((emails) => {
		if (emails.length) return emails;
		storageService.postMany(EMAIL_KEY, starterEmails);
		return starterEmails;
	});
}

function update(email) {
	return storageService.put(EMAIL_KEY, email);
}

function remove(emailId) {
	return storageService.remove(EMAIL_KEY, emailId);
}

function getEmailById(emailId) {
	return storageService.get(EMAIL_KEY, emailId);
}
