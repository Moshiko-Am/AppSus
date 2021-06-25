import txtEditor from "./editors/txt-editor.js";
import listEditor from "./editors/list-editor.js";
import imgEditor from "./editors/img-editor.js";
import videoEditor from "./editors/video-editor.js";
import { keepService } from "../services/keep-service.js";

export default {
    template: `
    <section class="note-create">
        <div class="note-types">
        <input type="text" @click="chooseNoteType('txt')" placeholder="Add A Note" disabled>
        <!-- <h3>Add Note</h3> -->
        <button class="btn-note" title="Add Text Note" @click="chooseNoteType('txt')"><img class="note-type-img" src="img/keep-icons/text.png" alt=""></button>
        <button class="btn-note" title="Add Image Note" @click="chooseNoteType('img')"><img class="note-type-img" src="img/keep-icons/image.png" alt=""></button>
        <button class="btn-note" title="Add List Note" @click="chooseNoteType('list')"><img class="note-type-img" src="img/keep-icons/list.png" alt=""></button>
        <button class="btn-note" title="Add Video Note" @click="chooseNoteType('video')"><img class="note-type-img" src="img/keep-icons/video-player.png" alt=""></button>
        <button class="btn-note" title="Add Audio Note" @click="chooseNoteType('audio')"><img class="note-type-img" src="img/keep-icons/microphone.png" alt=""></button>
        </div>
        <!-- <txt-editor @addNote="addNote" /> -->
        <!-- <list-editor @addNote="addNote" /> -->
        <!-- <img-editor @addNote="addNote" /> -->
        <!-- <video-editor @addNote="addNote" /> -->
        <div v-if="type" @click="closeEditor" class="note-create-bg">
            <component v-if="type" @addNote="addNote" @closeEditor="closeEditor" @click.native.stop :is="editorType"></component>
        </div>
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
                this.type = null;
            });
        },
        closeEditor(){
            this.type = null
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
