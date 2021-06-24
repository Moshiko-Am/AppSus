import editKeepBar from "./edit-keep-bar.js";



export default {
    props: ['keep'],
    template: `
        <section class="note-txt" :style="bgColor">
        <button class="btn-keep-remove" @click="remove(keep.id)"><img src="img/trash.png" alt=""></button>
            <h3>{{keep.info.title}}</h3>
            <p class="note-content">{{keep.info.txt}}</p>
            <edit-keep-bar @changeColor="changeBg"></edit-keep-bar>
        </section>
    `,
    methods: {
        remove(id) {
            this.$emit('removeKeep', id);
        },
        changeBg(color){
            this.keep.style.backgroundColor = color;
            this.$emit('updateKeep',this.keep)       }
    },
    components: {
        editKeepBar
    },
    computed: {
        bgColor(){
            return {'background-color':this.keep.style.backgroundColor}
        }
    }
};
