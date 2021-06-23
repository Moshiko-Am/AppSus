import emailHeader from '../cmps/email-header.js';
import emailList from '../cmps/email-list.js';
import emailCompose from '../cmps/email-compose.js';
import { emailService } from '../services/email-service.js';
import { eventBus } from '../../../services/event-bus-service.js';

export default {
	components: {
		emailHeader,
		emailList,
		emailCompose,
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
                <div class="email-status-container">
                    <div class="email-status-inbox">
                        <img src="" />
                        <p>Inbox</p>
                    </div>
                    <div class="email-status-starred">
                        <img src="" />
                        <p>Starred</p>
                    </div>
                    <div class="email-status-sent-mail">
                        <img src="" />
                        <p>Sent Mail</p>
                    </div>
                    <div class="email-status-drafts">
                        <img src="" />
                        <p>Drafts</p>
                    </div>
                    <div class="email-status-bar">
                        <label>
                            <progress value="50" max="100">50%</progress>
                        </label>
                    </div>
                </div>
            </aside>
            <div class="email-list-container">
                <email-list v-if="!composeShow" :emails="emails" @remove="removeEmail"/>
            </div>
        </main>
    </section>
    `,
	data() {
		return {
			composeShow: false,
			emails: [],
		};
	},
	methods: {
		toggleCompose() {
			this.composeShow = !this.composeShow;
		},
		removeEmail() {
			emailService.read().then((messages) => {
				this.emails = messages;
			});
		},
		sendEmail() {
			emailService.read().then((messages) => {
				this.emails = messages;
			});
		},
	},
	created() {
		emailService.read().then((messages) => {
			this.emails = messages;
		});
	},
};
