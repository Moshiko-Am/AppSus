import { emailService } from '../services/email-service.js';

export default {
	template: `
    <section class="compose-wrapper">
        <header class="compose-header-container">
            <h3 class="compose-header">New Message</h3>
            <button class="btn btn-close-compose" @click="closeCompose">X</button>
        </header>
        <main class="compose-body-container">
            <div class="compose-properties">
                <div class="compose-container">
                    <span class="compose-to">To:</span>
                    <input type="text" v-model="email.emailTo"/>
                </div>
                <div class="compose-container">
                    <span class="compose-cc">Cc:</span>
                    <input type="text" v-model="email.emailCc"/>
                </div>
                <div class="compose-container">
                    <span class="compose-bcc">Bcc:</span>
                    <input type="text" v-model="email.emailBcc"/>
                </div>
                <div class="compose-container">
                    <span class="compose-subject">Subject</span>
                    <input type="text" v-model="email.emailSubject"/>
                </div>
            </div>
            <div class="compose-txt-area-container">
                <textarea cols="30" rows="30" class="compose-txt" v-model="email.emailBody"></textarea>
            </div>
        </main>
        <footer class="compose-footer-container">
            <button class="btn compose-btn-send" @click="sendEmail">Send</button>
            <button class="btn compose-btn-erase">
                <img src="img/trash.png" class="img compose-erase-img">
            </button>
        </footer>
    </section>
    `,
	data() {
		return {
			email: {
				emailTo: '',
				emailCc: '',
				emailBcc: '',
				emailSubject: '',
				emailBody: '',
				isRead: false,
				sentAt: '',
			},
		};
	},
	methods: {
		closeCompose() {
			this.$emit('closeCompose');
		},
		sendEmail() {
			emailService.create(this.email).then(() => {
				console.log('bye');
				this.$emit('send');
			});
			this.closeCompose();
		},
	},
};
