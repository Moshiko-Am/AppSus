import { bookService } from '../services/book-service.js';

export default {
	template: `
    <section class="review-container">
        <h2 class="review-header">Add a Review</h2>
        <form @submit.prevent="save">
            <div class="input-user-name">
                <label>
                    <input type="text" ref="nameInput" placeholder="Full Name" v-model="review.name">
                </label>
            </div>
            <div class="select-rate">
                <span class="rate">Rate:</span>
                <select name="" v-model="review.rate">
                    <option value="num" v-for="num in 5" :key="num">{{num}}</option>
                </select>
            </div>
            <div class="input-date">
                <span class="read-at">Read At: </span>
                <label>
                    <input type="date" v-model="review.date">
                </label>
            </div>
            <div class="text-area-container">
            <textarea  cols="30" rows="10" placeholder="Comments..." v-model="review.txt"></textarea>
            </div>
            <button class="btn-submit">Submit Review</button>
        </form>
        <button @click="hideReview" class="btn-hide">Hide Form</button>
        <div class="reviews-container">
            <h3>Book Reviews</h3>
            <ul class="reviews-list" v-if="reviews">
                <li v-for="review in reviews" :key="review.id">
                    <p>Id: {{review.id}}</p>
                    <p>Writer Name: {{review.name}}</p>
                    <p>Rate: {{review.rate}}</p>
                    <p>Read At: {{review.date}}</p>
                    <p>Review: {{review.txt}}</p>
                    <button @click="removeReview(review.id)" class="btn-delete">Delete Review</button>
                </li>
            </ul>
        </div>
    </section>
    `,
	data() {
		return {
			book: null,
			review: {
				name: '',
				rate: null,
				date: null,
				txt: '',
			},
			reviews: null,
		};
	},
	methods: {
		save() {
			bookService.addReview(this.book.id, this.review);
			this.reviews.push({...this.review});
            this.review = {
				name: '',
				rate: null,
				date: null,
				txt: '',
			}
		},
		hideReview() {
			this.$emit('hideReview');
		},
		removeReview(id) {
			bookService.removeReview(id, this.book.id);
			const reviewIdx = this.reviews.findIndex(
				(review) => review.id === id
			);
			this.reviews.splice(reviewIdx, 1);
		},
        formatDate() {
            var date = new Date();
            var years = date.getFullYear();
            var months = date.getMonth() + 1;
            var days = date.getDate();
            var timeFormat = years + '-' + (months + '').padStart(2, '0') + '-' + (days + '').padStart(2, '0');
            return timeFormat;
        },
	},

	created() {
		const { bookId } = this.$route.params;
		bookService.getBookById(bookId).then((book) => {
			this.book = book;
			this.reviews = this.book.reviews || [];
		});
        this.review.date = this.formatDate();
	},
};
