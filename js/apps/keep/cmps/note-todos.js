import editKeepBar from "./edit-keep-bar.js";



export default {
    props: ['keep'],
    template: `
        <section class="note-todos" :style="bgColor">
        <button class="btn-keep-remove" @click="remove(keep.id)"><img src="img/trash.png" alt=""></button>
            <h3 class="todos-label">{{keep.info.label}}</h3>
            <ul class="todos-list">
                <li v-for="(todo,idx) in keep.info.todos" class="list-item">
                    <p>{{todo.txt}}</p>
                    <button @click="deleteTodo(idx)">Delete</button>
                </li>
            </ul>
            <edit-keep-bar @changeColor="changeBg"></edit-keep-bar>

        </section>
    `,
    methods: {
        remove(id) {
            this.$emit('removeKeep', id);
        },
        changeBg(color){
            this.keep.style.backgroundColor = color;
            this.$emit('updateKeep',this.keep);        
        },
        deleteTodo(idx){
            this.keep.info.todos.splice(idx,1);
            this.$emit('updateKeep',this.keep)
        }
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
