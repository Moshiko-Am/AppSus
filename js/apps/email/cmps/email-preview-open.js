import { emailService } from '../services/email-service.js';

export default {
	props: ['email'],
	template: `
    <section class="preview-open-container">
        <header class="preview-open-header-container">
            <h2 class="preview-open-header">{{email.emailSubject}}</h2>
            <div class="preview-open-btns">
                <button class="btn" @click="removeEmail">
                    <img src="img/trash.png" class="img preview-open-img">
                </button>
                    <button class="btn">
                        <img src="img/square.png" class="img">
                    </button>
            </div>
        </header>
        <div class="preview-sender-name">
            <span class="sender-name">{{email.emailTo}}</span>
            <span class="sender-email">{{showEmail}}</span>
        </div>
        <div class="preview-open-body-container">
            <p class="preview-open-body">{{email.emailBody}}</p>
        </div>
    </section>
    `,
	data() {
		return {};
	},
	computed: {
		showEmail() {
			return '<' + this.email.emailTo + '@gmail.com>';
		},
	},
	methods: {
		removeEmail(emailId) {
			emailService.remove(emailId).then(() => {
				this.$emit('remove');
			});
		},
	},
};
