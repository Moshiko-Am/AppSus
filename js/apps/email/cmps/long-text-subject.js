export default {
	props: ['email'],
	template: `
    <article class="long-txt-subject-container">
        <span :class="isUnread" class="email-subject-txt">{{email.emailSubject}}</span>
    </article>
    `,
	data() {
		return {
			longSubject: false,
		};
	},
	computed: {
		showSubject() {
			if (this.longSubject)
				return this.email.emailSubject.substring(0, 69) + '...';
			return this.email.emailSubject;
		},
		isUnread() {
			return {
				unread: !this.email.isRead,
			};
		},
	},
	created() {
		if (this.email.emailSubject.length >= 70) this.longSubject = true;
	},
};
