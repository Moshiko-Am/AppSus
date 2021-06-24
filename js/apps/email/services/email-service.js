import { storageService } from '../../../services/async-storage-service.js';

const EMAIL_KEY = 'emailDB';

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
	return storageService.query(EMAIL_KEY).then((res) => {
		if (!res.length) {
			// return createEmails()
		}
	});
}

function update(emailId) {
	return storageService.put(EMAIL_KEY, emailId);
}

function remove(emailId) {
	return storageService.remove(EMAIL_KEY, emailId);
}

function getEmailById(emailId) {
	return storageService.get(EMAIL_KEY, emailId);
}
