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
		style: {
			backgroundColor: "white"
		},
		id:'Awf1H'
	},
	{
		type: "NoteImg",
		isPinned : false,
		info: {
			url: "img/gmail.png",
			title: "Me playing Mi"
		},
		style: {
			backgroundColor: "white"
		},
		id:'Aw23H'
	},
	{
		type: "NoteTodos",
		isPinned : false,
		info: {
			label: "How was it:",
			todos: [
				{ txt: "Do that", doneAt: null },
				{ txt: "Do this", doneAt: 187111111 }
			]
		},
		style: {
			backgroundColor: "white"
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

function update(keep) {
	storageService.put(KEEP_KEY,keep)
}

function remove(keepId) {
	return storageService.remove(KEEP_KEY,keepId);
}
