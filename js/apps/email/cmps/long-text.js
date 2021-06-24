export default {
	props: ['email'],
	template: `
    <article>
        <span :class="isUnread" class="email-subject-txt">{{email.emailSubject}}</span>
        <span :class="isUnread" class="email-body-txt">{{showBody}}</span>
    </article>
    `,
	data() {
		return {
			// longSubject: false,
			longBody: false,
		};
	},
	computed: {
		showBody() {
			if (this.longBody)
				return this.email.emailBody.substring(0, 69) + '...';
			return this.email.emailBody;
		},
		isUnread() {
			return {
				unread: !this.email.isRead,
			};
		},
	},
	created() {
		if (this.email.emailBody.length >= 70) this.longBody = true;
	},
};
