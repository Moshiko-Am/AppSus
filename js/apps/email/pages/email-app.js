// import { emailService } from '../../services/async-storage-service.js';
import emailHeader from '../cmps/email-header.js';
import emailList from '../cmps/email-list.js';
import emailCompose from '../cmps/email-compose.js';

export default {
	components: {
		emailHeader,
		emailList,
		emailCompose,
	},
	template: `
    <section>
        <email-header />
        <main class="email-app-body">
            <div class="email-list-container">
                <!-- <email-list v-if="!composeShow"/> -->
            </div>
            <email-compose v-if="composeShow"/>
            <aside>
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
        </main>
    </section>
    `,
	data() {
		return {
			composeShow: false,
		};
	},
	methods: {
		toggleCompose() {
			this.composeShow = !this.composeShow;
		},
	},
};
