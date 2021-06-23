import editKeepBar from "./edit-keep-bar.js";



export default {
    props: ['info', 'id'],
    template: `
        <section class="note-txt" :class="colorClass">
        <button class="btn-keep-remove" @click="remove(id)"><img src="img/trash.png" alt=""></button>
            <h3>{{info.title}}</h3>
            <p class="note-content">{{info.txt}}</p>
            <edit-keep-bar @changeColor="changeBg"></edit-keep-bar>
        </section>
    `,
    data() {
        return {
            color: '',
        }
    },
    methods: {
        remove(id) {
            this.$emit('removeKeep', id);
        },
        changeBg(color) {
            this.color = color;
        }
    },
    components: {
        editKeepBar
    },
    computed: {
        colorClass(){
            return this.color;
        }
    }
};
