import emailPreview from './email-preview.js';
import { emailService } from '../services/email-service.js';

export default {
	components: {
		emailPreview,
	},
	template: `
    <section class="email-list-container">
        <ul class="email-list">
            <li class="email-item" v-for="email in emailList" :key="email.id" v-if="email.isStar">
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
			emailService.read().then((messages) => {
				this.emailList = messages;
			});
			this.$emit('remove', emailId);
		},
		readEmails() {
			emailService.read().then((messages) => {
				this.emailList = messages;
			});
			this.$emit('read');
		},
		setStar() {
			emailService.read().then((messages) => {
				this.emailList = messages;
			});
			this.$emit('star');
		},
	},
	created() {
		emailService.read().then((messages) => {
			this.emailList = messages;
		});
	},
};
