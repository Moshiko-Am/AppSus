export default {
    template: `
    <section class="txt-editor editor">
        <input type="text" class="txt-title" v-model="note.info.title" placeholder="Title">
        <textarea class="txt-content" v-model="note.info.txt" placeholder="Your Note..." cols="30" rows="10"></textarea>
        <div class="edit-btns">
            <input type="color">
            <button @click="addNote">Add</button>
            <button @click="togglePin">pin</button>
        </div>
    </section>
    `,
    data() {
        return {
            note: {
                type: "NoteTxt",
                isPinned: false,
                info: {
                    title: null,
                    txt: null,
                },
                style: {
                    backgroundColor: "white"
                },
            },
            noteToPost: null,
        }
    },
    methods: {
        addNote() {
            this.noteToPost = this.note;
            this.note = {
                type: "NoteTxt",
                isPinned: false,
                info: {
                    title: null,
                    txt: null,
                },
                style: {
                    backgroundColor: "white"
                },
            }
            console.log(this.noteToPost);
            this.$emit('addNote', { ...this.noteToPost });
        },
        togglePin() {
            this.note.isPinned = !this.note.isPinned;
        }
    },
}