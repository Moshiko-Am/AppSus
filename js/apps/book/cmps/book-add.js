import { bookService } from '../services/book-service.js';

export default {
	template: `
    <section class="book-add-container">
    <header class="add-book-header">
        <h1 class="add-header">Find and Add new Books</h1>
    </header>
    <div class="search-book">
        <div class="input-container">
            <label>
            <input type="text" placeholder="Search for a book" v-model="searchParam">
            </label>
            <button class="btn btn-search-book" @click="searchBook">Search</button>
        </div>
            <ul class="search-list" v-if="books.length">
            <li class="search-item" v-for="book in books">
                {{book.title}}
            <button @click="addBook(book)">+</button>
            </li>
            </ul>
        </div>
    </section>
    `,
	data() {
		return {
			searchParam: null,
			books: [],
		};
	},
	methods: {
		searchBook() {
			bookService
				.getBook(this.searchParam)
				.then((books) => (this.books = books));
		},
		addBook(book) {
			bookService.addBookToStorage(book);
		},
	},
};
