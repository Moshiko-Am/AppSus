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
            <li class="email-item" v-for="email in emails" :key="email.id">
                <email-preview :email="email" @remove="removeEmail" />
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
		removeEmail() {
			this.$emit('remove');
		},
	},
	created() {
		emailService.read().then((messages) => {
			this.emailList = messages;
		});
	},
};
