export default {
    template: `
        <section class="img-editor editor">
            <div class="img-url-container">
                <input type="text" class="url-input" v-model="imgUrl"  placeholder="Enter Image Url">
                <button class="img-btn" @click="findImage">Get Image</button>
            </div>
            <img :src="note.info.url" alt="">
            <input type="text" v-model="note.info.title" placeholder="Your Title" class="img-title">
            <div class="edit-btns">
                <button class="add-btn" @click="addNote"><img src="img/google plus.png" alt=""></button>
                <button class="close-btn" @click="closeEditor"><img src="img/cross.png" alt=""></button>
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
        },
        closeEditor(){
            this.$emit('closeEditor')
        }
    }
}