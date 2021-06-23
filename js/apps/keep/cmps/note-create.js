import txtEditor from "./txt-editor.js";
import listEditor from "./list-editor.js";
import imgEditor from "./img-editor.js";
import videoEditor from "./video-editor.js";
import { keepService } from "../services/keep-service.js";

export default {
    template: `
    <section class="note-create">
        <div v-if="!type" class="note-types">
        <input type="text" @click="chooseNoteType('txt')" placeholder="Add A Note">
        <button class="btn-note" @click="chooseNoteType('txt')"><img class="note-type-img" src="img/text.png" alt=""></button>
        <button class="btn-note" @click="chooseNoteType('img')"><img class="note-type-img" src="img/img-icon.png" alt=""></button>
        <button class="btn-note" @click="chooseNoteType('list')"><img class="note-type-img" src="img/checkbox.png" alt=""></button>
        <button class="btn-note" @click="chooseNoteType('video')"><img class="note-type-img" src="img/video.png" alt=""></button>
        <button class="btn-note" @click="chooseNoteType('audio')"><img class="note-type-img" src="img/audio.png" alt=""></button>
        </div>
        <!-- <txt-editor @addNote="addNote" /> -->
        <!-- <list-editor @addNote="addNote" /> -->
        <!-- <img-editor @addNote="addNote" /> -->
        <!-- <video-editor @addNote="addNote" /> -->
        <component v-if="type" :is="editorType"></component>
    </section>
    `,
    data(){
        return {
            type : null,
        }
    },
    methods: {
        chooseNoteType(type){
            this.type = type
            console.log(this.type);
        },
        addNote(note){
            console.log('hi');
            keepService.create(note).then(()=>{
                this.$emit('updateKeeps')
            });
        }
    },
    components: {
        txtEditor,
        listEditor,
        imgEditor,
        videoEditor
    },
    computed: {
        editorType(){
           if(this.type === 'txt') return txtEditor
           if(this.type === 'list') return listEditor
           if(this.type === 'img') return imgEditor
           if(this.type === 'video') return videoEditor
        }
    }

};