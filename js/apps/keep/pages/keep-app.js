import { keepService } from '../services/keep-service.js';
import NoteImg from '../cmps/note-img.js';
import NoteTxt from '../cmps/note-txt.js';
import NoteTodos from '../cmps/note-todos.js';
import keepHeader from '../cmps/keep-header.js';
import noteCreate from '../cmps/note-create.js';
export default {
	template: `
    <section>
    <keep-header />
    <note-create @updateKeeps="checkForChanges"/>
    <div class="keeps-container">
        <div v-for="keep in keeps" class="keep">
            <button @click="remove(keep.id)">x</button>
            <component  :is="keep.type" :info="keep.info"></component>
            <nav-bar></nav-bar>
        </div>
    </div>
    </section>
    `,
    data(){
        return {
            keeps : null,
        }
    },
    created(){
        keepService.read().then((keeps)=> {
            this.keeps = keeps
        });
    },
    components: {
        NoteImg,
        NoteTodos,
        NoteTxt,
        keepHeader,
        noteCreate,
    },
    methods: {
        checkForChanges(){
            keepService.read().then((keeps)=>{
                this.keeps=keeps
            })
        }
    }
};
