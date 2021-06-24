export default {
    template: `
        <section class="list-editor editor">
            <input type="text" class="list-title" v-model="note.info.label" placeholder="List Name">
            <div class="add-item-container">
                <input type="text" v-model="currTodo.txt">
                <button @click="addTodo">Add Item</button>
            </div>
            <div class="todos-list">
                <ul v-if="note.info.todos.length">
                    <li v-for="todo in note.info.todos" class="list-item">
                        <p>{{todo.txt}}</p>
                    </li>
                </ul>
            </div>
            <div class="edit-btns">
            <button class="add-btn" @click="addNote">Add</button>
            <button class="close-btn" @click="closeEditor">Close</button>
        </div>
        </section>
    `,
    data() {
        return {
            note: {
                type: "NoteTodos",
                isPinned: false,
                info: {
                    label: "",
                    todos: [],
                },
                style: {
                    backgroundColor: "white"
                },
            },
            noteToPost: null,
            currTodo: { txt: '', isDone: false },
        }
    },
    methods: {
        addTodo() {
            this.note.info.todos.push(this.currTodo);
            this.currTodo = { txt: '', isDone: false };
        },
        addNote() {
            this.noteToPost = this.note;
            this.note = {
                type: "NoteTodos",
                isPinned: false,
                info: {
                    label: "",
                    todos: [],
                },
                style: {
                    backgroundColor: "white"
                },
            },
                console.log(this.noteToPost);
            this.$emit('addNote', { ...this.noteToPost });
        },
        closeEditor(){
            this.$emit('closeEditor')
        }
    }
}