import { storageService } from '../../../services/async-storage-service.js';

export const keepService = {
	create,
	read,
	update,
	remove,
};

const KEEP_KEY = 'keepDB';
const starterKeeps = [
	{
		type: "NoteTxt",
		isPinned: true,
		info: {
			title:"Hello World",
			txt: "Fullstack Me Baby!"
		},
		id:'Awf1H'
	},
	{
		type: "NoteImg",
		info: {
			url: "img/gmail.png",
			title: "Me playing Mi"
		},
		style: {
			backgroundColor: "#00d"
		},
		id:'Aw23H'
	},
	{
		type: "NoteTodos",
		info: {
			label: "How was it:",
			todos: [
				{ txt: "Do that", doneAt: null },
				{ txt: "Do this", doneAt: 187111111 }
			]
		},
		id:'Tdf1H'
	}
]


function create(note) {
	return storageService.post(KEEP_KEY,note)
}

function read() {
	return storageService.query(KEEP_KEY).then((keeps) => {
		if (keeps.length) return keeps
		storageService.postMany(KEEP_KEY, starterKeeps);
		return starterKeeps;
	});
}

function update() {

}

function remove(keepId) {
	return storageService.remove(KEEP_KEY,keepId);
}
