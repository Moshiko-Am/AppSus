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
			title: "Hello World",
			txt: "Fullstack Me Baby!"
		},
		style: {
			backgroundColor: "rgb(215, 175, 251)"
		},
		id: 'Awf1H'
	},
	{
		type: "NoteImg",
		isPinned: false,
		info: {
			url: "img/gmail.png",
			title: "Me playing Mi"
		},
		style: {
			backgroundColor: "rgb(255, 244, 117)"
		},
		id: 'Aw23H'
	},
	{
		type: "NoteTodos",
		isPinned: false,
		info: {
			label: "How was it:",
			todos: [
				{ txt: "Do that", doneAt: null },
				{ txt: "Do this", doneAt: 187111111 }
			]
		},
		style: {
			backgroundColor: "#f28b82"
		},
		id: 'Tdf1H'
	},
	{
		id: "eFciq",
		info: { label: "list 2", todos: [{ txt: "item", isDone: false }] },
		isPinned: false,
		style: { backgroundColor: "#fff475" },
		type: "NoteTodos",
	},
	{
		id: "7FND8",
		info: { label: "list", todos: [{ txt: "item", isDone: false },{ txt: "item", isDone: true },{ txt: "item", isDone: false },] },
		isPinned: false,
		style: { backgroundColor: "#aecbfa" },
		type: "NoteTodos",
	},
	{
	id: "3Hg1I",
	info: {
	title: "Wave Surfing",
	url: "https://www.youtube.com/embed/Aa4DNTcWz8U"
	},
	isPinned: false,
	style: {backgroundColor: "#fdcfe8"},
	type: "NoteVid"
	}

]


function create(note) {
	return storageService.post(KEEP_KEY, note)
}

function read() {
	return storageService.query(KEEP_KEY).then((keeps) => {
		if (keeps.length) return keeps
		storageService.postMany(KEEP_KEY, starterKeeps);
		return starterKeeps;
	});
}

function update(keep) {
	return storageService.put(KEEP_KEY, keep)
}

function remove(keepId) {
	return storageService.remove(KEEP_KEY, keepId);
}
