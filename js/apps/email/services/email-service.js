import { storageService } from '../../../services/async-storage-service.js';

const EMAIL_KEY = 'emailDB';

export const emailService = {
	create,
	read,
	update,
	remove,
};

function create(email) {
	email.sentAt = Date.now();
	return storageService.post(EMAIL_KEY, email);
}

function read() {
	return storageService.query(EMAIL_KEY);
}

function update() {}

function remove(emailId) {
	return storageService.remove(EMAIL_KEY, emailId);
}
