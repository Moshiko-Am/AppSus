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
            note:{
                type: "NoteVid",
                info: {
                    url: "",
                    title: ""
                },
            },
            videoUrl:null,
            noteToPost:null,
        }
    },
    methods: {
        addNote(){
            this.noteToPost = this.note;
            this.note = {
                type: "NoteVid",
                info: {
                    url: "",
                    title: ""
                },
            },
            console.log(this.noteToPost);
            this.$emit('addNote', { ...this.noteToPost });
        },
        findVideo(){
            console.log('Hi');
            this.note.info.url = this.videoUrl;
        }
    }
}