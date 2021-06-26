import emailHeader from '../cmps/email-header.js';
import emailList from '../cmps/email-list.js';
import emailCompose from '../cmps/email-compose.js';
import emailDetails from '../pages/email-details.js';
import emailStatus from '../cmps/email-status.js';
import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
	components: {
		emailHeader,
		emailList,
		emailCompose,
		emailDetails,
		emailStatus,
	},
	template: `
    <section class="email-app">
        <email-header @filtered="setFilter" @mobile="setMobile"/>
        <main class="email-app-body" > 
			<aside class="email-stats-container">
				<div class="compose-btn-container">
					<button class="btn btn-compose-new" @click=toggleCompose>
						<img src="img/plus.png" class="img img-plus" title="New Message">	
					</button>
				</div>
				<email-status :emails="emails" :mobile="isMobile"/>
			</aside>
            <email-compose v-show="composeShow" @closeCompose="toggleCompose" @send="sendEmail" :subject="urlSubject" :body="urlBody"/>
            <router-view :emails="emailsToShow" @star="reloadEmails" @read="reloadEmails" @remove="removeEmail" v-show="!composeShow"></router-view>
            <div class="email-details-container" v-if="detailsShow && !composeShow && !listShow">
				<email-details @remove="removeEmail"/>
            </div>
        </main>
    </section>
    `,
	data() {
		return {
			composeShow: false,
			detailsShow: false,
			listShow: false,
			emails: [],
			filterBy: null,
			urlSubject: null,
			urlBody: null,
			isMobile: false,
		};
	},
	methods: {
		setMobile() {
			this.isMobile = !this.isMobile;
		},
		toggleCompose() {
			this.composeShow = !this.composeShow;
			this.detailsShow = false;
			this.listShow = false;
		},
		toggleDetails() {
			this.detailsShow = true;
			this.composeShow = false;
			this.listShow = false;
		},
		removeEmail() {
			this.reloadEmails();
		},
		sendEmail() {
			this.reloadEmails();
		},
		reloadEmails() {
			emailService.read().then((messages) => {
				this.emails = messages;
			});
		},
		setFilter(filterBy) {
			this.filterBy = filterBy;
		},
	},
	computed: {
		emailsToShow() {
			if (!this.filterBy) return this.emails;
			const searchStr = this.filterBy.txt.toLowerCase();
			const filter = this.filterBy.filter;
			const emailsToShow = this.emails.filter((email) => {
				if (filter === 'ALL') {
					return (
						email.emailBcc.toLowerCase().includes(searchStr) ||
						email.emailBody.toLowerCase().includes(searchStr) ||
						email.emailCc.toLowerCase().includes(searchStr) ||
						email.emailSubject.toLowerCase().includes(searchStr) ||
						email.emailTo.toLowerCase().includes(searchStr)
					);
				} else if (filter === 'READ') {
					return (
						(email.emailBcc.toLowerCase().includes(searchStr) ||
							email.emailBody.toLowerCase().includes(searchStr) ||
							email.emailCc.toLowerCase().includes(searchStr) ||
							email.emailSubject
								.toLowerCase()
								.includes(searchStr) ||
							email.emailTo.toLowerCase().includes(searchStr)) &&
						email.isRead
					);
				} else if (filter === 'UNREAD') {
					return (
						(email.emailBcc.toLowerCase().includes(searchStr) ||
							email.emailBody.toLowerCase().includes(searchStr) ||
							email.emailCc.toLowerCase().includes(searchStr) ||
							email.emailSubject
								.toLowerCase()
								.includes(searchStr) ||
							email.emailTo.toLowerCase().includes(searchStr)) &&
						!email.isRead
					);
				}
			});
			return emailsToShow;
		},
	},
	created() {
		this.reloadEmails();
		const subject = this.$route.query.subject;
		const body = this.$route.query.body;
		if (subject || body) {
			this.composeShow = true;
			this.urlSubject = subject;
			this.urlBody = body;
		}
	},
};
