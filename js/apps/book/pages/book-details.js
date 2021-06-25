import longText from '../cmps/long-text.js';
import reviewAdd from '../cmps/review-add.js';
import { bookService } from '../services/book-service.js';

export default {
	components: {
		longText,
		reviewAdd,
	},
	template: `
    <section v-if="book" class="book-details" >
	<img class="book-img" :src="this.book.thumbnail" >
        <p>Book Id: {{this.book.id}}.</p>
        <p>Title: {{this.book.title}}.</p>
        <p>Subtitle: {{this.book.subtitle}}.</p>
        <p>Authors: {{this.book.authors}}.</p>
        <p>Published Date:{{this.book.publishedDate}}. {{bookAge}}</p>
        <long-text :txt="this.book.description"></long-text>
        <p>Page Count: {{this.book.pageCount}}. {{bookReadTime}}</p>
        <p>Categories: {{this.book.categories}}.</p>
        <p>Thumbnail: {{this.book.thumbnail}}.</p>
        <p>Language: {{this.book.language}}.</p>
        <p>List Price: <span :class="priceColor">{{showCurrency}}.</span> <span :class=isSale>{{isOnSale}}</span></p>
		<button v-if="!showReview" @click="toggleReview">Write a review</button>
		<review-add v-if="showReview" @hideReview="toggleReview"/>
		<div class="next-prev-btns-container">
			<button class="btn btn-next">
				<router-link :to="'/book/' + nextBookId">Next Book</router-link>
			</button>
			<button class="btn btn-prev">
				<router-link :to="'/book/' + prevBookId">Previous Book</router-link>
			</button>
		</div>
		<button>
			<router-link class="btn" to="/book">Return</router-link>
		</button>
    </section>
    `,
	data() {
		return {
			book: null,
			showReview: false,
			nextBookId: null,
			prevBookId: null,
		};
	},
	watch: {
		'$route.params.bookId': {
			immediate: true,
			handler() {
				const { bookId } = this.$route.params;
				bookService
					.getBookById(bookId)
					.then((book) => (this.book = book));
				bookService
					.getNextBookId(bookId)
					.then((bookId) => (this.nextBookId = bookId));
				bookService
					.getPrevBookId(bookId)
					.then((bookId) => (this.prevBookId = bookId));
			},
		},
	},
	methods: {
		toggleReview() {
			this.showReview = !this.showReview;
		},
	},
	computed: {
		bookReadTime() {
			if (this.book.pageCount > 500) return 'Long reading.';
			if (this.book.pageCount > 200) return 'Decent reading.';
			if (this.book.pageCount < 100) return 'Light reading.';
		},
		bookAge() {
			if (new Date().getFullYear() - this.book.publishedDate > 10)
				return 'Veteran Book.';
			if (new Date().getFullYear() - this.book.publishedDate < 1)
				return 'New!';
		},
		showCurrency() {
			return this.book.listPrice.amount.toLocaleString('en', {
				style: 'currency',
				currency: this.book.listPrice.currencyCode,
			});
		},
		priceColor() {
			return {
				expensive: this.book.listPrice.amount > 150,
				cheap: this.book.listPrice.amount < 20,
			};
		},
		isOnSale() {
			if (this.book.listPrice.isOnSale) return 'SALE';
			return;
		},
		isSale() {
			return { sale: this.book.listPrice.isOnSale };
		},
	},
};
