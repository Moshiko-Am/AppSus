export default {
    template: `
        <section class="list-editor editor">
            <input type="text" class="list-title" v-model="note.info.label" placeholder="List Name">
            <div class="add-item-container">
                <input type="text" placeholder="List Item" v-model="currTodo.txt">
                <button @click="addTodo">Add Item</button>
            </div>
            <div class="todos-list">
                <ul v-if="note.info.todos.length">
                    <li v-for="(todo,idx) in note.info.todos" class="list-item">
                        <p>{{todo.txt}}</p><button @click="removeTodo(idx)" class="remove-item-btn"><img src="img/remove.png" alt=""></button>
                    </li>
                </ul>
            </div>
            <div class="edit-btns">
                <button class="add-btn" title="Add This Note" @click="addNote"><img src="img/plus.png" alt=""></button>
                <button class="close-btn" title="Cancel" @click="closeEditor"><img src="img/cross.png" alt=""></button>
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
        },
        removeTodo(idx){
            this.note.info.todos.splice(idx,1);
        }
    }
}