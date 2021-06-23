import { keepService } from '../services/keep-service.js';
import NoteImg from '../cmps/note-img.js';
import NoteTxt from '../cmps/note-txt.js';
import NoteTodos from '../cmps/note-todos.js';
import keepHeader from '../cmps/keep-header.js';

export default {
	template: `
    <section>
    <keep-header></keep-header>
    <div class="keeps-container">
    <component v-for="keep in keeps" :is="keep.type" :info="keep.info" class="keep"></component>
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
    }
};
