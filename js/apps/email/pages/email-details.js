import { emailService } from '../services/email-service.js';
import emailHeader from '../cmps/email-header.js';
import emailCompose from '../cmps/email-compose.js';

export default {
	components: {
		emailHeader,
		emailCompose,
	},
	template: `
    <section class="email-details-container" v-if="email">
        <email-header />
        <header class="email-details-header-container">
            <h1 class="email-details-subject">{{this.email.emailSubject}}</h1>
			<router-link to="/mail/inbox" title="Go Back">
				<img src="img/previous.png" class="img">
		</router-link>
        </header>
        <main class="email-details-body-container">
            <div class="details-body-header-container">
                <h3 class="details-body-header">From: {{this.email.emailTo}}</h3>
                <div class="details-body-header-btns">
					<button class="btn" @click="emailReply" title="Reply">
						<img src="img/reply.png" class="img">
                    </button>
					<router-link to="/mail/inbox">
						<button class="btn" @click="removeEmail(email.id)" title="Remove Email">
							<img src="img/trash.png" class="img">
						</button>
					</router-link>
                </div>
            </div>
            <div class="details-body-txt-container">
                <p class="details-body-txt">{{this.email.emailBody}}</p>
            </div>
        </main>
        <div class="email-compose-container" v-show="showCompose">
            <email-compose :emailSubject="email.emailSubject" :emailAddress="email.emailTo" @closeCompose="close"/>
        </div>
    </section>
    `,
	data() {
		return {
			email: null,
			showCompose: false,
		};
	},
	watch: {
		'$route.params.emailId': {
			immediate: true,
			handler() {
				const { emailId } = this.$route.params;
				emailService
					.getEmailById(emailId)
					.then((email) => (this.email = email));
			},
		},
	},
	methods: {
		emailReply() {
			this.showCompose = !this.showCompose;
		},
		close() {
			this.showCompose = false;
		},
		removeEmail(emailId) {
			emailService.remove(emailId);
			this.$emit('remove');
		},
	},
};
