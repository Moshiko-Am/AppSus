import bookPreview from './book-preview.js';

export default {
	props: ['books'],
	components: {
		bookPreview,
	},
	template: `
        <section class="book-list-container">
            <ul class="book-list" >
                <li v-for="book in books" :key="book.id" @click="selectBook(book.id)" class="book-preview-container">
					<book-preview :book="book"/>
                </li>
            </ul>
        </section>
    `,
	methods: {
		selectBook(bookId) {
			this.$emit('selected', bookId);
		},
	},
};
