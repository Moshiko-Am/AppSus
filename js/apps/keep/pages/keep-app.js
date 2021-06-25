import { keepService } from '../services/keep-service.js';
import NoteImg from '../cmps/note-img.js';
import NoteTxt from '../cmps/note-txt.js';
import NoteTodos from '../cmps/note-todos.js';
import NoteVid from '../cmps/note-video.js';
import keepHeader from '../cmps/keep-header.js';
import noteCreate from '../cmps/note-create.js';
import editKeepBar from '../cmps/edit-keep-bar.js';



export default {
    template: `
    <section class="keep-app">
    <keep-header @filter="setFilter" />
    <note-create @updateKeeps="loadKeeps"/>
    <div class="keeps-container">
        <component v-for="keep in keepsToShow" v-if="keep.isPinned" :is="keep.type" @removeKeep="remove" @updateKeep="updateKeep" :keep="keep" class="keep">
        </component>
    </div>
    <div class="keeps-container">
            <component v-for="keep in keepsToShow" v-if="!keep.isPinned" :is="keep.type" @removeKeep="remove" @updateKeep="updateKeep" :keep="keep" class="keep">
            </component>
        </div>
    </div>
    </section>
    `,
    data() {
        return {
            keeps: null,
            filter: null
        }
    },
    created() {
        this.loadKeeps();
    },
    components: {
        NoteImg,
        NoteTodos,
        NoteTxt,
        NoteVid,
        keepHeader,
        noteCreate,
        editKeepBar,
    },
    methods: {
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
        updateKeep(keep) {
            keepService.update(keep).then(()=>{
                this.loadKeeps();
            })
        },
        setFilter(filter) {
            this.filter = filter;
            console.log(this.filter);
        }
    },
    computed: {
        keepsToShow() {
            if (!this.filter) return this.keeps;
            const searchStr = this.filter.txt.toLowerCase();
            const type = this.filter.type;
            const keepsToShow = this.keeps.filter((keep) => {
                console.log(this.keeps);
                console.log(keep);
                if (type === 'ALL') {
                    if (keep.type === 'NoteTodos') {
                        if(!keep.info.label) return keep;
                        return (keep.info.label.toLowerCase().includes(searchStr));
                    }
                    else {
                        if(!keep.info.title) return keep;
                        return (keep.info.title.toLowerCase().includes(searchStr))
                    }
                } else if (type === 'NoteTodos') {
                    return (
                        keep.type === 'NoteTodos' && keep.info.label.toLowerCase().includes(searchStr)
                    );
                } else if (type === 'NoteImg') {
                    return (
                        keep.type === 'NoteImg' && keep.info.title.toLowerCase().includes(searchStr)
                    );
                } else if (type === 'NoteVid') {
                    return (
                        keep.type === 'NoteVid' && keep.info.title.toLowerCase().includes(searchStr)
                    );
                } else if (type === 'NoteTxt') {
                    return (
                        keep.type === 'NoteTxt' && keep.info.title.toLowerCase().includes(searchStr)
                    );
                }
            });
            return keepsToShow;
        },
    }
};
