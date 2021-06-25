export default {
	props: ['txt'],
	template: `
        <article>
            <span class="book-description">
                Description: {{showTxt}}
            </span>
            <button v-if="showBtns" @click="toggleTxt">
                {{btnMsg}}
            </button>
            
        </article>
    `,
	data() {
		return {
			longTxt: false,
			showBtns: false,
			btnMsg: 'Show More...',
		};
	},
	methods: {
		toggleTxt() {
			this.longTxt = !this.longTxt;
			if (this.btnMsg === 'Show More...') {
				this.btnMsg = 'Show Less...';
			} else {
				this.btnMsg = 'Show More...';
			}
		},
	},
	computed: {
		showTxt() {
			if (this.longTxt) {
				return this.txt.slice(0, 99);
			} else {
				return this.txt;
			}
		},
	},
	created() {
		let text = this.txt;
		if (text.length >= 100) {
			this.longTxt = true;
			this.showBtns = true;
		}
	},
};
