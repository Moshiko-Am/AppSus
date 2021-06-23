import emailPreviewOpen from './email-preview-open.js';

export default {
	props: ['email'],
	components: {
		emailPreviewOpen,
	},
	template: `
        <section>
            <div class="email-preview-container" @click="togglePreview">
                <span :class="isUnread" class="email-to-txt">{{email.emailTo}}</span>
                <div class="preview-body-subject">
                    <span :class="isUnread" class="email-subject-txt">{{email.emailSubject}}</span>
                    <span :class="isUnread" class="email-body-txt">{{email.emailBody}}</span>
                </div>
                <span :class="isUnread" class="email-sent-at">{{showTime}}</span>
            </div>
            <email-preview-open :email="email" v-if="openPreview" @remove="removeEmail"/>
        </section>
    `,
	data() {
		return {
			openPreview: false,
		};
	},
	methods: {
		togglePreview() {
			this.openPreview = !this.openPreview;
			this.readEmail();
		},
		removeEmail() {
			this.$emit('remove');
		},
		readEmail() {
			this.email.isRead = true;
		},
	},
	computed: {
		showTime() {
			let time = this.email.sentAt;
			time = new Date(time);
			let hour = time.getHours();
			let minutes = time.getMinutes();

			if (hour < 10) hour = '0' + hour;
			if (minutes < 10) minutes = '0' + minutes;

			time = `${hour}:${minutes}`;
			if (hour > 12) return time + ' PM';
			return time + ' AM';
		},
		isUnread() {
			return {
				unread: !this.email.isRead,
			};
		},
	},
};
