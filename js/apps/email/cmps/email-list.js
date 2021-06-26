import emailPreview from './email-preview.js';
import { emailService } from '../services/email-service.js';

export default {
	props: ['emails'],
	components: {
		emailPreview,
	},
	template: `
    <section class="email-list-container">
		
        <ul class="email-list">
            <li class="email-item" v-for="email in emails" :key="email.id" v-if="!email.emailFrom">
                <email-preview :email="email" @remove="removeEmail" @read="readEmails" @star="setStar"/>
            </li>
        </ul>
    </section>
    `,
	data() {
		return {
			emailsCopy: this.emails,
		};
	},
	methods: {
		removeEmail(emailId) {
			this.reloadEmails();
			this.$emit('remove', emailId);
		},
		readEmails() {
			this.reloadEmails();
			this.$emit('read');
		},
		setStar() {
			this.reloadEmails();
			this.$emit('star');
		},
		reloadEmails() {
			emailService
				.read()
				.then((messages) => {
					this.emailsCopy = messages;
				})
				.catch((err) => {});
		},
	},
};
