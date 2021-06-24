export default {
    template: `
        <section class="img-editor editor">
            <input type="text" class="url-input" v-model="videoUrl"  placeholder="Enter video Url">
            <button @click="findVideo">Get video</button>
            <div>
                <iframe :src="note.info.url"></iframe>
            </div>
            <input type="text" v-model="note.info.title" class="img-title">
            <div class="edit-btns">
            <button @click="addNote">Add</button>
            </div>
        </section>
    `,
    data() {
        return {
            note: {
                type: "NoteVid",
                isPinned: false,
                info: {
                    url: "",
                    title: ""
                },
                style: {
                    backgroundColor: "white"
                },
            },
            videoUrl: null,
            noteToPost: null,
        }
    },
    methods: {
        addNote() {
            this.noteToPost = this.note;
            this.note = {
                type: "NoteVid",
                isPinned: false,
                info: {
                    url: "",
                    title: ""
                },
                style: {
                    backgroundColor: "white"
                },
            },
                console.log(this.noteToPost);
            this.$emit('addNote', { ...this.noteToPost });
        },
        findVideo() {
            this.note.info.url = 'https://www.youtube.com/embed/'+this.videoUrl.split('=')[1];
        }
    }
}