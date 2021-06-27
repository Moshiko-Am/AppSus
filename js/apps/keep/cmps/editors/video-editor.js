export default {
	template: `
        <section class="img-editor editor">
            <div class="img-url-container">
                <input type="text" class="url-input" v-model="videoUrl"  placeholder="Enter video Url">
                <button class="img-btn" @click="findVideo">Get video</button>
            </div>
                <iframe :src="note.info.url"></iframe>
            <input type="text" v-model="note.info.title" placeholder="Video Title" class="img-title">
            <div class="edit-btns">
            <button class="add-btn" title="Add This Note" @click="addNote"><img src="img/plus.png" alt=""></button>
            <button class="close-btn" title="Cancel" @click="closeEditor"><img src="img/keep-icons/cross.png" alt=""></button>
        </div>
        </section>
    `,
	data() {
		return {
			note: {
				type: 'noteVid',
				isPinned: false,
				info: {
					url: '',
					title: '',
				},
				style: {
					backgroundColor: 'white',
				},
			},
			videoUrl: null,
			noteToPost: null,
		};
	},
	methods: {
		addNote() {
			this.noteToPost = this.note;
			(this.note = {
				type: 'NoteVid',
				isPinned: false,
				info: {
					url: '',
					title: '',
				},
				style: {
					backgroundColor: 'white',
				},
			}),
				this.$emit('addNote', { ...this.noteToPost });
		},
		findVideo() {
			this.note.info.url =
				'https://www.youtube.com/embed/' + this.videoUrl.split('=')[1];
		},
		closeEditor() {
			this.$emit('closeEditor');
		},
	},
};
