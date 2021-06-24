import emailPreview from './email-preview.js';
import { emailService } from '../services/email-service.js';

export default {
	components: {
		emailPreview,
	},
	template: `
    <section class="email-list-container">
        <ul class="email-list">
            <li class="email-item" v-for="email in emailList" :key="email.id" v-if="email.emailFrom">
                <email-preview :email="email" @remove="removeEmail" @read="readEmails" @star="setStar"/>
            </li>
        </ul>
    </section>
    `,
	data() {
		return {
			emailList: null,
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
			emailService.read().then((messages) => {
				this.emailList = messages;
			});
		},
	},
	created() {
		emailService.read().then((messages) => {
			this.emailList = messages;
		});
	},
};
