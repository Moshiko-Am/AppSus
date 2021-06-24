import { keepService } from '../services/keep-service.js';
import NoteImg from '../cmps/note-img.js';
import NoteTxt from '../cmps/note-txt.js';
import NoteTodos from '../cmps/note-todos.js';
import keepHeader from '../cmps/keep-header.js';
import noteCreate from '../cmps/note-create.js';
import editKeepBar from '../cmps/edit-keep-bar.js';



export default {
    template: `
    <section>
    <keep-header />
    <note-create @updateKeeps="checkForChanges"/>
    <div class="keeps-container">
        <!-- <div v-for="keep in keeps" class="keep"> -->
            <!-- <button @click="remove(keep.id)">x</button> -->
            <component v-for="keep in keeps" :is="keep.type" @removeKeep="remove" @updateKeep="updateKeep" :keep="keep" class="keep">
            </component>
            <!-- <edit-keep-bar></edit-keep-bar> -->
        </div>
    </div>
    </section>
    `,
    data() {
        return {
            keeps: null,
        }
    },
    created() {
        this.loadKeeps();
    },
    components: {
        NoteImg,
        NoteTodos,
        NoteTxt,
        keepHeader,
        noteCreate,
        editKeepBar,
    },
    methods: {
        checkForChanges() {
            this.loadKeeps()
            console.log('hi');
        },
        remove(keepId) {
            console.log(keepId);
            keepService.remove(keepId).then(() => {
                this.loadKeeps()
            })
        },
        loadKeeps() {
            keepService.read().then((keeps) => {
                this.keeps = keeps
            })
        },
        updateKeep(keep){
            keepService.update(keep);
        }
    }
};
