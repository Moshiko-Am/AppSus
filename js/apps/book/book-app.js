import { bookService } from './services/book-service.js';
import bookFilter from './cmps/book-filter.js';
import bookList from './cmps/book-list.js';
import bookDetails from './pages/book-details.js';
import bookHeader from './cmps/book-header.js';

export default {
	components: {
		bookFilter,
		bookList,
		bookDetails,
		bookHeader,
	},
	template: `
    <section class="book-app-container">
		<book-header @filtered="setFilter"></book-header>
        <book-details :book="selectedBook" v-if="selectedBook" @unShow="unShow"/>
        <div v-else>
            <book-list :books="booksToShow" @selected="selectBook" />
        </div>
    </section>
    `,

	data() {
		return {
			books: [],
			filterBy: null,
			selectedBook: null,
		};
	},
	computed: {
		booksToShow() {
			if (!this.filterBy) return this.books;
			if (this.filterBy.fromPrice === '') this.filterBy.fromPrice = 0;
			if (this.filterBy.toPrice === '') this.filterBy.toPrice = Infinity;
			const searchStr = this.filterBy.title.toLowerCase();
			const booksToShow = this.books.filter((book) => {
				return (
					book.title.toLowerCase().includes(searchStr) &&
					book.listPrice.amount >= this.filterBy.fromPrice &&
					book.listPrice.amount <= this.filterBy.toPrice
				);
			});
			return booksToShow;
		},
	},
	methods: {
		setFilter(filterBy) {
			this.filterBy = filterBy;
		},
		selectBook(bookId) {
			bookService
				.getBookById(bookId)
				.then((book) => (this.selectedBook = book));
		},
		unShow() {
			this.selectedBook = null;
		},
		loadBooks() {
			bookService.query().then((books) => (this.books = books));
		},
	},
	created() {
		this.loadBooks();
	},
};
