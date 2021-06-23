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
			txt: "Fullstack Me Baby!"
		}
	},
	{
		type: "NoteImg",
		info: {
			url: "http://some-img/me",
			title: "Me playing Mi"
		},
		style: {
			backgroundColor: "#00d"
		}
	},
	{
		type: "NoteTodos",
		info: {
			label: "How was it:",
			todos: [
				{ txt: "Do that", doneAt: null },
				{ txt: "Do this", doneAt: 187111111 }
			]
		}
	}
]


function create() {

}

function read() {
	return storageService.query(KEEP_KEY).then((keeps) =>{
		let myKeeps = keeps
		if(!myKeeps.length){
			myKeeps = starterKeeps;
		}
		storageService.create(KEEP_KEY,myKeeps);
		return myKeeps
	});
}

function update() {

}

function remove() {

}
