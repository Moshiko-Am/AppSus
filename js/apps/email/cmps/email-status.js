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
                            <progress value="sumOfRead" max="sumOfMails"></progress>
                        </label>
                    </div>
                </div>
    `,
	data() {
		return {
			statusMails: null,
		};
	},
	methods: {},
	computed: {
		sumOfMails() {
			return this.statusMails.length;
		},
		sumOfRead() {
			let sum = this.statusMails.map((mail) => {
				if (mail.isRead) sum++;
			});
			return sum;
		},
	},
	mounted() {
		this.statusMails = this.emails;
	},
	created() {
		emailService.read().then((messages) => {
			this.statusMails = messages;
		});
	},
};
