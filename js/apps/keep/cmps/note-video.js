import editKeepBar from "./edit-keep-bar.js";


export default {
    props: ['keep'],
    template: `
        <section class="note-img" :style="bgColor">
            <div class="top-btns">
                <button class="btn-keep-remove" title="Delete Note" @click="remove(keep.id)"><img src="img/trash.png" alt=""></button>
                <button class="btn-keep-pin" title="Pin Note" @click="togglePin"><img :src="imgUrl" alt=""></button>
            </div>
            <h3>{{keep.info.title}}</h3>
            <iframe :src="keep.info.url" alt=""></iframe>
            <edit-keep-bar @changeColor="changeBg" :title="keep.info.title" :txt="'Check out my new video: '+keep.info.url"></edit-keep-bar>
        </section>
    `,
    methods: {
        remove(id) {
            this.$emit('removeKeep', id);
        },
        changeBg(color){
            this.keep.style.backgroundColor = color;
            this.$emit('updateKeep',this.keep)
        },
        togglePin(){
            this.keep.isPinned = !this.keep.isPinned;
            this.$emit('updateKeep',this.keep)
        }
    },
    components: {
        editKeepBar
    },
    computed: {
        bgColor(){
            return {'background-color':this.keep.style.backgroundColor}
        },
        imgUrl(){
            if(this.keep.isPinned) return 'img/full-pin.png'
            return 'img/empty-pin.png'
        }
    }
};
