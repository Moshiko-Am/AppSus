import editKeepBar from "../edit-keep-bar.js";



export default {
    props: ['keep'],
    template: `
        <section class="note-txt" :style="bgColor">
            <div class="top-btns">
                <button class="btn-keep-remove" title="Delete Note" @click="remove(keep.id)"><img src="img/trash.png" alt=""></button>
                <button class="btn-keep-pin" title="Pin Note" @click="togglePin"><img :src="imgUrl" alt=""></button>
            </div>
            <h3 contenteditable="true" ref="title" @input="titleChanged">{{keep.info.title}}</h3>
            <p contenteditable="true" ref="txt" @input="textChanged" class="note-content">{{keep.info.txt}}</p>
            <edit-keep-bar @changeColor="changeBg" :title="keep.info.title" :txt="keep.info.txt"></edit-keep-bar>
        </section>
    `,
    methods: {
        remove(id) {
            this.$emit('removeKeep', id);
        },
        changeBg(color) {
            this.keep.style.backgroundColor = color;
            this.$emit('updateKeep', this.keep)
        },
        titleChanged() {
            this.keep.info.title = this.$refs.title.innerText;
            this.$emit('updateKeep', this.keep)
        },
        textChanged() {
            this.keep.info.txt = this.$refs.txt.innerText;
            this.$emit('updateKeep', this.keep)
        },
        togglePin(){
            this.keep.isPinned = !this.keep.isPinned;
            this.$emit('updateKeep',this.keep)
        },
    },
    components: {
        editKeepBar
    },
    computed: {
        bgColor() {
            return { 'background-color': this.keep.style.backgroundColor }
        },
        imgUrl(){
            if(this.keep.isPinned) return 'img/keep-icons/full-pin.png'
            return 'img/keep-icons/empty-pin.png'
        }
    }
};
