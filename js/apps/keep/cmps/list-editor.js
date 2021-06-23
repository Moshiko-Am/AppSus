export default {
    template: `
        <section class="list-editor">
            <input type="text" class="list-title" v-model="note.info.label" placeholder="List Name">
            <div>
                <button @click="addTodo">+</button>
                <input type="text" v-model="currTodo.txt" class="list-item">
            </div>
            <div v-if="note.info.todos.length" class="todos-list">
                <ul>
                    <li v-for="todo in note.info.todos">
                        <p>{{todo.txt}}</p>
                    </li>
                </ul>
            </div>
            <div class="edit-btns">
            <button @click="addNote">Add</button>
            </div>
        </section>
    `,
    data() {
        return {
            note: {
                type: "NoteTodos",
                info: {
                    label: "",
                    todos: [],
                }
            },
            noteToPost:null,
            currTodo : {txt:'' , isDone:false},
        }
    },
    methods: {
        addTodo() {
            this.note.info.todos.push(this.currTodo);
            this.currTodo = {txt:'' , isDone:false};
        },
        addNote(){
            this.noteToPost = this.note;
            this.note = {
                type: "NoteTodos",
                info: {
                    label: "",
                    todos: [],
                }
            },
            console.log(this.noteToPost);
            this.$emit('addNote', { ...this.noteToPost });
        },
    }
}