import editKeepBar from "./edit-keep-bar.js";



export default {
    props: ['keep'],
    template: `
        <section class="note-todos" :style="bgColor">
            <div class="top-btns">
                <button class="btn-keep-remove" @click="remove(keep.id)"><img src="img/trash.png" alt=""></button>
                <button class="btn-keep-pin" @click="togglePin"><img :src="imgUrl" alt=""></button>
            </div>
            <h3 contenteditable="true" class="todos-label">{{keep.info.label}}</h3>
            <ul class="todos-list">
                <li  v-for="(todo,idx) in keep.info.todos" class="list-item">
                    <p contenteditable="true" ref="listItem" :class="{finished:todo.isDone}" @input="itemChanged(idx)">{{todo.txt}}</p>
                    <button class="remove-item-btn" @click="toggleTodo(idx)"><img :src="isChecked" alt=""></button>
                    <button class="remove-item-btn" @click="deleteTodo(idx)"><img src="img/remove.png" alt=""></button>
                </li>
            </ul>
            <edit-keep-bar @changeColor="changeBg" :title="keep.info.label" :txt="todosListTxt"></edit-keep-bar>
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
        },
        itemChanged(idx){
            // console.log(this.$refs.listItem[0]);
            this.keep.info.todos[idx].txt = this.$refs.listItem[idx].innerText
            this.$emit('updateKeep',this.keep)
        },
        togglePin(){
            this.keep.isPinned = !this.keep.isPinned;
            this.$emit('updateKeep',this.keep)
        },
        toggleTodo(idx){
            this.keep.info.todos[idx].isDone = !this.keep.info.todos[idx].isDone
            this.$emit('updateKeep',this.keep)
            console.log('hi');
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
        },
        isChecked(){
            if(this.keep.info.todos.isDone) return 'img/circle-check.png';
            return 'img/circle-uncheck.png';
        },
        todosListTxt(){
            let txt = '';
            this.keep.info.todos.forEach((todo)=> {
                txt += todo.txt + '\n' 
            })
            return txt;
        }
    }
};
