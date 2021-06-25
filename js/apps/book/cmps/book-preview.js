import { bookService } from '../services/book-service.js';

export default {
	props: ['book'],
	template: `
    <router-link :to="'/book/'+book.id" class="book-preview">
        <p><span class="preview-name">Name:</span> {{book.title}}</p>
		<img :src="book.thumbnail" class="book-img">
        <p><span class="preview-price">Price:</span> {{showCurrency}}</p>
	</router-link>
    `,
	computed: {
		showCurrency() {
			return this.book.listPrice.amount.toLocaleString('en', {
				style: 'currency',
				currency: this.book.listPrice.currencyCode,
			});
		},
	},
};
