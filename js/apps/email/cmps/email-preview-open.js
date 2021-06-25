import { emailService } from '../services/email-service.js';
import longTextBody from './long-text-body.js';
import longTextSubject from './long-text-subject.js';

export default {
	props: ['email'],
	components: {
		longTextBody,
		longTextSubject,
	},
	template: `
    <section class="preview-open-container" >
        <header class="preview-open-header-container">
            <long-text-subject :email="email"></long-text-subject>
            <div class="preview-open-btns">
                <button class="btn btn-trash" @click.stop="removeEmail($event, email.id)">
                    <img src="img/trash.png" class="img preview-open-img" title="Remove Email">
                </button>
                <router-link :to="'/mail/' + email.id">
                    <button class="btn btn-square" @click="showDetails">
                        <img src="img/square.png" class="img preview-open-img" title="Open Email">
                    </button>
                </router-link>
            </div>
        </header>
        <div class="preview-sender-name">
            <span class="sender-name">{{showName}}</span>
            <span class="sender-email">{{showEmail}}</span>
        </div>
        <div class="preview-open-body-container">
            <long-text-body :email="email"></long-text-body>
        </div>
    </section>
    `,
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
		removeEmail(ev, emailId) {
			ev.stopPropagation();
			emailService.remove(emailId).then(() => {
				console.log(emailId);
				this.$emit('remove', emailId);
			});
		},
		showDetails() {
			console.log('showing');
			this.$emit('showDetails');
		},
	},
};
