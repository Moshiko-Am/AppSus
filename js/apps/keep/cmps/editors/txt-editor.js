export default {
	template: `
    <section class="txt-editor editor">
        <input type="text" class="txt-title" v-model="note.info.title" placeholder="Title">
        <textarea class="txt-content" v-model="note.info.txt" placeholder="Your Note..." cols="30" rows="10"></textarea>
        <div class="edit-btns">
            <button class="add-btn" title="Add This Note" @click="addNote"><img src="img/plus.png" alt=""></button>
            <button class="close-btn" title="Cancel" @click="closeEditor"><img src="img/keep-icons/cross.png" alt=""></button>
        </div>
    </section>
    `,
	data() {
		return {
			note: {
				type: 'noteTxt',
				isPinned: false,
				info: {
					title: null,
					txt: null,
				},
				style: {
					backgroundColor: 'white',
				},
			},
			noteToPost: null,
		};
	},
	methods: {
		addNote() {
			this.noteToPost = this.note;
			this.note = {
				type: 'NoteTxt',
				isPinned: false,
				info: {
					title: null,
					txt: null,
				},
				style: {
					backgroundColor: 'white',
				},
			};
			this.$emit('addNote', { ...this.noteToPost });
		},
		togglePin() {
			this.note.isPinned = !this.note.isPinned;
		},
		closeEditor() {
			this.$emit('closeEditor');
		},
	},
};
