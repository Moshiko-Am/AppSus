import { keepService } from '../services/keep-service.js';
import noteImg from '../cmps/note-types/note-img.js';
import noteTxt from '../cmps/note-types/note-txt.js';
import noteTodos from '../cmps/note-types/note-todos.js';
import noteVid from '../cmps/note-types/note-video.js';
import keepHeader from '../cmps/keep-header.js';
import noteCreate from '../cmps/note-create.js';
import editKeepBar from '../cmps/edit-keep-bar.js';

export default {
	template: `
    <section class="keep-app">
    <keep-header @filter="setFilter" />
    <note-create @updateKeeps="loadKeeps"/>
	<div v-if="!keeps">
		<h2 class="no-keeps">No keeps yet , let's get started</h2>
	</div>
		<div class="keeps-container">
			<component v-for="keep in keepsToShow" v-if="keep.isPinned" :is="keep.type" @removeKeep="remove" @updateKeep="updateKeep" :keep="keep" class="keep">
				</component>
    	</div>
    	<div class="keeps-container">
				<component v-for="keep in keepsToShow" v-if="!keep.isPinned" :key="keep.id" :is="keep.type" @removeKeep="remove" @updateKeep="updateKeep" :keep="keep" class="keep">
				</component>
        </div>
    </div>
    </section>
    `,
	data() {
		return {
			keeps: null,
			filter: null,
		};
	},
	created() {
		this.loadKeeps();
	},
	components: {
		noteImg,
		noteTodos,
		noteTxt,
		noteVid,
		keepHeader,
		noteCreate,
		editKeepBar,
	},
	methods: {
		remove(keepId) {
			keepService.remove(keepId).then(() => {
				if (this.keeps.length === 1) {
					this.keeps = null;
					return;
				}
				this.loadKeeps();
			});
		},
		updateKeep(keep) {
			keepService.update(keep).then(() => {
				this.loadKeeps();
			});
		},
		setFilter(filter) {
			this.filter = filter;
		},
		loadKeeps() {
			keepService.get().then((keeps) => {
				this.keeps = keeps;
			});
		},
	},
	computed: {
		keepsToShow() {
			if (!this.filter) return this.keeps;
			const searchStr = this.filter.txt.toLowerCase();
			const type = this.filter.type;
			const keepsToShow = this.keeps.filter((keep) => {
				if (type === 'ALL') return keep;
				return keep.type === type;
			}).filter((keep) => {
				if (keep.type === 'noteTodos') {
					if (!keep.info.label) return keep;
					return keep.info.label
						.toLowerCase()
						.includes(searchStr);
				} else {
					if (!keep.info.title) return keep;
					return keep.info.title
						.toLowerCase()
						.includes(searchStr);
				}
			})
			return keepsToShow;
		},
	},
};
