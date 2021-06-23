import editKeepBar from "./edit-keep-bar.js";



export default {
    props: ['info', 'id'],
    template: `
        <section class="note-todos" :class="colorClass">
        <button class="btn-keep-remove" @click="remove(id)"><img src="img/trash.png" alt=""></button>
            <h3 class="todos-label">{{info.label}}</h3>
            <ul class="todos-list">
                <li v-for="(todo,idx) in info.todos" class="list-item">
                    <p>{{todo.txt}}</p>
                    <button>Delete</button>
                </li>
            </ul>
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
