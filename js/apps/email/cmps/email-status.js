import { emailService } from '../services/email-service.js';
export default {
	props: ['emails', 'mobile'],
	template: `
    <div class="email-status-container" :class="doMobile">
                    <router-link to="/mail/inbox" class-active="active-link">
						<div class="email-status">
							<img src="img/inbox.png" class="img img-inbox" />
							<p>Inbox {{sumOfUnread}}</p>
						</div>
					</router-link>
                    <router-link to="/mail/star" active-class="active-link" exact>
						<div class="email-status ">
							<img src="img/starYellow.png" class="img img-star"/>
							<p>Starred {{sumOfStarred}}</p>
						</div>
					</router-link>
                    <router-link to="/mail/sent" active-class="active-link" exact>
						<div class="email-status" >
							<img src="img/sent-mails.png" class="img img-sent"/>
							<p>Sent Mail {{sumOfSent}}</p>
						</div>
					</router-link>
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
			isUnread: 0,
			isStar: 0,
			isSent: 0,
		};
	},
	methods: {
		getReadEmails() {
			emailService.read().then((messages) => {
				this.statusMails = messages;
			});
		},
		setSent(isInbox) {
			this.$emit('sent', isInbox);
		},
	},
	computed: {
		sumOfMails() {
			let count = 0;
			this.emails.forEach((mail) => {
				if (!mail.emailFrom) count++;
			});
			return count;
		},
		sumOfRead() {
			this.isRead = 0;
			this.emails.forEach((email) => {
				if (email.isRead && !email.emailFrom) this.isRead++;
			});
			return this.isRead;
		},
		sumOfUnread() {
			this.isUnread = 0;
			this.emails.forEach((email) => {
				if (!email.isRead) this.isUnread++;
			});
			return ` (${this.isUnread})`;
		},
		doMobile() {
			return { 'menu-mobile': this.mobile };
		},
		sumOfStarred() {
			this.isStar = 0;
			this.emails.forEach((email) => {
				if (email.isStar) this.isStar++;
			});
			return ` (${this.isStar})`;
		},
		sumOfSent() {
			this.isSent = 0;
			this.emails.forEach((email) => {
				if (email.emailFrom) this.isSent++;
			});
			return ` (${this.isSent})`;
		},
	},
	mounted() {
		this.statusMails = this.emails;
	},
	created() {
		this.getReadEmails();
	},
};
