import { emailService } from '../services/email-service.js';
export default {
	props: ['emails'],
	template: `
    <div class="email-status-container">
                    <div class="email-status ">
                        <img src="img/inbox.png" class="img img-inbox" />
                        <p>Inbox</p>
                    </div>
                    <div class="email-status ">
                        <img src="img/star.png" class="img img-star"/>
                        <p>Starred</p>
                    </div>
                    <div class="email-status">
                        <img src="img/sent-mails.png" class="img img-sent"/>
                        <p>Sent Mail</p>
                    </div>
                    <div class="email-status">
                        <img src="img/draft-mails.png" class="img img-drafts"/>
                        <p>Drafts</p>
                    </div>
                    <div class="email-status-bar">
                        <label>
                            <progress :value="sumOfRead" :max="sumOfMails"></progress>
                        </label>
                    </div>
                </div>
    `,
	data() {
		return {
			statusMails: [],
			isRead: 0,
		};
	},
	methods: {
		getReadEmails() {
			emailService.read().then((messages) => {
				this.statusMails = messages;
			});
		},
	},
	computed: {
		sumOfMails() {
			return this.statusMails.length;
		},
		sumOfRead() {
			this.isRead = 0;
			this.emails.forEach((email) => {
				if (email.isRead) this.isRead++;
			});
			return this.isRead;
		},
	},
	mounted() {
		this.statusMails = this.emails;
	},
	created() {
		this.getReadEmails();
	},
};
