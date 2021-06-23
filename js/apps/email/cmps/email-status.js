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
                            <progress value="50" max="100" @click="logNum">50%</progress>
                        </label>
                    </div>
                </div>
    `,
	data() {
		return {
			statusMails: null,
		};
	},
	methods: {
		logNum() {
			console.log(this.statusMails.length);
		},
	},
	mounted() {
		this.sumMails = this.emails.length;
	},
	created() {
		emailService.read().then((messages) => {
			this.statusMails = messages;
		});
	},
};
