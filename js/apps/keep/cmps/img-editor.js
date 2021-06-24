export default {
    template: `
        <section class="img-editor editor">
            <input type="text" class="url-input" v-model="imgUrl"  placeholder="Enter Image Url">
            <button @click="findImage">Get Image</button>
            <div>
                <img :src="note.info.url" alt="">
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
                type: "NoteImg",
                isPinned: false,
                info: {
                    url: "",
                    title: ""
                },
                style: {
                    backgroundColor: "white"
                },
            },
            imgUrl:null,
            noteToPost:null,
        }
    },
    methods: {
        addNote(){
            this.noteToPost = this.note;
            this.note = {
                type: "NoteImg",
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
        findImage(){
            this.note.info.url = this.imgUrl;
        }
    }
}