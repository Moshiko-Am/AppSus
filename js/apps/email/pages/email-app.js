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
    <section>
        <email-header />
        <main class="email-app-body" > 
            <email-compose v-if="composeShow" @closeCompose="toggleCompose" @send="sendEmail"/>
            <aside class="email-stats-container">
                <div class="compose-btn-container">
                    <button class="btn btn-compose-new" @click=toggleCompose>+ Compose</button>
                </div>
                <email-status :emails="emails"/>
            </aside>
            <div class="email-list-container" v-if="!composeShow && !detailsShow">
                <email-list :emails="emails" @remove="removeEmail" @showDetails="toggleDetails" />
            </div>
            <div class="email-details container" v-if="detailsShow && !composeShow && !listShow">
                <email-details />
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
		};
	},
	methods: {
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
	},
	created() {
		reloadEmails();
	},
};
