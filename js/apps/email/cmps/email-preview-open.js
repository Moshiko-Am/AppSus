import { emailService } from '../services/email-service.js';

export default {
	props: ['email'],
	template: `
    <section class="preview-open-container" >
        <header class="preview-open-header-container">
            <h2 class="preview-open-header">{{email.emailSubject}}</h2>
            <div class="preview-open-btns">
                <button class="btn" @click="removeEmail">
                    <img src="img/trash.png" class="img preview-open-img">
                </button>
                <router-link :to="'/mail/' + email.id">
                    <button class="btn" @click="showDetails">
                        <img src="img/square.png" class="img">
                    </button>
                </router-link>
            </div>
        </header>
        <div class="preview-sender-name">
            <span class="sender-name">{{showName}}</span>
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
		showName() {
			let name = this.email.emailTo.split('@');
			return name[0];
		},
	},
	methods: {
		removeEmail(emailId) {
			emailService.remove(emailId).then(() => {
				this.$emit('remove');
			});
		},
		showDetails() {
			console.log('showing');
			this.$emit('showDetails');
		},
	},
};
